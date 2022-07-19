import '../../index.css'
import React from 'react'
function ArtistProfile({ artistInformation }) {
  return(
    <div>
      <img className='profile-image' src={artistInformation.images ? artistInformation.images[0].uri : null} alt='profile-img'/>
      <h3>
        Real Name
      </h3>
        <div>{artistInformation.realname}</div>
      <h3>
        Aliases
      </h3>
        {artistInformation.aliases ? artistInformation.aliases.map(aliases => (
          <div key={artistInformation.aliases.index} >{aliases.name}</div>
        )) : <p>no aliases</p>}
      <h3>
        Bio
      </h3>
      <div className='bio' dangerouslySetInnerHTML={{__html: `<p>${artistInformation.profile_html}</p>`}} />
      <h3>
        {artistInformation.name} urls
      </h3>
      <div>
        {artistInformation.urls ? artistInformation.urls.map(nameVar=>(
          
          <div key={artistInformation.urls.index}>{nameVar}</div>
          )) : null}
      </div>
 
      
    </div>
  )
}
export default ArtistProfile
