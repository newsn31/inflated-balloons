function createIframe() {
  var iframeContainer = document.createElement("IFRAME");
  iframeContainer.setAttribute('src', 'https://squareup.com/store/superinflated-3');
  iframeContainer.setAttribute('style', 'position:absolute; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:2;')
  var bodyContainer = document.getElementsByTagName("BODY")[0];
  bodyContainer.appendChild(iframeContainer);
}

createIframe();
