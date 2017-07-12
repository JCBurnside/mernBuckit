import React,{Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';

const API_KEY='AIzaSyB04VMctMekD-M8Qf7TUaG7naNa4zohqrQ';

class Video extends Component{
	constructor(props){
		super(props);
		this.state={
			videos:[],
			selectedVideo:null
		};
		this.videoSearch('bucketlist');
	}
	videoSearch(term){
		YTSearch({key:API_KEY,term:term},videos=>{
			this.setState({
				videos:videos,
				selectedVideo:videos[0]
			});
		});
	}
	render(){
		const videoSearch=_.debounce(term=>this.videoSearch(term),300)
		return(
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
			</div>
		);
	}
}
export default Video;