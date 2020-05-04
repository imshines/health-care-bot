

    
    window.addEventListener('load',function(){
   
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAwouHTN8MpRdqASuF0V5akAfv7jcmp3N4&libraries=places&callback=initMap';
        document.body.appendChild(script);
      });
      
      
var map;
function initMap() {
    var map;
//  var lat1;
//  var lng2;
	if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
   console.log('error');
  }


function showPosition(position) {
	lat1=position.coords.latitude;
	lng2=position.coords.longitude;
   console.log( position.coords.latitude +" "+position.coords.longitude );
 	let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    map = new google.maps.Map(document.getElementById('hospital_map'), {
        center: latLng,
        zoom: 17
    });

    // Create the places service.
    var service = new google.maps.places.PlacesService(map);

    // Perform a nearby search.
    service.nearbySearch({
            location: latLng,
            radius: 4000,
            type: ['hospital']
        },
        function(results, status, pagination) {
            if (status !== 'OK') return;

            createMarkers(results);
            getNextPage = pagination.hasNextPage && function() {
                pagination.nextPage();
            };
        });
}

function createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
        var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        var marker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            position: place.geometry.location
        });
        bounds.extend(place.geometry.location);
    }
    map.fitBounds(bounds);
}



}








