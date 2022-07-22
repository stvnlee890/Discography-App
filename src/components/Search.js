
import { useNavigate } from 'react-router-dom'
import '../App.css'; 

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
    <div className='search-box'>
    <input className='search-text' placeholder="search artist" type='text' onChange={handleChange} value={searchArtist}>
    </input>
    </div>
    {/* <button className='search-button'>
      search
    </button> */}
   </form>
  )
}

export default Search;