var button = document.querySelector(".form-btn");
			
var form = document.querySelector(".form");
			
var arrival = document.querySelector("[name=arrival]")
			
button.addEventListener( "click", function (event) {
	event.preventDefault();
	form.classList.toggle("form-show");
	arrival.focus();
} )