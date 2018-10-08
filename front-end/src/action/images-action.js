export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const SET_ACTIVE_IMAGE = 'SET_ACTIVE_IMAGE';

export function receiveImage(images) {
   return {
      type: RECEIVE_IMAGE,
      images
   }
}

export function setActiveImage(id) {
   return {
      type: SET_ACTIVE_IMAGE,
      id
   }
}