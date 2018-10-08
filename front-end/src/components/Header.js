import React, { Component } from 'react';

export class Header extends Component {
   render() {
      return (
         <div className="text-center" id="header">
            <h3 className="text-uppercase">Product detection</h3>
            <p className="mb-4">Detect one or more human faces in an image and get back face rectangles for where in the image the faces are, along with face attributes which contain machine learning-based predictions of facial features. The face attribute features available are: Age, Emotion, Gender, Pose, Smile, and Facial Hair along with 27 landmarks for each face in the image.</p>
            <hr/>
         </div>
      )
   }
}

export default Header;
