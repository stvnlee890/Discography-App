import '../../index.css'
import React from 'react'
function ArtistProfile({ artistInformation }) {
  return(
    <div>
      <img className='profile-image' src={artistInformation.images[0].uri} alt='profile-img'/>
      <h3>
        Aliases
      </h3>
        {artistInformation.aliases.map(aliases => (
          <div>{aliases.name}</div>
        ))}
      <h3>
        Bio
      </h3>
      <div className='bio' dangerouslySetInnerHTML={{__html: `<p>${artistInformation.profile_html}</p>`}} />
      <h3>
        URLS
      </h3>
      <p>
        {artistInformation.urls.map(nameVar=>(
          <p>{nameVar}</p>
          ))}
      </p>
 
      
    </div>
  )
}
export default ArtistProfile
