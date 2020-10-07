var currentSlide = 0;

const items = [
	{ copy: "project 1", circle: "#3e78ed"},
  { copy: "project 2", circle: "#3e78ed"},
  { copy: "project 3", circle: "#00ff00"},
  { copy: 'download <a href="portfolio.pdf"> my pdf </a>', circle: "#ff00ff"}
]

const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")
const titles = document.querySelector("h2")
const circles = document.querySelector("section div.circle")

const init = (n) => {
  slides.forEach((slide) => {
    slide.style.display = "none"

    dots.forEach((dot) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")

  titles.innerHTML = items[currentSlide].copy
  circles.style.backgroundColor = items[currentSlide].circle
}

document.addEventListener("DOMContentLoaded", init(currentSlide))

const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
  // console.log("next")
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}


document.querySelector(".next").addEventListener('click', next)
document.querySelector(".prev").addEventListener('click', prev)

setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    init(index)
    currentSlide = i
  })
})
