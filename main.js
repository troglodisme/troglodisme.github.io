let itemNumber = 0;
console.log(itemNumber)

const items = [
	{ copy: "project 1", circle: "#3e78ed", image: "src='assets/P7060178.JPG' "},
  { copy: "project 2", circle: "#3e78ed", image: "src='assets/P7060199.JPG' "},
  { copy: "project 3", circle: "#00ff00", image: "src='assets/P7060192.JPG' "},
  { copy: 'download <a href="portfolio.pdf"> my pdf </a>', circle: "#ff00ff"}
]

const nextTag = document.querySelector('footer img.next')
const prevTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')

const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
let imageTag = document.querySelector("img[src='assets/P7060192.JPG']")


const next = function(){
  itemNumber = itemNumber + 1

  if (itemNumber > items.length -1){
    itemNumber = 0
  }
  updateSection()
}


const prev = function(){
  itemNumber = itemNumber - 1

  if (pageNumber < 0) {
    itemNumber = items.length - 1
  }
  updateSection()
}

const updateSection = function() {
  outputTag.innerHTML = items[itemNumber].copy
  circleTag.style.backgroundColor = items[itemNumber].circle
	imageTag = "assets/P7060199.JPG"
	imageTag.load()
  // imageTag.innerHTML = items[itemNumber].image
}

nextTag.addEventListener('click', function () {
  next()
  console.log("next")
  console.log(itemNumber)
})

prevTag.addEventListener('click', function () {
  prev()
  console.log("prev")
  console.log(itemNumber)
})
