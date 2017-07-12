import React,{Component} from 'react';
import {connect} from 'react-redux';

class Tasks extends Component{
	renderList(){
		return this.props.tasks.map((task,i)=>(
			<tr key={i}>
				<td>{task.item}</td>
				<td>{task.category}</td>
				<td>{task.finishBy}</td>
			</tr>
			));
	}
	render(){
		return(
			<table className="table table-striped">
				<tbody>
					<tr>
						<th>Item</th>
						<th>Category</th>
						<th>Finish By</th>
					</tr>
					{this.renderList()}
				</tbody>
			</table>
		);
	}
}
function mapStateToProps(state){
	return{
		tasks:state.tasks
	}
}
export default connect(mapStateToProps)(Tasks);