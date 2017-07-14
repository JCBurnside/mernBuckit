import axios from 'axios';
import {browserHistory} from 'react-router'
export const SELECT_BAND='SELECT_BAND';
export function selectBand(band){
	console.log("You have selected "+band.name)
	return{
		type:SELECT_BAND,
		payload:band
	}
}
export const CREATE_POSTS='CREATE_POSTS';
// const ROOT_URL='http://rest.learncode.academy/api/burnside';
const ROOT_URL='http://localhost:3000'
export function createPost(props){
	const request = axios.post(`${ROOT_URL}/posts`,props);
	return {
		type:CREATE_POSTS,
		payload:request
	}
}
export function signinUser({email,password}){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`,{email,password}).then(
			res=>{
				browserHistory.push('/newItem');
			}).catch(console.log)
	}
}