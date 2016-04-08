document.addEventListener("DOMContentLoaded", function(){

	// Map

	var mapElement = document.getElementById('map');
	if (mapElement && google) {
		var centerLatLng = new google.maps.LatLng(34.871276, -111.761493);
		var mapOptions = {
			zoom: 7,
			center: centerLatLng,
			scrollwheel: false,
			disableDefaultUI: true
		};
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var image = "../img/icon-map-marker.svg";
		var marker = new google.maps.Marker({
			position: centerLatLng,
			map: map,
			icon: image,
			title: 'Sedona is here!'
		});
	}




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
		event.preventDefault();
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
		} else {
			popupBad.classList.remove("popup--closed");
		}
	});

	for(var i = 0; i < input.length; i++){
		input[i].addEventListener("click", function(event){
			this.parentNode.classList.remove("form__contacts-wrap--error");
		});
	}


	// Popup

	var popup	 = document.querySelectorAll(".popup");
	var popupBtn  = document.querySelectorAll(".popup__btn");
	var popupBad  = document.querySelector("#popopBad");
	var popupGood = document.querySelector("#popopGood");

	for (var x = 0; x < popupBtn.length; x++) {
		popupBtn[x].addEventListener("click", function(event){
			for (var x = 0; x < popup.length; x++) {
				event.preventDefault();
				popup[x].classList.add("popup--closed");
			}
		});
	}
});
