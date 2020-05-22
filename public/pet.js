// client-side js, loaded by index.html
// run by the browser each time the page is loaded

var params = {}
location.search.substr(1).split("&").forEach(function(item) {params[item.split("=")[0]] = item.split("=")[1]})

if(params.petname) {
  document.getElementById('name').innerText = params.petname + " is alive!"
  console.log(params.petname + " sez: never gonna give you up, never gonna let you down");
} else {
  var tempbuttonvar = document.getElementById("buttons");
  tempbuttonvar.parentNode.removeChild(tempbuttonvar);
}

function killpet() {
  document.location.href = "https://htmlpet.glitch.me?kill=1&deadpet=" + params.petname
}

