    $(function() {
    	console.log(cstore.data);
   	 var i = 0;
   	      var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
   	       	var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
   	       
   	       	var myHeatmapData = [];

      		var i =0;
      		while(i < 0) {
        	var row = potholes[i];
			
     
        myHeatmapData.push(
          new google.maps.LatLng(lat, lon)  
        )
    i++;
      }
    
       var heatmap = new google.maps.visualization.HeatmapLayer({
        data: myHeatmapData,
     radius: 30
      });

 heatmap.setMap(myMap);

      // Add in a marker:
     
    });




    /* 
    	while(i < potholes.length) { 
   	   
    var pothole = potholes[i];
    
      var lon = pothole.LONGITUDE;
    		var lat = pothole.LATITUDE;
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        title: "MassArt",
        map: myMap
      });*/