function print_location(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);

    var lat = document.getElementById('lat');
    var lon = document.getElementById('lon');

    lat.innerHTML = "Latitude " + latitude;
    lon.innerHTML = "Longitude " + longitude;

}

function get_location() {
    navigator.geolocation.getCurrentPosition(print_location);
}
