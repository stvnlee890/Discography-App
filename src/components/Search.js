
import { useNavigate } from 'react-router-dom'
import '../App.css'; 

const Search = ({ searchArtist, setSearchArtist, getImages }) => {

let navigate = useNavigate();

 const handleChange = (event) => {
    setSearchArtist(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(); 
    navigate(`results?query=${searchArtist}`);
  }
  return(
    <form onSubmit={handleSubmit} >
    <div className='search-box'>
    <input className='search-text' placeholder="search artist" type='text' onChange={handleChange} value={searchArtist}>
    </input>
    </div>

   </form>
  )
}

export default Search;