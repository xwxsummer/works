import React from 'react';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import Show from './Show';
import Recommend from './Recommend';
import Release from './Release';
import Personal from './Personal';
import Sanbu from './Sanbu';
import Xiaoxiang from './Xiaoxiang';


class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <IndexRoute component={Home} />
        <Route path='/' component={App}>
        <Route path='show' component={Show} />
        <Route path='recommend' component={Recommend} />
        <Route path='release' component={Release} />
        <Route path='personal' component={Personal} />
        <Route path='sanbu/:title' component={Sanbu} />
        <Route path='xiaoxiang/:titles' component={Xiaoxiang} />
        </Route>

      </Router>


    )
  }
}

export default Routers;
