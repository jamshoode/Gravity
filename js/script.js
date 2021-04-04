document.getElementById("burger").onclick = function() {
	document.getElementById("burger").classList.toggle("change")
	document.getElementById("burger__menu").classList.toggle("active")
	document.getElementById("body").classList.toggle("workin")
	window.scrollTo(0, 0)
}

document.getElementById("burgerCloseBtn").onclick = function() {
	document.getElementById("burger").classList.remove("change")
	document.getElementById("burger__menu").classList.remove("active")
	document.getElementById("body").classList.remove("workin")
}
