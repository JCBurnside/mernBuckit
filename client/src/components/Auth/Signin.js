import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions'
class Signin extends Component{
	handleFormSubmit({email,password}){
		this.props.signinUser({email,password});
	}
	renderAlert(){
		if(this.props.errMessage){
			return(
				<div className="alert alert-danger form-control">
					<strong>Sorry partner</strong>{this.props.errMessage}
				</div>
			);
		}
	}
	render(){
		const {handleSubmit,fields:{email,password},reset}=this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<input {...email} className="form-control"/>
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} type="password" className="form-control"/>
				</fieldset>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Sign in</button>
				<button onCick={reset}>Clear</button>
			</form>
		);
	}
}
function mapStateToProps(state) {
	return {errMessage:state.auth.error};
}
export default reduxForm({
	form:'signin',
	fields:['email','password']
},mapStateToProps,actions)(Signin);