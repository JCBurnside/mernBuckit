import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import App from './components/app';
import reducers from './reducers';
import Signin from './components/Auth/Signin';
import NewPost from './components/list/NewPost';
import BandList from './containers/BandList';
import Signout from './components/Auth/Signout';

var createStoreWithMiddleware= applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="signin" component={Signin}/>
				<Route path="newItem" component={NewPost}/>
				<Route path="bands" component={BandList}/>
				<Route path="signout" component={Signout}/>
			</Route>
		</Router>
	</Provider>
	, document.querySelector('.container'));
