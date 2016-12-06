import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import img1 from '../images/zhan-01_01.png'
import img2 from '../images/zhan-02_03.png'
import img3 from '../images/zhan-03_05.png'
import img4 from '../images/zhan-04_07.png'
import img5 from '../images/zhan-05_09.png'

class Showing extends React.Component {
  render () {
    let styles={
      img:{
        height:'30vh',
        width:'100%',
      }
    }
    return(
      <div>
        <Link to='/xiaoxiang'><img src={img1} style={styles.img}/></Link>
        <img src={img2} style={styles.img}/>
        <img src={img3} style={styles.img}/>
        <img src={img4} style={styles.img}/>
        <img src={img5} style={styles.img}/>
      </div>
    )
  }
}

export default Showing;
