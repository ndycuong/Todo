import React    from 'react';

export default function AudioFiles({song, getSongData, index}) {
    return(
        <div className='player-container' onClick={()=>getSongData(song, index)}>
            <h3 className='song-name'>{song.name}</h3>
            {/* <audio controls src={song.music}></audio> */}
        </div>
    )
}