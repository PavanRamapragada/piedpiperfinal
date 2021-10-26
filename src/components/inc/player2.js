import {useState, useEffect} from 'react';
import Player from '../playercomponents/player';
import './Musicplayer.css';
import ARR from '../images/ARR.jpg';

function Player2() {

  const [songs]=useState([
    {
        title: "Adharanee",
        artist: "AR Rahman, Sayonara",
        img_src: ARR,
        src: require('../../musicdata/AR Rahman/Adharanee.mp3').default
    },
    {
        title: "Balleilakka",
        artist: "SP Balasubrahmanyam",
        img_src: ARR,
        src: require('../../musicdata/AR Rahman/Balleilakka.mp3').default
    },

    {
        title: "Andaala Raakshasive",
        artist: "SP Balasubrahmanyam, Harini",
        img_src: ARR,
        src: require('../../musicdata/AR Rahman/Andaala raakshasive.mp3').default
    },

    {
        title: "Deham Thiri",
        artist: "AR Rahman",
        img_src: ARR,
        src: require('../../musicdata/AR Rahman/Deham thiri.mp3').default
    },

    {
        title: "Magadheera",
        artist: "Shankar Mahadevan, S.Janaki",
        img_src: ARR,
        src: require('../../musicdata/AR Rahman/Magadheera.mp3').default
    },

    {
      title: "Roja",
      artist: "SP Balasubrahmanyam, Sujatha Mohan",
      img_src: ARR,
      src: require('../../musicdata/AR Rahman/Naa Cheli Rojave.mp3').default
    },
    
    {
      title: "Sahana",
      artist: "Udit Narayana, Chinamayee",
      img_src: ARR,
      src: require('../../musicdata/AR Rahman/Sahana.mp3').default
    },

    {
      title: "Sankurathri Kodi",
      artist: "Madhushree, AR Rahman",
      img_src: ARR,
      src: require('../../musicdata/AR Rahman/Sankurathri Kodi.mp3').default
    },

    {
      title: "Theppalelli Poyaka",
      artist: "SP Balasubrahmanyam, Sujatha Mohan",
      img_src: ARR,
      src: require('../../musicdata/AR Rahman/Theppalelli poyaka.mp3').default
    },

    {
      title: "Pachani Chilukalu",
      artist: "K.J. Yesudas",
      img_src: ARR,
      src: require('../../musicdata/AR Rahman/Pachani Chilukalu.mp3').default
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

export default Player2;
