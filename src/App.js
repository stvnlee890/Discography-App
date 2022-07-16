import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Results from './components/Results';
import Search from './components/Search';




function App() {
  const[images, setImages] = useState([])
  const[searchArtist, setSearchArtist] = useState('')
 
  function getImages(searchArtist) {

  const searchOptions = {
    key: process.env.REACT_APP_DISCOG_KEY,
    secret: process.env.REACT_APP_DISCOG_SECRET,
    keyPath: '&key=',
    secretPath: '&secret=',
  }
  const discogUrl = 'https://api.discogs.com/database/search?q='
  const url = `${discogUrl}${searchArtist}${searchOptions.keyPath}${searchOptions.key}${searchOptions.secretPath}${searchOptions.secret}`;
  console.log(url)


  fetch(url)
  .then(response => response.json())
  .then(response => {
    setImages(response);
    setSearchArtist('');
    console.log(response)
  })
  .catch(console.error);

}
useEffect(() => {
  getImages(searchArtist)
}, [])

function handleChange(event) {
  console.log(event.target.value)
  setSearchArtist(event.target.value);
}
function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.value)
  getImages(searchArtist);
}

  return (
    <div className="App">
      <Search handleChange={handleChange} handleSubmit={handleSubmit} searchArtist={searchArtist} />
      <Results images={images} />
    </div>
  );
}

export default App;

