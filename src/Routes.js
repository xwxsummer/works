import React from 'react';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import Home from './Home';
import App from './App';
import Xiaoxiang from './Xiaoxiang';
/*
import Show from './Show';
import Recommend from './Recommend';
import Release from './Release';
import Personal from './Personal';
import Sanbu from './Sanbu';

*/

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>

      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        {/*  <Route path='show' component={Show} />
        <Route path='recommend' component={Recommend} />
        <Route path='release' component={Release} />
        <Route path='personal' component={Personal} />
        <Route path='sanbu/:title' component={Sanbu} />*/}
        <Route path='xiaoxiang' component={Xiaoxiang} />


</Route>
      </Router>


    )
  }
}

export default Routers;
