import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER,UNAUTH_USER,AUTH_ERROR,CREATE_USER} from './types';
export const SELECT_BAND='SELECT_BAND';
export function selectBand(band){
	console.log("You have selected "+band.name)
	return function(dispatch){
		dispatch({type:SELECT_BAND,payload:band})
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
export function authError(err){
	return {
		type:AUTH_ERROR,
		payload:err
	}
}
export function signinUser({email,password}){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`,{email,password}).then(
			res=>{
				if(res.data.token){
					dispatch({type:AUTH_USER})
					localStorage.setItem('token',res.data.token);
					browserHistory.push('/newItem');
				}else{
					dispatch(authError("SERVER ERROR"));
				}
			}).catch(res=>dispatch(authError("Bad Login Info")));
	}
}
export function signoutUser(){
	localStorage.removeItem('token');
	return {type:UNAUTH_USER};
}
export function createUser({email,password}){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signup`,{email,password}).then(
			res=>{
				if(res.data.token){
					dispatch({type:AUTH_USER})
					localStorage.setItem('token',res.data.token);
					browserHistory.push('/newItem');
				}else{
					dispatch(authError("SERVER ERROR"));
				}
			}
		).catch(err=>dispatch(authError(err)));
	}
}