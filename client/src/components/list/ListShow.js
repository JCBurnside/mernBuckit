import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link,browserHistory} from 'react-router';
import {fetchPost,deletePost,ROOT_URL,config} from '../../actions/index';
import axios from 'axios';

class ListShow extends Component{
	componentWillMount(){
		this.props.fetchPost(this.props.params.id)
	}
	onDeleteClick(){
		this.props.deletePost(this.props.params.id);	
	}
	render(){
		const post=this.props.post;
		if(!post)
			return (
				<div>
					Create a New post
					<Link to="/newitem" className="btn btn-primary">New Item</Link>
				</div>
			);
		return(
			<div>
				<h3>{post.title}</h3>
				<div id="space"></div>
				<h6>Topic: {post.topic}</h6>
				<div id="space"></div>
				<p>{post.content}</p>
				<Link to="/items" className="btn btn-primary">Back to post list</Link>
				<Link to={`/updateitem/${this.props.params.id}`} className="btn btn-info">Update List</Link>
				<button className="btn btn-danger"
					onClick={this.onDeleteClick.bind(this)}>
					Delete Post
				</button>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {post:state.posts.post};
}
export default connect(mapStateToProps,{fetchPost,deletePost})(ListShow);