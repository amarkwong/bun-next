'use client'
import { useState } from 'react';
import _ from "lodash";
import Image from 'next/image';

function SearchMovie() {
  const [query, setQuery] = useState('');
  const [imageSrc, setImageSrc] = useState(null);

  const fetchImage = _.debounce((searchTerm) => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:3000/api?movie=${searchTerm}}`);
        const { data } = await response.json();
        setImageSrc(data.Poster);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    })();
  }, 1000);

  const handleInputChange = (e:any) => {
    setQuery(e.target.value);
    fetchImage(e.target.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} placeholder="Movie" className="input input-bordered w-full max-w-xs"/>
      {imageSrc && <Image
              src={imageSrc ?? ""}
              alt="Movie"
              className="w-48 h-72 object-cover"
              width={150}
              height={226}
            />
      }
    </div>
  );
}

export default SearchMovie;