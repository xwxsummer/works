import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import MySwiper from '../component/MySwiper'
import Showing from '../component/Showing'
import WillShow from '../component/WillShow'


class Show extends React.Component {
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  handleClick(state){
    this.setState({
      show:state
    })
  }
  render () {
    let styles={
      toggle:{
        width:'100%',
        display:'flex',
        backgroundColor:'#ccc',
      },
      btnL:{
        backgroundColor:'red',
        color:'#fff',
        borderRadius:'0 20px 20px 0',
        padding:'0 20px'
      },
      btnR:{
        backgroundColor:'red',
        color:'#fff',
        borderRadius:'20px 0 0 20px',
        padding:'0 20px'
      }
    }
    return(
      <div className="show-wrap">
        <MySwiper />
        <div className="toggle-btn" style={styles.toggle}>
          <div className="left-btn" onClick={this.handleClick.bind(this,true)} style={this.state.show? styles.btnL : null}>正在展出</div>
          <div className="right-btn" onClick={this.handleClick.bind(this,false)} style={this.state.show? null : styles.btnR}>即将展出</div>
        </div>
        {this.state.show ? <Showing /> : <WillShow />}
      </div>
    )
  }
}

export default Show;
