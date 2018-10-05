import { combineReducers } from 'redux';

import images from './images-reducer';
import imageShow from './show-image-reducer';

const rootReducer = combineReducers({
   images,
   imageShow
});

export default rootReducer;