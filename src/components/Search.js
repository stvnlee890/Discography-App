import { useNavigate, Link } from 'react-router-dom'


function Search({ searchArtist, setSearchArtist, getImages }){

  function handleChange(event) {
    console.log(event.target.value)
    setSearchArtist(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value)
    getImages();
  }
  return(
   <form onSubmit={handleSubmit} >
    <input placeholder="search artist" type='text' required onChange={handleChange} value={searchArtist}>
    </input>
    <button type='submit' >
      search
    </button>
   </form>
  )
}

export default Search;