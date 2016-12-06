import React from 'react';
import {Link} from 'react-router';

class Smfooter extends React.Component {
  render () {
    return(
   <div className="sm-footer">
   <Link to='/cons' activeStyle={{color: '#E91E63'}} onlyActiveOnIndex={true} >
      <span className='glyphicon glyphicon-heart-empty'></span>关注</Link>
      <Link to='/goto' activeStyle={{color: '#E91E63'}}>
      <span className='glyphicon glyphicon-map-marker'></span>到这</Link>
      <Link to='/share' activeStyle={{color: '#E91E63'}}>
      <span className='glyphicon glyphicon-share'></span>分享</Link>
      <Link to='/write' activeStyle={{color: '#E91E63'}}>
      <span className='glyphicon glyphicon-list-alt'></span>评论</Link>
      </div>
    )
  }
}

export default Smfooter;
