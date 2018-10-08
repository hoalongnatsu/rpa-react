import React, { Component } from 'react';
import { connect } from 'react-redux';
import icons from '../image/icons.svg';

export class ImageShow extends Component {

   createCanvas = (image) => {
      new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(false)
         }, 2000);
      }).then((res) => {
         image.loader = res;
         this.forceUpdate();
      });
   }

   render() {
      let { image } = this.props;

      this.createCanvas(image);

      return (
         <div className="row">
            <div className="col-md-6" id="image">
            {
               image.loader ?
                  <div className="loader">
                     <svg>
                        <use href={`${icons}#icon-cw`}></use>
                     </svg>
                  </div>
               :
                  <img
                     src={image.src}
                     alt={image.name}
                     className="img-fluid"
                  />
            }
            </div>
            <div className="col-md-6" id="image-info">
               
            </div>
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
