function reqListener () {
  console.log(this.responseText);
};

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "yourFile.txt", true);
oReq.send();


var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}




// function showPosition(position) {
//     var latlon = position.coords.latitude + "," + position.coords.longitude;

//     var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
//     "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";

//     document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
// }


// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");