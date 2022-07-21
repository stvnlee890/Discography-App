import React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArtistProfile from "./ArtistInfo/ArtistProfile";
import Discography from "./ArtistInfo/Discography";


function ArtistInfo({ token }) {

  const[artistInformation, setArtistInformation] = useState()
  const[error, setError] = useState(false)
  // const token = process.env.REACT_APP_ACCESS_TOKEN;

let {artistId} = useParams()
useEffect(() => {
console.log(artistId)

const discogUrl = 'https://api.discogs.com/artists/'
const url = `${discogUrl}${artistId}`
console.log(url)

fetch(url, {
  headers: {
    'Authorization': `Discogs token=${token}`,
    'Accept': 'application/vnd.discogs.v2.html+json'
  }
})
.then(response => {
  if(response.status === 404){
    return setError(true)
  }
  return response.json()
}) 
.then(response => {
  setArtistInformation(response);
  console.log(response)
  //react renders after a fetch, and then sets the searchArtist state back to an empty string. 
})
.catch(console.error);

}, [])
console.log(artistInformation)
if(error){
  return(
    <div>
      <h4>
        please try a different search
      </h4>
    </div>
  )
}

// console.log(artistInformation)
return(
  <div className="artist-info-container">
    <h1 className="artist-info-header" >
    </h1>
      {artistInformation ? <ArtistProfile artistInformation={artistInformation} /> : <p>loading</p> }
    <h5>
    <Discography artistId={artistId}/>
    </h5>
  </div>


  )
}

export default ArtistInfo;

