import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component{
	validatePass(){
		const {fields:{password,confirm}}=this.props;
		if(password.value===confirm.value){
			return true;
		}
		return false;
	}
	validateEmail(){
		const {fields:{email}}=this.props;
		return !!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)&&email.value!=="";
	}
	handleFormSubmit({email,password}){
		if(this.validateEmail()&&this.validatePass()){
			this.props.createUser({email,password});
		}
	}
	renderAlert(){
		var msg;
		if(this.props.errMessage||!this.validatePass()||!this.validateEmail()){
			msg=this.props.errMessage||!this.validateEmail()?"Not a vailid email":"Passwords do not match";
			return (
				<div className="alert alert-danger col-sm-4">
					<strong>SOMETHING IS WRONG</strong>{" "+msg}
				</div>
			);
		}
	}
	render(){
		const {handleSubmit,fields:{email,password,confirm}}=this.props;
		return(
			<div className="container">
				<h3>Welcome!</h3>
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<fieldset className="form-group">
						<label>Email:</label>
						<input {...email} 
							className="form-control"/>
					</fieldset>
					<fieldset className="form-group">
						<label>Password:</label>
						<input {...password} type="password" className="form-control"/>
					</fieldset>
					<fieldset className="form-group">
						<label>Confirm Password:</label>
						<input {...confirm} type="password" className="form-control"/>
					</fieldset>
					{this.renderAlert()}
					<button action="submit" className="btn btn-primary">Sign Up!</button>
				</form>
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		errMessage:state.auth.error
	};
}
export default reduxForm({
	form:'signup',
	fields:['email','password','confirm'],
},mapStateToProps,actions)(Signup);