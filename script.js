var page = 0
var ad1 = document.getElementById("ad1")
var ad2 = document.getElementById("ad2")
var ad3 = document.getElementById("ad3")

function ad(x) {
  page = x
  let ad = Math.floor(Math.random() * 3) + 1
  if (ad==1) {
    document.getElementById("body").style.visibility = "hidden"
    ad1.style.visibility = "visible"
    ad1.volume = 0.08
    ad1.play()
    const skip = setTimeout(visibility, 5000)
    const end = setTimeout(redirect, 21826)
  }
  else if (ad==2) {
    document.getElementById("body").style.visibility = "hidden"
    ad2.style.visibility = "visible"
    ad2.volume = 0.03
    ad2.play()
    const skip = setTimeout(visibility, 5000)
    const end = setTimeout(redirect, 31834)
  }
  else if (ad==3) {
    document.getElementById("body").style.visibility = "hidden"
    ad3.style.visibility = "visible"
    ad3.volume = 0.2
    ad3.play()
    const skip = setTimeout(visibility, 5000)
    const end = setTimeout(redirect, 44837)
  }
}

function visibility() {
  document.getElementById("x").style.visibility = "visible";
}

function redirect() {
  if (page==0) {
    location.replace("index.html")
  }
  else if (page==1) {
    location.replace("Webpage1.html")
  }
  else if (page==2) {
    location.replace("Webpage2.html")
  }
  else if (page==3) {
    location.replace("Webpage3.html")
  }
}