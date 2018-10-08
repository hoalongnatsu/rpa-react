import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActiveImage } from '../action/images-action';
import { setImageShow } from '../action/image-show-action';

export class ImageList extends Component {

   getImageShow = (id) => {
      let image = this.props.images.find((image) => image.id === id);
      this.props.setActiveImage(id);
      this.props.setImageShow(image);
   }

   generateImage = () => {
      return this.props.images.map((img) => (
         <div className="col-md-2" id="image-container"  key={img.id}>
            <img 
               src={img.src}
               alt={img.name}
               onClick={() => this.getImageShow(img.id)}
               className={img.active ? "img-fluid active" : "img-fluid"}
            />
         </div>
      ));
   }

   render() {
      return (
         <div className="row" id="images-container">
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

export default connect(mapStateToProps, { setImageShow, setActiveImage })(ImageList);
