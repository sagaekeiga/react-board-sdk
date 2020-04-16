/**
 * 渡されたクエリセレクタをもつDOMを非表示にする
 *
 * @param  {string} query クエリセレクタ
 */
const hide = query => {
  document.querySelector(query).setAttribute('style', 'display:none');
}

/**
 * 渡されたクエリセレクタをもつDOMを表示する
 *
 * @param  {string} query クエリセレクタ
 */
const show = query => {
  document.querySelector(query).setAttribute('style', 'display:inline-block');
}

/**
 * 渡されたクエリセレクタが存在するかどうかを返す
 *
 * @param  {string} query クエリセレクタ
 */
const isExisted = query => {
  return (document.querySelector(query) !== null);
}

/**
 * 渡されたクラスをクエリセレクタから削除する
 *
 * @param  {string} query     クエリセレクタ
 * @param  {string} className 空白によってわけられたクラス
 */
const removeClass = (query, className) => {
  document.querySelector(query).classList.remove(className);
}

export default {
  hide,
  show,
  isExisted,
  removeClass
};
