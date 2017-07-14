import {combineReducers} from 'redux';
import BandsReducer from './reducerBands';
import Tasks from './Tasks';
import {reducer as formReducer}from 'redux-form';
import SelectedBand from './reducer_selectedband';

const rootReducer=combineReducers({
	bands:BandsReducer,
	tasks:Tasks,
	form:formReducer,
	SelectedBand:SelectedBand
})
export default rootReducer;