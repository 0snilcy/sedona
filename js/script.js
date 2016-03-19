// Navigation

var btn = document.querySelector(".main-menu__button");
var menu = document.querySelector(".main-menu__list");

btn.addEventListener("click", function(event) {
	if (!menu.classList.contains("main-menu__list--opened")) {
		event.preventDefault();
		menu.classList.add("main-menu__list--opened");
		btn.classList.add("main-menu__button--opened");
	}
	else {
		event.preventDefault();
		menu.classList.remove("main-menu__list--opened");
		btn.classList.remove("main-menu__button--opened");
	}
});


// Form

var form = document.querySelector(".form");
var input = form.querySelectorAll("input.form__contacts-input");

form.addEventListener("submit", function(event) {
	var count = 0;
	for(var i = 0; i < input.length; i++ ){
		if(!input[i].value){
			event.preventDefault();
			input[i].parentNode.classList.add("form__contacts-wrap--error");
			count++;
		}
	}
	if (count == "0") {
		popupGood.classList.remove("popup--closed");
	}
});

for(var i = 0; i < input.length; i++){
	input[i].addEventListener("click", function(event){
		this.parentNode.classList.remove("form__contacts-wrap--error");
	});
}


// Popup

var popup     = document.querySelectorAll(".popup");
var popupBtn  = document.querySelectorAll(".popup__btn");
var popupBad  = document.querySelector("#popopBad");
var popupGood = document.querySelector("#popopGood");

for (var i = 0; i < popupBtn.length; i++) {
	popupBtn[i].addEventListener("click", function(event){
		for (var i = 0; i < popup.length; i++) {
			event.preventDefault();
			popup[i].classList.add("popup--closed");
		}
	});
}

