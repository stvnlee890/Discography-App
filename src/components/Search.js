
import { useNavigate } from 'react-router-dom'


function Search({ searchArtist, setSearchArtist, getImages }){

let navigate = useNavigate();
  function handleChange(event) {
    // console.log(event.target.value)
    setSearchArtist(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value)
    getImages();
    navigate(`results?query=${searchArtist}`);
  }

  return(
    <form onSubmit={handleSubmit} >
    <input placeholder="search artist" type='text' onChange={handleChange} value={searchArtist}>
    </input>
    <button type='submit' >
      search
    </button>
   </form>
  )
}

export default Search;