export default function(state=null,action){
	switch(action.type){
	case 'SELECT_BAND':
		return action.payload;
	}
	return state;
}