// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log('Never. Give. Up  you');
var params = {}
location.search.substr(1).split("&").forEach(function(item) {params[item.split("=")[0]] = item.split("=")[1]})

if(params.petname) {
  document.getElementById('dialog').innerText = "please wait..."
  document.location.href = "https://htmlpet.glitch.me/pet?petname=" + params.petname
} else if(params.kill) {
  if(params.deadpet) {
    document.getElementById('dialog').innerText = "why did you kill " + params.deadpet + "?! i hope you don't kill your next pet..."
  } else {
    document.getElementById('dialog').innerText = "why did you kill your pet?! i hope you don't kill your next pet..."
  }
}
