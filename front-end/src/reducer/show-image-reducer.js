import { IMAGE_NEED_SHOW } from '../action/image-show-action';

function imageShow(state = {}, action) {
   switch (action.type) {
      case IMAGE_NEED_SHOW:
         return Object.assign({loader: true}, action.image);
      default:
         return state;
   }
}

export default imageShow;