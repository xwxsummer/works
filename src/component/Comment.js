import React, { PropTypes } from 'react';


class Comment extends React.Component {

  render () {
    return (
      <div className="comment-wrap">

              <div className="bgc" key={Math.random()}>
                <div className="colss"  >
                  <img src={this.props.image} className='imgs' alt="pig123" />
                </div>
                  <div className="cols">
                    <h6>{this.props.names}</h6>
                    <p>{this.props.time}</p>
                    <p>{this.props.content}</p>
                  </div>
              </div>

    </div>
    )
  }
}
export default Comment;
