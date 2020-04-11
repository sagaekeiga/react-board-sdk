export default class Views {
  addSubmitForm = () => {
    const node = window.document.createElement('div');

    node.setAttribute('class', 'ibgsdk-element instabug-window instabug-form');
    node.setAttribute('id', 'instabugFormContainer');
    node.setAttribute('style', 'display:none;');

    node.innerHTML = submitFormView;
    window.document.body.appendChild(node)
  }
}