import { useNavigate, Link } from 'react-router-dom'


function Search({ handleSubmit, handleChange, searchArtist }){

  return(
   <form onSubmit={handleSubmit} >
    <input placeholder="search artist" type='text' required onChange={handleChange}>
    </input>
    <button>
      search
    </button>
   </form>
  )
}

export default Search;