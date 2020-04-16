/**
 * isMobile - checks if the current window is displayed on mobile or not, based on viewport size
 *
 * @return {bool}  returns true if viewport is less than 767px or flase if larger than or equal
 */
function isMobile() {
  let returnVal = false;
  if (window.matchMedia) {
    returnVal = window.matchMedia('(max-width: 767px)').matches;
  } else {
    console.error('Your browser don\'t support matchMedia method');
  }
  return returnVal;
}

export default {
  isMobile
};
