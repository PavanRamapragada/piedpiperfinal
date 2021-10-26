import {useState, useEffect} from 'react';
import Player from '../playercomponents/player';
import './Musicplayer.css';
import Raja from '../images/Ilayaraja.jpg';

function Player1() {

  const [songs]=useState([
    {
        title: "Chilakamma",
        artist: "SP Balasubrahmanyam, K.S.Chitra",
        img_src: Raja,
        src: require('../../musicdata/Ilayaraja/Chilakamma.mp3').default
    },
    {
        title: "Thendral Vanthu",
        artist: "Ilayaraja, S. Janaki",
        img_src: Raja,
        src: require('../../musicdata/Ilayaraja/Thendral-Vanthu.mp3').default
    },

    {
        title: "Hello Guru",
        artist: "SP Balasubrahmanyam",
        img_src: Raja,
        src: require('../../musicdata/Ilayaraja/Hello Guru.mp3').default
    },

    {
        title: "Nee paartha paarvai",
        artist: "Aasha Bhonsle, Hari Haran",
        img_src: Raja,
        src: require('../../musicdata/Ilayaraja/Nee-Partha.mp3').default
    },

    {
        title: "Sundari Neeve",
        artist: "SP Balasubrahmanyam, K.S.Chitra",
        img_src: Raja,
        src: require('../../musicdata/Ilayaraja/Sundari Neeve.mp3').default,
    },

    {
      title: "Rajadhi Raja",
      artist: "SP Balasubrahmanyam",
      img_src: Raja,
      src: require('../../musicdata/Ilayaraja/Raaja Raajadhi.mp3').default
    },
    
    {
      title: "Oh Priya",
      artist: "SP Balasubrahmanyam, K.S.Chitra",
      img_src: Raja,
      src: require('../../musicdata/Ilayaraja/Oh Priya.mp3').default
    },

    {
      title: "Anando Brahma",
      artist: "SP Balasubrahmanyam, K.S.Chitra",
      img_src: Raja,
      src: require('../../musicdata/Ilayaraja/Anando Brahma.mp3').default
    },

    {
      title: "Singarala Pairullona",
      artist: "SP Balasubrahmanyam, K.J. Yesudas",
      img_src: Raja,
      src: require('../../musicdata/Ilayaraja/Singarala.mp3').default
    },

    {
      title: "Chukkalu Themanna",
      artist: "SP Balasubrahmanyam, K.S.Chitra",
      img_src: Raja,
      src: require('../../musicdata/Ilayaraja/Chukkalu Themanna.mp3').default
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex]=useState(0);
  const [nextSongIndex, setNextSongIndex]=useState(currentSongIndex+1);  

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length -1){
        return 0;
      }
      else return currentSongIndex + 1;
    });
  }, [currentSongIndex])
   
  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default Player1;
