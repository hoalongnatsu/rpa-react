import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ImageShow extends Component {
  render() {
   console.log(this.props);
    return (
      <div>
         {
            
         }
      </div>
    )
  }
}

function mapStateToProps(state) {
   return {
      image: state.imageShow
   }
}

export default connect(mapStateToProps, null)(ImageShow);
