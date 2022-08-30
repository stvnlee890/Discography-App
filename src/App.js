import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link  } from 'react-router-dom';
import ArtistInfo from './components/ArtistInfo';
import Home from './components/Home';
import Results from './components/Results';
import Search from './components/Search';

function App() {
  
  const[images, setImages] = useState([]);
  const[searchArtist, setSearchArtist] = useState('');
  const token = process.env.REACT_APP_ACCESS_TOKEN;

  const getImages = () => {
  const searchOptions = {
    key: process.env.REACT_APP_DISCOG_KEY,
    secret: process.env.REACT_APP_DISCOG_SECRET,
    keyPath: '&key=',
    secretPath: '&secret=',
  }
  const discogUrl = 'https://api.discogs.com/database/search?q='
  const url = `${discogUrl}${searchArtist}${searchOptions.keyPath}${searchOptions.key}${searchOptions.secretPath}${searchOptions.secret}`;


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
    setSearchArtist('');
  })
  .catch(console.error);
}
useEffect(() => {
  getImages()
}, [])

  return (
    <div className="App">
      <nav className='navigation' >
        <h6>
       <Link className='home-link' to='/' style={{textDecoration: 'none'}}>HOME</Link>
        </h6>
       <Search searchArtist={searchArtist} setSearchArtist={setSearchArtist} getImages={getImages} />
      </nav>
      <main className='main-page'>
      <Routes>
        <Route path='/' element={<Home images={images} token={token} />} />
        <Route path='results/' element={<Results images={images}  />}/>
        <Route path='artists/:artistId' element={<ArtistInfo images={images} token={token}/>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;

