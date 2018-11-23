import { combineReducers } from 'redux';

const songsReducer=()=>{
    return [
        { title:'iu1', artist: 'iu', duration: '5:10'},
        { title:'iu2', artist: 'iu', duration: '4:00'},
        { title:'iu3', artist: 'iu', duration: '4:10'},
    ]
};

const selectedSongReducer=(selectedSong=null, action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    } else{
        return selectedSong;
    }
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})