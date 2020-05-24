// client-side js, loaded by pet.html
// run by the browser each time the page is loaded

var feedmeter = 1;

try {
  var petname = getCookie("petname");
} catch {
  uhOh()
}

if (petname) {
  document.getElementById("name").innerText = petname + " is alive!";
  console.log(
    petname + " sez: never gonna give you up, never gonna let you down"
  );
} else {
  var petdata = document.getElementById("petdata");
  petdata.parentNode.removeChild(petdata);
}

var loader = document.getElementById("loading");
loader.parentNode.removeChild(loader);

function killpet() {
  var buttons = document.getElementById("buttons");
  buttons.parentNode.removeChild(buttons);
  document.getElementById("status").innerText = "What's happening?! (●__●)";
  document.getElementById("name").innerText = petname + " isn't feeling okay...";
  setCookie("petdead", 1, 1)
  document.location.href = "https://htmlpet.glitch.me"
}

function feed() {
  feedmeter++;
  if (feedmeter < 4) {
    document.getElementById("status").innerText =
      "Mmmm... yummy bread. ╰(*°▽°*)╯";
  } else if (feedmeter == 4) {
    document.getElementById("status").innerText =
      "Okay, that's enough. I can't handle any more (；′⌒`)";
  } else if (feedmeter == 5) {
    killpet();
  } else {
    uhOh();
  }
}

function takeBreak() {
  feedmeter--;
  if (feedmeter > 0) {
    document.getElementById("status").innerText =
      "Mmmm... that was a nice break!! (～￣▽￣)～";
  } else if (feedmeter == 0) {
    document.getElementById("status").innerText =
      "Okay, that's enough breaks - apparently there's a limit on breaks?!? (°ロ°)";
  } else if (feedmeter == -1) {
    killpet();
  } else {
    uhOh();
  }
}

function uhOh() {
  document.getElementById("status").innerText =
    "AAAAAA GLITCH IN THE UNIVERSE SEND HELP AAAAAAAAAA (＃°Д°)";
  document.location.href = "/error";
}

function sleep() {
  document.getElementById("status").innerText = "(∪.∪ )...zzz";
  document.getElementById("awake").style.display = "none"
  document.getElementById("asleep").style.display = "block"
}

function awaken() {
  document.getElementById("status").innerText = "(o.o) i had a dream... what if... what if... I am not real?!";
  document.getElementById("awake").style.display = "block"
  document.getElementById("asleep").style.display = "none"
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

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
