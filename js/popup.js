function getCurrentTabUrl(callback) {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

function getCurrentTabTitle(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var title = tab.title;
    console.assert(typeof title == 'string', 'tab.title should be a string');
    callback(title);
  });
}

function renderUrl(statusText) {
  document.getElementById('link').value = statusText;
}

function renderTitle(statusText) {
  document.getElementById('title').value = statusText;
}

function n(n){
    return n > 9 ? "" + n: "0" + n;
}

function renderDate() {
	var d = new Date();
	var anno = d.getFullYear();
	var mese = n(d.getMonth()+1);
	var giorno = n(d.getDate());
  document.getElementById('date').value = anno.toString() + mese.toString()  + giorno.toString();
}

function renderTime(statusText) {
	var d = new Date();
	var ora = n(d.getHours());
	var min = n(d.getMinutes());
	var sec = n(d.getSeconds());

  document.getElementById('time').value = ora.toString() + min.toString() + sec.toString();
}

document.addEventListener('DOMContentLoaded', function() {
	
  getCurrentTabUrl(function(url) {
    renderUrl(url);
  });
  
  getCurrentTabTitle(function(url) {
    renderTitle(url);
  });
  
  renderDate();
  renderTime();
});
