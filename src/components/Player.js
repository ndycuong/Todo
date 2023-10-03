import React, { useState, useRef, useEffect } from 'react';
import { audios } from '../audioData'
import {AiFillPlayCircle, AiFillPauseCircle} from 'react-icons/ai'
import {BiSkipPreviousCircle, BiSkipNextCircle } from 'react-icons/bi'
import AudioFiles from './AudioFiles'
import music from '../images/music.png'
export default function Player({
}) {
  const [songs, setSongs]= useState(audios);
  const [isPlaying, setIsPlaying]= useState(false);
  const [currentSong, setCurrentSong]= useState(songs[0]);
  const [currentIndex, setCurrentIndex]= useState(null);
  const audioRef= useRef(null);
  const nextSong = () => {
    if (currentIndex < audios.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentSong(audios[currentIndex + 1]);
    } else {
      // Handle the case where you are at the last song.
      // You can choose to wrap to the first song or do nothing.
      // For example, to wrap to the first song:
      setCurrentIndex(0);
      setCurrentSong(audios[0]);
    }
  };
  
  const prevSong = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentSong(audios[currentIndex - 1]);
    } else {
      // Handle the case where you are at the first song.
      // You can choose to wrap to the last song or do nothing.
      // For example, to wrap to the last song:
      setCurrentIndex(audios.length - 1);
      setCurrentSong(audios[audios.length - 1]);
    }
  };
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }
  const getSongData=(song, index)=>{
    setCurrentIndex(index);
    setCurrentSong(song);
  }
  useEffect(()=> {
    if(isPlaying){
      audioRef.current.play();
    }
    else{
      audioRef.current.pause();
    }
  },[isPlaying, currentIndex])


  return(
    <div className='player-main'>
      <audio ref={audioRef} src={currentSong.music} loop
      className='audio-player'
        >
      </audio>

      <div className='player-card'>
        <div className='image'>
            <img
              src={music}
              alt='music'
              className={`music-img ${isPlaying ? 'rotate' : ''}`}
              style={{
                transform: `rotate(${isPlaying ? '360deg' : '0deg'})`,
                transition: 'transform 1s linear', // Add a smooth transition effect
              }}
            />
        </div>
        <div className='music'>
          <div className='name-player'>
            <div className=''>
              {currentSong ? (
                <div className='name'>
                  <h4 className='active-song'>
                    {currentSong.name}
                  </h4>
                </div>
              ): ( ""

              )}
              
            </div>
            <div className='control-icon'>
              <BiSkipPreviousCircle className='icons'
                color='#7C99AC'
                size={50}
                onClick={prevSong}
                />
              {
                isPlaying ?(
                  <AiFillPauseCircle className='icons'
                color='#7C99AC'
                size={50}
                onClick={togglePlay}
                />

                ):(
                <AiFillPlayCircle className='icons'
                  color='#7C99AC'
                  size={50}
                  onClick= {togglePlay}
                />

                )
              }
              
              
              <BiSkipNextCircle className='icons'
                color='#7C99AC'
                size={50}
                onClick={nextSong}
                />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='player-container-main'>
        {
        songs.map((song, index)=>{
          return(
            <AudioFiles song={song} getSongData={getSongData} index={index} />
          )
        })
        }
      </div> */}
      
    </div>
  )
}