import React, { PropTypes } from 'react';
import { Link } from 'react-router'

import img1 from '../images/jiang-01_01.png'
import img2 from '../images/jiang-02_03.png'
import img3 from '../images/jiang-03_05.png'
import img4 from '../images/jiang-04_07.png'
import img5 from '../images/jiang-05_09.png'
import img6 from '../images/jiang-06_11.png'

class WillShow extends React.Component {
  render () {
    let styles={
      img:{
        height:'30vh',
        width:'100%',
      }
    }
    return(
      <div>
        <img src={img1} style={styles.img}/>
        <img src={img2} style={styles.img}/>
        <img src={img3} style={styles.img}/>
        <img src={img4} style={styles.img}/>
        <img src={img5} style={styles.img}/>
        <img src={img6} style={styles.img}/>
      </div>
    )
  }
}

export default WillShow;
