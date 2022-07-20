import '../../index.css'
import React from 'react'
function ArtistProfile({ artistInformation }) {
  console.log(artistInformation)
  return(
    <div>
        {artistInformation.images ? <img className='profile-image' alt='profile-img' src={artistInformation.images[0].uri} />: null}
      <div>
        {artistInformation.name ? 
        <div>
          <h3>Name</h3>
          {artistInformation.name}
        </div>
        : null}
      </div>



      <div>
       {artistInformation.realname ? 
        <div>
          <h3>
            Real Name
          </h3>
          {artistInformation.realname} 
        </div>
          :null}
      </div>
  
      {artistInformation.aliases ? 
        [<h3>Aliases</h3>,
        artistInformation.aliases.map((aliases, index) => (
        <div key={index} >
          {aliases.name}
        </div>
        ))] : null}
     
      <h3>
        Bio
      </h3>

      <div className='bio' dangerouslySetInnerHTML={{__html: `<p>${artistInformation.profile_html}</p>`}} />

      <div>
        {artistInformation.urls ? 
        [<h3>URL</h3>,
        artistInformation.urls.map((nameVar, index)=>(
          <div key={index}>
          {nameVar}</div>
          ))] : null}
      </div>

    </div>
  )
}
export default ArtistProfile
