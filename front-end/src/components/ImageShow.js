import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ImageShow extends Component {

   createCanvas = (image) => {
      fetch(`http://localhost:3001/api/detect/${image.name}`)
         .then(res => res.json())
         .then(boxListInfo => {
            let parent = document.getElementById('image');
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');
            let img = new Image();
            
            img.addEventListener('load', () => {
               // Clear previous image
               context.clearRect(0, 0, canvas.width, canvas.height);

               // Set canvas width height equal to image width
               canvas.width = img.width;
               canvas.height = img.height;

               context.drawImage(img, 0, 0);
               
               boxListInfo.data.forEach(box => {
                  // Header
                  context.beginPath();
                  context.fillStyle = '#0291E6';
                  context.fillRect(box.xmin - 2, box.ymin - 22, box.xmax - box.xmin + 4, 22);
                  
                  // Text
                  context.beginPath();
                  context.font = '14px Poppins, sans-serif';
                  context.fillStyle = 'white';
                  context.fillText(box.name, box.xmin + 10, box.ymin - 4)
                  
                  // Box
                  context.beginPath();
                  context.lineWidth = 4;
                  context.strokeStyle = '#0291E6';
                  context.strokeRect(box.xmin, box.ymin, box.xmax - box.xmin, box.ymax - box.ymin);
               });
               
               // Resize reponsive
               canvas.style.width = `${parent.clientWidth - 30}px`;
               canvas.style.height = `${parent.clientHeight}px`;

               this.installTextInfo(image);
            });
         
            img.src = image.src;
         });
   }

   installTextInfo = (image) => {
      let imageInfo = document.getElementById('image-info').firstElementChild;
      
      let info = `
         ID: ${image.id}
         Name: ${image.name}
      `;

      imageInfo.innerHTML = info;
      image.loader = false;
      this.forceUpdate();
   }

   render() {
      let { image } = this.props;

      this.createCanvas(image);

      return (
         <div className="row">
            <div className={image.loader ? "col-md-6 loader" : "col-md-6"} id="image">
               <canvas id="canvas"></canvas>
            </div>
            <div className="col-md-6" id="image-info">
               <pre></pre>
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
