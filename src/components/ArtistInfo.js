import React from "react";


function ArtistInfo({ searchArtist }) {
  console.log(searchArtist)
  return(
    <div>
     <p>{searchArtist}</p>
    </div>
  )
}

export default ArtistInfo;

