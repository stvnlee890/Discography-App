import { useEffect, useState } from 'react'
import { Routes, Route, Link  } from 'react-router-dom';
import './App.css';
import ArtistInfo from './components/ArtistInfo';
import Home from './components/Home';
import Results from './components/Results';
import Search from './components/Search';

function App() {
  
  const[images, setImages] = useState([]);
  const[searchArtist, setSearchArtist] = useState('');
  const token = process.env.REACT_APP_ACCESS_TOKEN;

 
  function getImages() {
  const searchOptions = {
    key: process.env.REACT_APP_DISCOG_KEY,
    secret: process.env.REACT_APP_DISCOG_SECRET,
    keyPath: '&key=',
    secretPath: '&secret=',
  }
  const discogUrl = 'https://api.discogs.com/database/search?q='
  const url = `${discogUrl}${searchArtist}${searchOptions.keyPath}${searchOptions.key}${searchOptions.secretPath}${searchOptions.secret}`;
  // console.log(url)

  fetch(url, {
    headers: {
      'Authorization': `Discogs token=${token}`,
      'Accept': 'application/vnd.discogs.v2.html+json'
    }
  })
  .then(response => response.json())
  .then(response => {
    const artistType = response.results.filter((artist) => artist.type === 'artist' );
    setImages(artistType)

    // setImages(response.results);
    //react renders after a fetch, and then sets the searchArtist state back to an empty string. 
    setSearchArtist('');
    // console.log(images)
    // console.log(images.type)
  })
  .catch(console.error);

}

useEffect(() => {
  getImages()
}, [])

  return (
    <div className="App">
      <header>
        <h1>
       <Link to='/' style={{textDecoration: 'none'}}>Home</Link>
        </h1>
       <Search searchArtist={searchArtist} setSearchArtist={setSearchArtist} getImages={getImages} />
      </header>
      <Routes>
        <Route path='/' element={<Home images={images} token={token} />} />
        <Route path='results/' element={<Results images={images}  />}/>
        <Route path='artists/:artistId' element={<ArtistInfo images={images} token={token}/>} />
      </Routes>
    </div>
  );
}

export default App;

