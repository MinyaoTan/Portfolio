var navWidth = "250px";
var navWidthValue = 250;
var mdScreenSize = 720;
var lgScreenSize = 960;
var smScreenSize = 576;
var barWidthValue = 70;
var barWidth = "70px"
var regWidthValue = 100;
var regWidth = "100px"
var mainWidth = navWidthValue + barWidth + "px";
var resetShown = false;

resize();

if (window.addEventListener) {
  window.addEventListener('resize', resize);
}
else {
  window.attachEvent('onresize', resize);
}

function resize() {
	let currentWidth = window.innerWidth;

	if (currentWidth < mdScreenSize) {
		navWidth = currentWidth - barWidthValue + "px";
		mainWidth = currentWidth + regWidthValue + "px";
		//document.getElementsByClassName("shown-on-load")[0].style.display = "none";
		//document.getElementsByClassName("hidden-on-load")[0].style.display = "block";

	} else {
		navWidth = "250px";
		mainWidth = navWidthValue + barWidthValue + "px";
		//document.getElementsByClassName("hidden-on-load")[0].style.display = "none";
		//document.getElementsByClassName("shown-on-load")[0].style.display = "block";
	}

	if (currentWidth < lgScreenSize) {
		document.getElementsByClassName("hidden-on-load")[0].style.display = "block";
	} else {
		document.getElementsByClassName("hidden-on-load")[0].style.display = "none";
		// transition: opacity 1s ease-out;
  //   opacity: 0; 
  //   height: 0;
  //   overflow: hidden;
	}
}

function openNav() {
  document.getElementById("nav-menu").style.width = navWidth;
  document.getElementById("nav-bar").style.marginLeft = navWidth;
  document.getElementsByTagName("ARTICLE")[0].style.marginLeft = mainWidth;
  document.getElementsByClassName("hidden-on-load")[0].style.marginLeft = navWidth;
  document.getElementById("open-nav-btn").style.display = "none";
  document.getElementById("close-nav-btn").style.display = "block";

  let currentWidth = window.innerWidth;
  if (currentWidth < mdScreenSize) {
  	//document.getElementsByTagName("ARTICLE")[0].style.display = "none";
  	//document.getElementsByClassName("hidden-on-load")[0].style.display = "none";
    document.getElementsByClassName("hidden-on-load")[0].style.marginLeft = currentWidth + "px";
    document.getElementsByTagName("ARTICLE")[0].style.marginLeft = currentWidth + "px";
  }
}

function closeNav() {
  document.getElementById("nav-menu").style.width = "0";
  document.getElementById("nav-bar").style.marginLeft= "0";
  document.getElementsByTagName("ARTICLE")[0].style.marginLeft = regWidth;
  document.getElementsByClassName("hidden-on-load")[0].style.marginLeft = regWidth;
  document.getElementById("open-nav-btn").style.display = "block";
  document.getElementById("close-nav-btn").style.display = "none";

  let currentWidth = window.innerWidth;
  if (currentWidth < mdScreenSize) {
  	//document.getElementsByTagName("ARTICLE")[0].style.display = "block";
  	//document.getElementsByClassName("hidden-on-load")[0].style.display = "block";
    document.getElementsByClassName("hidden-on-load")[0].style.marginLeft = barWidth;
    document.getElementsByTagName("ARTICLE")[0].style.marginLeft = barWidth;
  }
}

function onDOMLoad() {
  let app = new Vue({
    el: '#app'
  })
}

document.addEventListener("DOMContentLoaded", onDOMLoad);

Vue.component('subheading', {
  props: ['category', 'date'],
  template: `<div><p class="sub-heading"><span class="category">{{category}}</span> • <span class="date">{{date}}</span></p></div>`
})
