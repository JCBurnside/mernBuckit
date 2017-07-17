import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBand}from '../actions/index';
import {bindActionCreators}from 'redux';


class BandDetial extends Component{
	render(){
		var band;
		if(!this.props.band)band=this.props.default;
		else band=this.props.band
		return(
			<div>
				<h5>Detials for:</h5>
				<h6>{band.name}</h6>
				<img src={band.img}/>
			</div>
		);
	}
}

class BandList extends Component{
	constructor(){
		super();
		this.state={
			selectedBand:null
		}
	}
	renderList(){
		return this.props.bands.map(band=>(<li key={band.name} onClick={()=>{this.props.selectBand(band)}} className="list-group-item">{band.name}</li>))
	}
	render(){
		return (
			<div>
				<ul className="list-group col-sm-4">
					{this.renderList()}
				</ul>
				<BandDetial band={this.state.selectedBand} default={this.props.bands[0]}/>
			</div>
		);
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBand:selectBand},dispatch);
}
function mapStateToProps(state) {
	return{
		bands:state.bands,
		selectedBand:state.selectedBand
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(BandList);