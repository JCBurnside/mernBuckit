import {combineReducers} from 'redux';
import BandsReducer from './reducerBands';
import Tasks from './Tasks';
import {reducer as formReducer}from 'redux-form';
import SelectedBand from './reducer_selectedband';
import AuthReducer from './auth_reducer';

const rootReducer=combineReducers({
	bands:BandsReducer,
	tasks:Tasks,
	form:formReducer,
	auth:AuthReducer,
	SelectedBand:SelectedBand,

})
export default rootReducer;