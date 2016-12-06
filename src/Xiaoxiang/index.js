import React, { PropTypes } from 'react';
import Comment from '../component/Comment';
import Divs from './Divs';
import {data} from '../data';
import Smfooter from '../component/Smfooter';

class Xiaoxiang extends React.Component {
  constructor(){
    super();
    this.state={
      shows:true
    }
  }
  handleclick(){
    this.setState({shows:false})
  }
  render () {
    /*let two=function(){
        var newarray= [];
      for(var i=0;i<2;i++){
        newarray.push(data[i]);
      }
      return newarray.map((item,i) => <Comment {...item} key={i} />)
    }*/
    let showData = this.state.shows ? data.slice(0,2) : data
    return (
      <div className="xq-wrap">
        <Divs />
       <div className="row">
       {/*
         this.state.shows ? <div>{two()} <div className="last-comment"
         onClick={this.handleclick.bind(this)}>展开全部{data.length}条评论</div></div>
          :
         data.map((item,i) => <Comment {...item} key={i} />)
       */}
       {showData.map( (item,i)  => <Comment {...item} key={i} />)}
       {this.state.shows?<div className="last-comment" onClick={this.handleclick.bind(this)}>
         展开全部{data.length}条评论
         <span className="glyphicon glyphicon-menu-down"></span>
       </div>:null}
     </div>
     <Smfooter />
    </div>
    )
  }
}

export default Xiaoxiang;
