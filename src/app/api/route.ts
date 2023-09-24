import { NextResponse } from 'next/server'
 
export async function GET(movie: string) {

  const uri =  encodeURIComponent(movie)
  const apiKey = process.env.OMDb_API_KEY
  const requestURI = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${uri}`
  const res = await fetch(requestURI)
  const data = await res.json()
 
  return NextResponse.json({ data })
}