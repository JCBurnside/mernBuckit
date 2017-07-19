import axios from 'axios';
import {browserHistory} from 'react-router';
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	CREATE_USER,
	CREATE_POSTS,
	SELECT_BAND,
	FETCH_POSTS
} from './types';
export function selectBand(band){
	console.log("You have selected "+band.name)
	return function(dispatch){
		dispatch({type:SELECT_BAND,payload:band})
	}
}// const ROOT_URL='http://rest.learncode.academy/api/burnside';
export const ROOT_URL='http://localhost:3000';
export var config={
	headers:{authorization:localStorage.getItem('token')}
}
export function createPost(props){
	return function(dispatch){
		const request = axios.post(`${ROOT_URL}/newitem`,{props},config)
		.then(res=>{
			dispatch({
				type:CREATE_POSTS,
				payload:request
			});
			browserHistory.push('/items');
		})
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
export function fetchPosts(){
	return function(dispatch){
		axios.get(`${ROOT_URL}/items`,config)
		.then(res=>{
			console.log("RESPONSE:",res);
			dispatch({
				type:FETCH_POSTS,
				payload:res
			});
		})
		.catch(console.log);
	}
}