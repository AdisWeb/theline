
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */

    /*
        Wow
    */
    new WOW().init();
    
    /*
	    Countdown initializer
	*/
	var now = new Date();
	var countTo = 15 * 24 * 60 * 60 * 1000 + now.valueOf();    
	$('.timer').countdown(countTo, function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});
	
	/*
	    Subscription form
	*/
	$('.success-message').hide();
	$('.error-message').hide();
	
	$('.subscribe form').submit(function(e) {
		e.preventDefault();
	    var postdata = $('.subscribe form').serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/subscribe.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.valid == 0) {
	                $('.success-message').hide();
	                $('.error-message').hide();
	                $('.error-message').html(json.message);
	                $('.error-message').fadeIn();
	            }
	            else {
	                $('.error-message').hide();
	                $('.success-message').hide();
	                $('.subscribe form').hide();
	                $('.success-message').html(json.message);
	                $('.success-message').fadeIn();
	            }
	        }
	    });
	});
   $(".a1").click(function(){
    $(".hitem-1").show();
    $(".hitem-2").hide();
    $(".hitem-3").hide();
    $(".hitem-4").hide();
});
$(".a2").click(function(){
    $(".hitem-2").show();
    $(".hitem-1").hide();
    $(".hitem-3").hide();
    $(".hitem-4").hide();
});
$(".a3").click(function(){
    $(".hitem-3").show();
    $(".hitem-1").hide();
    $(".hitem-2").hide();
    $(".hitem-4").hide();
});
$(".a4").click(function(){
    $(".hitem-4").show();
    $(".hitem-1").hide();
    $(".hitem-2").hide();
    $(".hitem-3").hide();
});

});
$(document).ready(function () {
    var carousel = $("#owl-demo");
  carousel.owlCarousel({
    navigation:false,
     items : 3,
    navigationText: [
      "<i class='icon-chevron-left icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>"
      ],
  });

  
});


		var map;
		function initialize() {
		  var mapOptions = {
		    zoom: 10,
		    center: new google.maps.LatLng(20.6726166, -100.3846899)
		  };
		  map = new google.maps.Map(document.getElementById('map-canvas'),
		      mapOptions);
		      var marker = new google.maps.Marker({
		        map: map,
		        icon: "https://cdn3.iconfinder.com/data/icons/mapicons/icons/justice.png",
		        title: "Mi marcador",
		        position: map.getCenter()
		      });
		      var marker2 = new google.maps.Marker({
		        map: map,
		        icon: "https://cdn3.iconfinder.com/data/icons/mapicons/icons/smokingarea.png",
		        title: "Otro marker",
		        position: new google.maps.LatLng(20.727167, -100.3846889)
		      });
		      var marker3 = new google.maps.Marker({
		        map: map,
		        icon: "https://cdn3.iconfinder.com/data/icons/mapicons/icons/days-sex.png",
		        title: "Otro marker mas",
		        position: new google.maps.LatLng(20.725167, -100.4946789)
		      });



		      var infowindow = new google.maps.InfoWindow();
		      infowindow.setContent('<b>Mi marcador</b><br>Tel: 46546545');

		      var infowindow2 = new google.maps.InfoWindow();
		      infowindow2.setContent('<b>Otro marker</b><br>Tel: 46546545');

		      var infowindow3 = new google.maps.InfoWindow();
		      infowindow3.setContent('<b>Otro marker mas</b><br>Tel: 46546545');

		      infowindow.open(map, marker);


		      google.maps.event.addListener(marker, 'click', function() {
		        infowindow.open(map, marker);
		      });
		      google.maps.event.addListener(marker2, 'click', function() {
		        infowindow2.open(map, marker2);
		      });
		      google.maps.event.addListener(marker3, 'click', function() {
		        infowindow3.open(map, marker3);
		      });
		}

		google.maps.event.addDomListener(window, 'load', initialize);


   