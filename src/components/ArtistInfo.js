import React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArtistProfile from "./ArtistInfo/ArtistProfile";
import Discography from "./ArtistInfo/Discography";
import '../App.css'

function ArtistInfo({ token }) {

  const[artistInformation, setArtistInformation] = useState()
  const[error, setError] = useState(false)
 
let {artistId} = useParams()
useEffect(() => {

const discogUrl = 'https://api.discogs.com/artists/'
const url = `${discogUrl}${artistId}`

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
})
.catch(console.error);
 
}, [])

if(error){
  return(
    <div>
      <h4>
        please try a different search
      </h4>
    </div>
  )
}

return(
  <div className="artist-info-container">

      {artistInformation ? <ArtistProfile artistInformation={artistInformation} /> : <p>loading</p> }
    <div className="discog-main-container">
    <Discography artistId={artistId}/>
    </div>
  </div>


  )
}

export default ArtistInfo;

