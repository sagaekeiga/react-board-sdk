require('./views/styles.css')

export default class ReactBoard {
  addSubmitForm = () => {
    const node = document.createElement('div');
    const submitFormView = require('./views/submitForm.html')

    node.setAttribute('class', 'ibgsdk-element instabug-window instabug-form');
    node.setAttribute('id', 'instabugFormContainer');
    node.setAttribute('style', 'display:none;');

    node.innerHTML = submitFormView;
    document.body.appendChild(node)
  }
  addReportButton = () => {
    const node = document.createElement('div');
    node.setAttribute('id', 'instabugSDK');
    node.innerHTML = '<a id="initInstaBugLink" onclick="ibgSdk.invoke()"></a>';
    document.body.appendChild(node);
  }
}