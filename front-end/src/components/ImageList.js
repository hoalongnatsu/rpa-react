import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setImageShow } from '../action/image-show-action';

export class ImageList extends Component {

   generateImage = () => {
      return this.props.images.map((img) => (
         <div className="col-md-2"  key={img.id}>
            <img 
               src={img.src}
               alt={img.name}
               className="img-fluid"
            />
         </div>
      ));
   }

   render() {
      console.log(this.props);
      return (
         <div className="images-container row my-4">
            {this.generateImage()}
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      images: state.images
   }
}

export default connect(mapStateToProps, { setImageShow })(ImageList);
