import {combineReducers} from 'redux' //FROM REDUX!!!!!!!!!
import tracks from './tracks'
import playlist from './playlist'
import filterTracks from './filterTracks'

export default combineReducers({
    tracks,
    playlist,
    filterTracks

})
