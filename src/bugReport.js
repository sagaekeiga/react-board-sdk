import xhr from './xhr';
import elem from './element';

/**
 * 報告に使用するブラウザ情報を取得する
 */
function getBrowserData() {
  const nVer = navigator.appVersion;
  const currentBrowserData = {};
  let browserName = navigator.appName;

  // browserName = nVer.match(/(firefox|msie|chrome|safari)[/\s]([\d.]+)/ig)[0];
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
 * prepareBugReport - prepare and return the bug report object
 *
 * @return {object} complete bug report object
 */
function prepareBugReport() {
  const form = document.getElementById('reactboardForm');

  let report = {};
  report = {
    reported_at: Date.now(),
    email: form.email.value,
    title: form.comment.value,
    device: getBrowserData().browserName,
    os: getBrowserData().Os,
    current_view: location.href,
    // duration: utils.shortifyTime(Date.now() - reportStartingTime),
    locale: getBrowserData().locale,
    screen_size: `${window.innerWidth}x${window.innerHeight}`,
    density: window.devicePixelRatio,
    localStorage: JSON.stringify(localStorage),
    // console_log: JSON.stringify(logs.getConsoleLog()),
  };

  // if (getMemoryUsed()) {
  //   report.memory = getMemoryUsed();
  // }

  return report;
}

const _prepareBugReportRequest = (bugReportDetails) => {
  console.log(bugReportDetails)
  return xhr.executeXHR({
    body: bugReportDetails,
    stringify: true,
  });
}

function submitBugReport() {
  const bugReport = prepareBugReport();
  // const uploadScreenshotRequest = _uploadBugScreenshot();

  // elem.hide('#reactboardFormContainer');
  // elem.show('#reactboardLoading');

  _prepareBugReportRequest(bugReport)
    .finally(() => {
      console.log(1111)
      // elem.hide('#reactboardLoading');
      // elem.show('#reactboardThankYouPage');
    });

  // if no screenshot attached with the report, submit it direct, but if you found a screenshot
  // upload it first, include its url the submit the report
  // if (!uploadScreenshotRequest) {
  //   _prepareBugReportRequest(bugReport)
  //     .finally(() => {
  //       elem.hide('#instabugLoading');
  //       elem.show('#instabugThankYouPage');
  //     });
  // } else {
  //   uploadScreenshotRequest.then((response) => {
  //     if (response.status === 'OK' && response.data && response.data.secure_url) {
  //       bugReport.screenshot = response.data.secure_url;
  //     }
  //   }).finally(() => {
  //     _prepareBugReportRequest(bugReport)
  //       .finally(() => {
  //         elem.hide('#instabugLoading');
  //         elem.show('#instabugThankYouPage');
  //       });
  //   });
  // }
}

export default {
  getBrowserData,
  submitBugReport
};