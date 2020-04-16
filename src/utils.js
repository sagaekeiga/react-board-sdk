/**
 * モバイルかどうかを返す
 *
 * @return {bool}  ビューポートが767px未満の場合はtrueを返し、それ以上の場合はfalseを返す
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
