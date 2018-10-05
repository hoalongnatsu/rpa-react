export const IMAGE_NEED_SHOW = 'IMAGE_NEED_SHOW';

export function setImageShow(image) {
   return {
      type: IMAGE_NEED_SHOW,
      image
   }
}