import './views/styles.css';
import bugReport from './bugReport';
import utils from './utils';
import elem from './element';

const submitFormView = require('./views/submitForm.html');

function addSubmitForm() {
  const node = document.createElement('div');

  node.setAttribute('class', 'rbdsdk-element reactboard-window reactboard-form');
  node.setAttribute('id', 'reactboardFormContainer');
  node.setAttribute('style', 'display:none;');

  node.innerHTML = submitFormView;
  document.body.appendChild(node);
}

/**
 * ページに SDK のボタンを挿入する
 *
 */
function addReportButton() {
  const node = document.createElement('div');
  node.setAttribute('id', 'reactboardSDK');
  node.innerHTML = '<a id="initReactBoardLink" onclick="rbdSdk.invoke()"></a>';
  document.body.appendChild(node);
}

/**
 * initBugreportViews - バグ報告に必要な要素を全て追加する
 */
function initBugreportViews() {
  const browserName = bugReport.getBrowserData().browserName;
  const reactboardFormContainer = document.getElementById('reactboardFormContainer');

  if (reactboardFormContainer) return;

  addSubmitForm();
  // addDownloadExtensionWindow();
  // addLoadingWindow();
  // addThankYouPage();
  if (!utils.isMobile()) {
    if (elem.isExisted('#reactboardFormContainer')) {
      elem.show('#reactboardFormContainer');
    }
  }
}

export default {
  addReportButton,
  initBugreportViews
};