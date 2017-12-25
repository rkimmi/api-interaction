var xhrProv = false; // xhr for Proverbs
var xhrTrans= false; // xhr for translate

function getNewProverb() {
  // create new ajax object
  xhrProv = new XMLHttpRequest(); // new object, XMLHTTPRequest Class
  xhrProv.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs', true); // giving parameters for on send - true makes asynchronous
  xhrProv.addEventListener("load", xhrProvLoaded);
  xhrProv.addEventListener("error", xhrError);
  xhrProv.addEventListener("progress", xhrProgress);
  xhrProv.send(); // go!

}

function sendTweet() {
  alert("i'll tweet this for you");
}

function xhrProvLoaded(evt) {
  // process return. new variable to parsing JSON string.. this means to split all JSON elements
  var ajax = JSON.parse(xhrProv.responseText); // show user what we got in responseText
  document.getElementById('maoriQuote').innerHTML = ajax.source; // get maori quote
  document.getElementById('englishTrans').innerHTML = ajax.translation; // get translation
}

function xhrError(evt) {
 alert('oops! something went wrong!')
}

function xhrProgress(evt) {

}

// Translate Words

function getNewWord() { // getNewWord function - this is called on the on click of 'get new translation' button
  var userInput = document.getElementById('fld_input').value; // input box
  document.getElementById('fld_input').value = '';
  document.getElementById('englishTrans').innerHTML = userInput; // get maori quote
  xhrTrans = new XMLHttpRequest(); // ajax
  xhrTrans.addEventListener("load", xhrTransLoaded);
  xhrTrans.addEventListener("error", xhrError);
  xhrTrans.addEventListener("progress", xhrProgress);
  xhrTrans.open('GET', "https://eda-te-reo.herokuapp.com/api/translate?word="+userInput, false);// show user
  xhrTrans.send(); // go!

}
function xhrTransLoaded(evt) {
  // process return. new variable to parsing JSON string.. this means to split all JSON elements

 document.getElementById('maoriQuote').innerHTML = xhrTrans.responseText; // get translation


}
