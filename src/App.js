import { useEffect, useState } from 'react';
import Button from './components/Button';
import GiphyDisplay from './components/GiphyDisplay';
import './App.css';

function App() {

  const apiKey = 'byjRHdNQH9l709Bdu6oHJABI1MmDo62H'

  const [giphy, setGiphy] = useState(null);

  const getGif = async () => {
    const URL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setGiphy(data);
  }
  return (
    <div className="App">
      <h1>Giphy</h1>
      <Button getGif={getGif}/>
      <h1>Use Giphy to pull some Giphs</h1>
      <GiphyDisplay giphy={giphy}/>
    </div>
  );
}

export default App;
