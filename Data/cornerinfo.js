    $(function() {
    	//console.log(cstore.data);
   	 var i = 0;
   	 	
   	      var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
   	       	var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);

      		var i = 0;
      		while (i < cstore.data.length) {
        	var store = cstore.data;
			
			console.log(store[1][13][1]);
			console.log(store[2][13][2]);
			
        	var lon = store[1][13][1];
    		var lat = store[2][13][2];
   			var marker = new google.maps.Marker({
        	position: new google.maps.LatLng(lat, lon),
        	title: "MassArt",
        	map: myMap
        	});
    	i++;
    
      }
    
       /*var heatmap = new google.maps.visualization.HeatmapLayer({
        data: myHeatmapData,
         heatmap.setMap(myMap);
     radius: 30*/
      });



      // Add in a marker:
     





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