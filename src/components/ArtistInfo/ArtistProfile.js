import '../../index.css'
import React from 'react'


function ArtistProfile({ artistInformation }) {
  // console.log(artistInformation)

  const bioRender = {};


  return(
    <div className='artist-profile-container'>

        {artistInformation.images ? 
      <div className='artist-profile-image' >
        <img className='profile-image' alt='profile-img' src={artistInformation.images[0].uri} />
      </div>:null}
      
      <div className='artist-name-container'>

      {artistInformation.name ? 
        <div className='artist-name'>
          <h3 className='artist-info-name'>{artistInformation.name}</h3>
        </div>
        : null}

       {artistInformation.realname ? 
      <div className='artist-name'>
        <h3>Real Name</h3>
        <span>{artistInformation.realname}</span>
      </div> :null}

     <div className='artist-name'>
      {artistInformation.aliases ? 
        [<h3>Aliases</h3>,
        artistInformation.aliases.map((aliases, index) => (
        <span className='artist-aliases' key={index}>
          {` ${aliases.name}|`}
        </span>
        ))]: null}
     </div>
      </div>
  
      {artistInformation.profile_html ? 
      <div className='bio-container'>
        <p className='p-tag-bio'>About {artistInformation.name}</p>
          <span 
          className='bio' 
          dangerouslySetInnerHTML={{__html: `<p>${artistInformation.profile_html}</ p>`}} 
          ></span>
        </div> : null}


      <div className='url'>
        {artistInformation.urls ? 
        [<h3 className='h3-url' >URL</h3>,
        artistInformation.urls.map((nameVar, index)=>(
          <ul>
            <li key={index}>
            <a className='a-tag-url' href={nameVar}>{nameVar}</a>
          </li>
          </ul>
          ))] : null}
      </div>
    </div>
  )
}
export default ArtistProfile
