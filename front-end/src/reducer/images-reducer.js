import { RECEIVE_IMAGE, SET_ACTIVE_IMAGE } from '../action/images-action';

function addActivePropsToImagesObject (imageNotActiveProps) {
   let images = imageNotActiveProps.map((image) => {
      image.active = false;
      return image;
   });
   
   return images;
}

function setActiveImages (state, id) {
   let images = state.map((image) => {
      if (image.id === id) {
         image.active = true;
      } else {
         image.active = false;
      }
      
      return image;
   });

   return images;
}

function images(state = [], action) {
   switch (action.type) {
      case RECEIVE_IMAGE:
         return addActivePropsToImagesObject(action.images);
      case SET_ACTIVE_IMAGE:
         return setActiveImages(state, action.id);
      default:
         return state;
   }
}

export default images;