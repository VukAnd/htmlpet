// client-side js, loaded by pet.html
// run by the browser each time the page is loaded

var params = {}
var feedmeter = 0
location.search.substr(1).split("&").forEach(function(item) {params[item.split("=")[0]] = item.split("=")[1]})

if(params.petname) {
  document.getElementById('name').innerText = params.petname + " is alive!"
  console.log(params.petname + " sez: never gonna give you up, never gonna let you down");
} else {
  var petdata = document.getElementById("petdata");
  petdata.parentNode.removeChild(petdata);
}

function killpet() {
  document.getElementById('status').innerText = "What's happening?! (●__●)"
  document.getElementById('name').innerText = params.petname + " isn't feeling okay..."
  document.location.href = "https://htmlpet.glitch.me?kill=1&deadpet=" + params.petname
}

function feed() {
  feedmeter = feedmeter + 1
  console.log(feedmeter)
  if (feedmeter < 4) {
    document.getElementById('status').innerText = "Mmmm... yummy bread. ╰(*°▽°*)╯"
    console.log("Yummy bread has been consumed")
  } else if (feedmeter == 4) {
    document.getElementById('status').innerText = "Okay, that's enough. I can't handle any more (；′⌒`)"
    console.log("Pet doesn't want more bread")
  } else {
    console.log("Too. Much. Bread.")
    killpet()
  }
}

