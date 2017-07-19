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
import Signup from './components/Auth/Signup';
import RequireAuth from './components/Auth/require_auth';
import ListItems from './components/list/ListItems';

var createStoreWithMiddleware= applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="signin" component={Signin}/>
				<Route path="newItem" component={RequireAuth(NewPost)}/>
				<Route path="bands" component={BandList}/>
				<Route path="signout" component={Signout}/>
				<Route path="signup" component={Signup}/>
				<Route path="items" component={RequireAuth(ListItems)}/>
			</Route>
		</Router>
	</Provider>
	, document.querySelector('.container'));
