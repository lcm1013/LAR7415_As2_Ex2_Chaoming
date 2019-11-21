mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhb21pbmciLCJhIjoiY2sxdXluY2p0MGJtcTNvcDV1bGxpaXMzOSJ9.ri0j33Q-Y81kFTL1o_jn5A';

var map = new mapboxgl.Map({
	container: 'map',
	minZoom: 10,
	maxZoom: 17,
	style: 'mapbox://styles/chaoming/ck22kvrtg14561cmysikoj3cg', 	
	attributionControl: 'City of Charlottesville Open Data Portal (http://opendata.charlottesville.org/)'

});

$(document).ready(function() {
  $("[data-toggle]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
  });
     
});
 
$(".swipe-area").swipe({
    swipeStatus:function(event, phase, direction, distance, duration, fingers)
        {
            if (phase=="move" && direction =="right") {
                 $(".container").addClass("open-sidebar");
                 return false;
            }
            if (phase=="move" && direction =="left") {
                 $(".container").removeClass("open-sidebar");
                 return false;
            }
        }
});