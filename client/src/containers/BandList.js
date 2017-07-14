import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBand}from '../actions/index';
import {bindActionCreators}from 'redux';


class BandDetial extends Component{
	render(){
		return(
			<div>
				<h5>Detials for:</h5>
				<h6>{this.props.band.name}</h6>
				<img src={this.props.band.img}/>
			</div>
		);
	}
}

class BandList extends Component{
	constructor(){
		super();
		this.state={
			selectedBand:undefined
		}
	}
	renderList(){
		return this.props.bands.map(band=>(<li key={band.name} onClick={()=>{this.setState({selectedBand:band});this.props.selectBand(band)}} className="list-group-item">{band.name}</li>))
	}
	render(){
		return (
			<div>
				<ul className="list-group col-sm-4">
					{this.renderList()}
				</ul>
				<BandDetial band={this.state.selectedBand||this.props.bands[0]}/>
			</div>
		);
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBand:selectBand},dispatch);
}
function mapStateToProps(state) {
	return{
		bands:state.bands
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(BandList);