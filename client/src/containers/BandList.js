import React,{Component} from 'react';
import {connect} from 'react-redux';

class BandList extends Component{
	renderList(){
		return this.props.bands.map(band=>(<li key={band.name} className="list-group-item">{band.name}</li>))
	}
	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}
function mapStateToProps(state) {
	return{
		bands:state.bands
	}
}
export default connect(mapStateToProps)(BandList);