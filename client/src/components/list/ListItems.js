import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts,ROOT_URL,config} from '../../actions/index';
import {Link} from 'react-router';
import axios from 'axios';
const PostItem=function(post){
	return (
		<li className="list-group-item" key={post._id}>
			<Link to={"lists/"+post._id}>
				<span className="pull-xs-left">{post.topic}</span>
				<span className="pull-xs-right">{post.title}</span>
			</Link>
		</li>
	);
}

class ListItems extends Component{
	constructor(props){
		super(props);
		this.state={
			posts:[]
		};
	}
	componentWillMount(){
		axios.get(`${ROOT_URL}/items`,config)
		.then(res=>{
			const posts=res.data;
			console.log("RESPONSE",res);
			this.setState({
				posts:[...posts]
			});
		});
	}
	renderItems(){
		return this.state.posts.map(PostItem);
	}
	render(){
		if(this.state.posts==0){
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
export default connect(mapStateToProps,{fetchPosts:fetchPosts})(ListItems);