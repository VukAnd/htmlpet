// client-side js, loaded by index.html
// run by the browser each time the page is loaded

var prompty = document.getElementById("dialog");

var acceptedCookies = getCookie("cookiea")
if (acceptedCookies == 1) {
  var cookieWarn = document.getElementById("cookiewarn");
  cookieWarn.parentNode.removeChild(cookieWarn);
}

var petKilled = getCookie("petdead")
if (petKilled == 1) {
  var deadPetName = getCookie("petname")
  setCookie("petdead", 0, 1)
  setCookie("petname", "", 1)
  prompty.innerText = "hmm. looks like " + deadPetName + "'s dead. ah well... better luck next time."
} else {
  var potentialPetName = getCookie("petname")
  if (potentialPetName) {
    prompty.innerHTML = "i think you already have a pet! check <a href='/pet'>the pet menu</a>.<br>if needed, you can still restart below."
  }
}

function acceptCooky() {
  setCookie("cookiea", 1, 1)
  window.location.reload(false);
}

function cookieTime() {
  var element = document.getElementById("petname");
  var elementValue = escape(element.value);
  setCookie("petname", elementValue, 1)
  document.location.href = "/pet"
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}