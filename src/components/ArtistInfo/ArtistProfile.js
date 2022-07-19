import '../../index.css'
function ArtistProfile({ artistInformation }) {
  return(
    <div>
      <img className='profile-image' src={artistInformation.images[0].uri} alt='profile-img'/>
      <div className='bio' dangerouslySetInnerHTML={{__html: `<p>${artistInformation.profile_html}</p>`}} />
      
        {artistInformation.map((nameVar)=>(
          <p>{nameVar.namevariation}</p>
        ) )}
      
    </div>
  )
}
export default ArtistProfile
