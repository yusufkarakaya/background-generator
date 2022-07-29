var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById('random');

function ramdomBackgroundGenerate() {
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

	color1.value = "#" + randomColor1
	color2.value = "#" + randomColor2

	body.style.background = 
	"linear-gradient(to right, " 
	+ "#" + randomColor1
	+ ", " 
	+ "#" + randomColor2
	+ ")";
	css.textContent = body.style.background + ";";

	button.style.background = 
	"linear-gradient(to right, " 
	+ "#" + randomColor1
	+ ", " 
	+ "#" + randomColor2
	+ ")";
}

function setGradient() {
	ramdomBackgroundGenerate() 
}

function colorGenerator() {
	setGradient();
}
colorGenerator();

button.addEventListener('click',()=> {
	ramdomBackgroundGenerate() 
})


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

