var directionsService;
var directionsDisplay;
var mapp,mapDiv;


	
	window.onload =loadScript;
	
	function loadScript() {
		
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'http://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,panoramio&key=AIzaSyBeQBZMsbtixmLiKka631KHT78EUZCNfn0&sensor=true&' + 'callback=initialise';
  document.body.appendChild(script);
 
 
}



function initialise() {
	
	directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(41.850033, -87.6500523)
  };
 // alert("hgh");
  mapDiv = document.getElementById("mapi");
  
  //alert(mapDiv.valueOf);
   map = new google.maps.Map(mapDiv,mapOptions);
 // alert("h");
  var start = document.getElementById('start');
        var autocomplete = new google.maps.places.Autocomplete(start);
         autocomplete.bindTo('bounds', map);

         var end = document.getElementById('end');
        var autocomplete = new google.maps.places.Autocomplete(end);
         autocomplete.bindTo('bounds', map);

         


  directionsDisplay.setMap(mapp);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));

  
  var locate = document.getElementById('locate');
  map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(locate);
  
  var back = document.getElementById('menu');
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(back);
  
  myloc();
}
function calcRoute() {
  var start = document.getElementById('start').value;
  if (start == "") {
  	start = pos;
  };
  var end = document.getElementById('end').value;
  var mode = "DRIVING";
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode [mode]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}