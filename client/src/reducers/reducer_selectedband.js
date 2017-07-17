export default function(state={},action){
	switch(action.type){
	case 'SELECT_BAND':
		console.log("ACTION PERFORMED");
		return {...state,selectedBand:action.payload};
	}
	return state;
}