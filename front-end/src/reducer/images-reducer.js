import { RECEIVE_IMAGE } from '../action/images-action';

function images(state = [], action) {
   switch (action.type) {
      case RECEIVE_IMAGE:
         return [...action.images];
      default:
         return state;
   }
}

export default images;