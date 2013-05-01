    $(function() {
    	//console.log(cstore.data);

   	 	
   	      var mapOptions = {
      center: new google.maps.LatLng(42.378817,-71.01644849764489),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
   	       	var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);

      		var i = 0;
      		while (i < cstore.data.length) {
        	var store = cstore.data[i];
        	var healthy = hstore.data[i];
			
			console.log(store[13][1]);
			console.log(store[13][2]);
			
        	var lon = store[13][1];
    		var lat = store[13][2];
    		
    		var point = {url: 'point.png',
  						size: new google.maps.Size(71, 71),
  						origin: new google.maps.Point(0, 0),
  						anchor: new google.maps.Point(17, 34),
						scaledSize: new google.maps.Size(17, 32)
   						 };
      			
   			var marker = new google.maps.Marker({
        	position: new google.maps.LatLng(lon,lat),
        	title: "MassArt",
        	map: myMap,
        	icon: point
        	
        	})
    
        	
        	var longi = healthy[13][1];
    		var late = healthy[13][2];
    		
    		var carrot = {	url:'carrot.png',
    						size: new google.maps.Size(71, 71),
  							origin: new google.maps.Point(0, 0),
  							anchor: new google.maps.Point(17, 34),
							scaledSize: new google.maps.Size(17, 32)
    					};
    		
        	var marker = new google.maps.Marker({
        	position: new google.maps.LatLng(longi,late),
        	title: "MassArt",
        	map: myMap,
        	icon: carrot
        	})
    	i++;
    
      }
       });
       /*var heatmap = new google.maps.visualization.HeatmapLayer({
        data: myHeatmapData,
         heatmap.setMap(myMap);
     radius: 30*/
   



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