import './views/styles.css';
import utils from './utils';
import elem from './element';
import screenshot from './screenshot';

const loadingWindowView = require('./views/loading-window.html');
const ThankyouView = require('./views/thank-you.html');
const submitFormView = require('./views/submitForm.html');

const addSubmitForm = () => {
  const node = document.createElement('div');

  node.setAttribute('class', 'rbdsdk-element reactboard-window reactboard-form');
  node.setAttribute('id', 'reactboardFormContainer');
  node.setAttribute('style', 'display:none;');

  node.innerHTML = submitFormView;
  document.body.appendChild(node);

  screenshot.takeScreenShot();
}

/**
 * 投稿完了ページを削除する
 *
 */
const resetAndClose = () => {
  while (document.getElementsByClassName('rbdsdk-element').length) {
    const reactboardLink = document.getElementById('initReactBoardLink');
    reactboardLink.classList.remove('open');
    reactboardLink.setAttribute('onclick', 'rbdSdk.invoke()')
    document.body.removeChild(document.getElementsByClassName('rbdsdk-element')[0]);
    elem.removeClass('body', 'u-disable-scrolling');
  }
}

/**
 * ページに SDK のボタンを挿入する
 *
 */
const addReportButton = () => {
  const node = document.createElement('div');
  node.setAttribute('id', 'reactboardSDK');
  node.innerHTML = '<a id="initReactBoardLink" onclick="rbdSdk.invoke()"></a>';
  document.body.appendChild(node);
}

/**
 * 投稿完了画面をDOMに追加する
 */
const addLoadingWindow = () => {
  const node = document.createElement('div');
  node.setAttribute('class', 'rbdsdk-element reactboard-window');
  node.setAttribute('id', 'reactboardLoading');
  node.setAttribute('style', 'display:none;');
  node.innerHTML = loadingWindowView;
  document.body.appendChild(node);
}

/**
 * 投稿完了画面をDOMに追加する
 */
const addThankYouPage = () => {
  const node = document.createElement('div');
  node.setAttribute('class', 'rbdsdk-element reactboard-window');
  node.setAttribute('id', 'reactboardThankYouPage');
  node.setAttribute('style', 'display:none;');
  node.innerHTML = ThankyouView;
  document.body.appendChild(node);
}

/**
 * initBugreportViews - バグ報告に必要な要素を全て追加する
 */
function initBugreportViews() {
  const reactboardFormContainer = document.getElementById('reactboardFormContainer');

  if (reactboardFormContainer) return;

  addSubmitForm();
  addLoadingWindow();
  addThankYouPage();
  if (!utils.isMobile()) {
    if (elem.isExisted('#reactboardFormContainer')) {
      const reactboardLink = document.getElementById('initReactBoardLink');
      reactboardLink.setAttribute('class', 'open')
      reactboardLink.setAttribute('onclick', 'rbdSdk.resetAndClose()')
      elem.show('#reactboardFormContainer');
    }
  }
}

export default {
  addReportButton,
  initBugreportViews,
  resetAndClose
};