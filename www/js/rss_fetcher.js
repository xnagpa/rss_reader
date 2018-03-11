export function fetchLentaRSS(rssAddress){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', rssAddress);
  xhr.onload = function() {
    if (xhr.status === 200) {
      return xhr.responseText;
    }
    else {
      return null;
    }
  };
  xhr.send();
};