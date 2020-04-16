/**
 * hide - hide the queriable elemt passed to the function
 *
 * @param  {string} query html element query selector
 */
function hide(query) {
  document.querySelector(query).setAttribute('style', 'display:none');
}

/**
 * show - shows the queriable elemt passed to the function
 *
 * @param  {string} query html element query selector
 */
function show(query) {
  document.querySelector(query).setAttribute('style', 'display:inline-block');
}

/**
 * isExisted - checks if the query selector passed is existed in the current DOM
 *
 * @param  {string} query html element query selector
 */
function isExisted(query) {
  return (document.querySelector(query) !== null);
}

export default {
  hide,
  show,
  isExisted
};
