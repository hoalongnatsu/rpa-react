export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

export function receive_image(images) {
   return {
      type: RECEIVE_IMAGE,
      images
   }
}