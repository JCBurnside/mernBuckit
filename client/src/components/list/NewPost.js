import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost}from '../../actions/index';
import {Link} from 'react-router';

class NewPost extends Component{
	handleFormSubmit(formProps){
		this.props.createPost(formProps)
	}
	constructor(props){
		super(props);
	}
	render(){
		const {handleSubmit,fields:{title,category,url,content}}=this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h2>Create a new post</h2>
				<fieldset className="form-group">
					<label>Title</label>
					<input {...title} className="form-control"/>
				</fieldset>
				<fieldset className="form-group">
					<label>Category</label>
					<input {...category} className="form-control"/>
				</fieldset>
				<fieldset className="form-group">
					<label>URL</label>
					<input {...url} className="form-control"/>
				</fieldset>
				<fieldset className="form-group">
					<label>Content</label>
					<textarea {...content} className="form-control text" rows="5"/>
				</fieldset>
				<button action="submit" className="btn btn-primary">Submit</button>
				<Link to='/' className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}
export default reduxForm({
	form:'newItem',
	fields:['title','category','url','content']
},null,{createPost})(NewPost);