import api from './api';
import elem from './element';

/**
 * 報告に使用するブラウザ情報を取得する
 */
function getBrowserData() {
  const nVer = navigator.appVersion;
  const currentBrowserData = {};
  let browserName = navigator.appName;

  browserName = nVer.match(/(firefox|msie|chrome|safari)[/\s]([\d.]+)/ig)[0];
  if (nVer.match(/(firefox|msie|chrome|safari)[/\s]([\d.]+)/ig)) {
    browserName = nVer.match(/(firefox|msie|chrome|safari)[/\s]([\d.]+)/ig)[0];
  } else {
    browserName = 'Unknown';
  }
  let OSName = 'Unknown OS';
  if (nVer.indexOf('Win') !== -1) OSName = 'Windows';
  if (nVer.indexOf('Mac') !== -1) OSName = 'MacOS';
  if (nVer.indexOf('X11') !== -1) OSName = 'UNIX';
  if (nVer.indexOf('Linux') !== -1) OSName = 'Linux';

  currentBrowserData.browserName = browserName;
  currentBrowserData.Os = OSName;
  currentBrowserData.navigatorInfo = navigator;
  currentBrowserData.locale = navigator.language;

  return currentBrowserData;
}

/**
 * 報告用オブジェクトを返す
 *
 * @return {object} 報告用オブジェクト
 */
function prepareBugReport() {
  const form = document.getElementById('reactboardForm');

  const report = {
    reported_at: Date.now(),
    title: form.comment.value,
    device: getBrowserData().browserName,
    os: getBrowserData().Os,
    current_view: location.href,
    locale: getBrowserData().locale,
    screen_size: `${window.innerWidth}x${window.innerHeight}`,
    density: window.devicePixelRatio,
    image: document.getElementById('capture').src,
    localStorage: JSON.stringify(localStorage),
  };

  return report;
}

const _prepareBugReportRequest = bugReportDetails => {
  return api.createReport({
    body: bugReportDetails,
    stringify: true,
  });
}

function submitBugReport() {
  const bugReport = prepareBugReport();

  elem.hide('#reactboardFormContainer');
  elem.show('#reactboardLoading');

  _prepareBugReportRequest(bugReport)
    .finally(() => {
      elem.hide('#reactboardLoading');
      elem.show('#reactboardThankYouPage');
    });
}

export default {
  getBrowserData,
  submitBugReport
};