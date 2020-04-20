import './views/styles.css';
import utils from './utils';
import elem from './element';
import html2canvas from 'html2canvas';

const loadingWindowView = require('./views/loading-window.html');
const ThankyouView = require('./views/thank-you.html');
const submitFormView = require('./views/submitForm.html');
let flgDraw = false;
let gX = 0;
let gY = 0;

// 描画色
let gColor = 'red';

const draw = (canvas, imagePath) => {
  const image = new Image();
  image.addEventListener('load', () => {
    canvas.width = 1000;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
  });
  image.src = imagePath;
}

const takeScreenShot = () => {
  html2canvas(document.querySelector('body')).then(html2canvas => {
    const imagePath = html2canvas.toDataURL();
    const canvas = document.getElementById('canvas');
    draw(canvas, imagePath);

    canvas.addEventListener('mousedown', startDraw, false);
    canvas.addEventListener('mousemove', Draw, false);
    canvas.addEventListener('mouseup', endDraw, false);
  });
}

const startDraw = e => {
  flgDraw = true;
  gX = e.offsetX;
  gY = e.offsetY;
}

// 描画
const Draw = e => {
  if (flgDraw == true) {

    // '2dコンテキスト'を取得
    var canvas = document.getElementById('canvas');
    var con = canvas.getContext('2d');

    var x = e.offsetX;
    var y = e.offsetY;

    // 線のスタイルを設定
    con.lineWidth = 3;
    // 色設定
    con.strokeStyle = gColor;

    // 描画開始
    con.beginPath();
    con.moveTo(gX, gY);
    con.lineTo(x, y);
    con.closePath();
    con.stroke();

    // 次の描画開始点
    gX = x;
    gY = y;

  }
}

// 描画終了
const endDraw = () => {
  flgDraw = false;
}

const addSubmitForm = () => {
  const node = document.createElement('div');

  node.setAttribute('class', 'rbdsdk-element reactboard-window reactboard-form');
  node.setAttribute('id', 'reactboardFormContainer');
  node.setAttribute('style', 'display:none;');

  node.innerHTML = submitFormView;
  document.body.appendChild(node);

  takeScreenShot();
}

/**
 * 投稿完了ページを削除する
 *
 */
const resetAndClose = () => {
  while (document.getElementsByClassName('rbdsdk-element').length) {
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
      elem.show('#reactboardFormContainer');
    }
  }
}

export default {
  addReportButton,
  initBugreportViews,
  resetAndClose
};