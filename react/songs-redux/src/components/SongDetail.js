import React from 'react';
import { connect } from 'react-redux';

const SongDetail=( {song} )=> {
    return (
        <div>
            {renderSongDetail(song) }
        </div>
    )
}

const renderSongDetail=(song)=>{
    if(!song) return <div>Select Song</div>
    else{
        return(
            <div>
                <h4>Title: { song.title }</h4>
                <h4>Artist: { song.artist }</h4>
                <h4>Duration: { song.duration }</h4>
            </div>
        )
    }
}

const mapStateProps=(state)=>{
    return { song: state.selectedSong};
}
  
export default connect( mapStateProps )( SongDetail );