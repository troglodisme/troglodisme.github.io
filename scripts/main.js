const allTag = document.querySelector("#allButton")
const selectedTag = document.querySelector("#selectedButton")
// const heroTag = document.querySelectorAll(".hero")

document.addEventListener("DOMContentLoaded", function(){

	document.querySelector("#work").className = "showselected";
	document.getElementById("allButton").style.color = "#111111";
	document.getElementById("selectedButton").style.color = "#0000FF";


	// document.getElementById("selectedButton").style.fontWeight = "500";
})


allTag.addEventListener("click", function(){

	document.querySelector("#work").className = "showall";
	console.log("show all projects")

	document.getElementById("allButton").style.color = "#0000FF";
	document.getElementById("selectedButton").style.color = "#111111";

})


selectedTag.addEventListener("click", function(){
	document.querySelector("#work").className = "showselected";
	console.log("show selected projects")

	document.getElementById("selectedButton").style.color = "#0000FF";
	document.getElementById("allButton").style.color = "#111111";
})





// https://jsfiddle.net/fyv9rdeu/11/

//
// const projectTag = document.querySelectorAll(".project")
// const selectedProjectsTag = document.querySelectorAll(".selected")
// const allProjectsTag = document.querySelectorAll(".all")
//
//
// const toggleSelected = function() {
//
//   for (i = 0; i < projectTag.length; i++){
//     selectedProjectsTag[i].classList.toggle("hide");
//   }
// }
//
// const toggleAll = function() {
//   for (i = 0; i < projectTag.length; i++){
//     allProjectsTag[i].classList.toggle("hide");
//   }
// }
//
//
// // ON LOAD
// document.addEventListener("DOMContentLoaded", function(){
//
//   var x, i;
//   for (i = 0; i < projectTag.length; i++){
//     allProjectsTag[i].classList.toggle("hide");
//   }
//
//   selectedTag.classList.toggle("active");
//   toggleSelected();
// })
//
//
//
// selectedTag.addEventListener("click", function(){
//
//   allTag.classList.toggle("active");
//
//
//
//   })

// archiveTag.addEventListener("click", function(){
//   archiveTag.style.textDecoration = "line-through"
//   })
