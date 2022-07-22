import '../../index.css'
import React from 'react'


const ArtistProfile = ({ artistInformation }) => {



console.log(artistInformation)

  return(
    <div className='artist-profile-container'>

        {artistInformation.images ? 
      <div className='artist-profile-image' >
        <img className='profile-image' alt='profile-img' src={artistInformation.images[0].uri} />
      </div>: null}
      
      <div className='artist-name-container'>

      {artistInformation.name ? 
        <div className='artist-name stage'>
          <h3 className='artist-info-name'>{artistInformation.name}</h3>
        </div>
        : null}

       {artistInformation.realname ? 
      <div className='artist-name'>
        <h3>Real Name</h3>
        <span className='artist-name-real'>{artistInformation.realname}</span>
      </div> :null}

     <div className='artist-name'>
       <h3>Aliases</h3>
      {artistInformation.aliases ? 
        artistInformation.aliases.map((aliases, index) => {
        return <div key={aliases.id}>
          <span className='artist-aliases'>
            {`${aliases.name}`}
           </span>
        </div>
        }): null}
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
        <div className='url-container'>
          <h3 className='h3-url'>URL</h3>
        </div>
        {artistInformation.urls ? 
        artistInformation.urls.map((nameVar, index, element)=>{
          console.log(index)
          return <div key={`urls-${index}`}>
          <ul>
            <li>
              <a className='a-tag-url' href={nameVar}>{nameVar}</a>
            </li>
          </ul>
          </div>
        }) : null}
      </div>
    </div>
  )
}
export default ArtistProfile
