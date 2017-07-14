import React,{Component} from 'react';
import NavBarHeader from './Nav';
import Video from './video/Video';
import BandList from '../containers/BandList';
import Tasks from '../containers/Tasks';
import Signin from './Auth/Signin';
export default class App extends Component{
	render(){
		return(
			<div>
				<NavBarHeader/>
				{/*<BandList />
				<Tasks/>*/}
				<Video/>
				{this.props.children}
			</div>
		);
	}
}