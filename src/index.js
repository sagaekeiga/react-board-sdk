import views from './views';
import element from './element';
import bugReport from './bugReport';

const domReady = (callback) => {
  if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

/**
 * initSDK - 初期化処理
 */
const initSDK = options => {
  if (options.projectToken) {
    bugReport.setProjectToken(options.projectToken);
  } else {
    console.error('Reactboard WebSDK: Project token is not found');
  }

  domReady(() => {
    views.addReportButton();
    element.hide('#reactboardSDK');
  });

  domReady(() => {
    element.show('#reactboardSDK');
  });
}

/**
 * RbdSdk - rbd SDK オブジェクト
 */
const RbdSdk = () => {
  return {
    init: initSDK,
    invoke: views.initBugreportViews,
    submitReport: bugReport.submitBugReport,
    resetAndClose: views.resetAndClose,
  };
}

window.ReactboardSDK = RbdSdk;
const sdk = new RbdSdk();
window.rbdSdk = sdk;


export default {
  reactboardSDK: RbdSdk
};