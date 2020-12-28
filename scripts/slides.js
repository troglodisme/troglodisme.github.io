//go back in the browser history when hitting the escape key
window.addEventListener("keyup", function(e){if(e.keyCode == 27)history.back();},false);

//TO DO: add something to stop the browswer go to empty page in case there is no previous history

const counter = document.getElementById("counter")

window.onload = function() {
  updateCounter();
};

const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

let currentSlide = 0
let z = 0

// when i click the slide area, change the slide based on z-index
slideArea.addEventListener("click", function () {

  next();
  updateCounter();

})

const updateCounter = function(){
    console.log(currentSlide + 1);
    counter.innerHTML = (currentSlide + 1 ) + "/" + images.length;
}

const next = function(){
  currentSlide = currentSlide + 1;

  if (currentSlide > images.length - 1) {
    currentSlide = 0
  }

  z = z + 1

  // remove the animation from the style for EVERY IMAGE
  images.forEach(image => {
    image.style.animation = ""
  })

  // // pick the right image
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fade 0.5s"
}
