// Map

function initMap() {
	var myLatLng = {lat: 34.871276, lng: -111.761493};
	var iconMap = "../img/icon-map-marker.svg";

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 7,
		center: myLatLng,
		disableDefaultUI: true
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: iconMap,
		title: 'Sedona is here!'
	});
};
