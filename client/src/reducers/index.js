import {combineReducers} from 'redux';
import BandsReducer from './reducerBands'
import Tasks from './Tasks'
const rootReducer=combineReducers({
	bands:BandsReducer,
	tasks:Tasks
})
export default rootReducer;