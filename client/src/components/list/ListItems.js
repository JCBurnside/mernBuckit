import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {Link} from 'react-router';
import axios from 'axios';
const PostItem=function(post){
	return (
		<li className="list-group-item" key={post._id}>
			<Link to={"items/"+post._id}>
				<span className="pull-xs-left">{post.topic}</span>
				<span className="pull-xs-right">{post.title}</span>
			</Link>
		</li>
	);
}

class ListItems extends Component{
	componentWillMount(){
		this.props.fetchPosts();
	}
	renderItems(){
		return this.props.posts.map(PostItem);
	}
	render(){
		if(this.props.posts==0){
			return <div><h3>Still Loading...</h3></div>
		}
		return(
			<div className="col-md-4">
				<div className="row">
					<div className="col-sm-6 text-xs-left">
						<h3 className="text-xs-left">Lists</h3>
					</div>
					<div className="col-sm-6 text-xs-right">
						<Link to="/newitem" className="btn btn-primary">Add a list item</Link>
					</div>
				</div>
				<div id="space"></div>
				<ul className="list-group">
					{this.renderItems()}
				</ul>
			</div>
		);
	}
}
function mapStateToProps(state){
	return {posts:state.posts.all};
}
export default connect(mapStateToProps,actions)(ListItems);