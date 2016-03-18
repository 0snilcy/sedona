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
