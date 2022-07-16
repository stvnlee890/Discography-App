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
//  console.log(images)
  
  function getImages() {
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
    setImages(response.results[0].thumb);
    setSearchArtist('');
    console.log(response)
  })
  .catch(console.error);

}

useEffect(() => {
  getImages()
}, [])

  return (
    <div className="App">
      <Search  searchArtist={searchArtist} setSearchArtist={setSearchArtist} getImages={getImages}/>
      <Home />
      <Results images={images} />
    </div>
  );
}

export default App;

