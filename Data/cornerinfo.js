    $(function() {
    	console.log(cstore.data);

   	 	console.log(data);
   	 	
   	      var mapOptions = {
      center: new google.maps.LatLng(42.378817,-71.01644849764489),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
   	       	var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
   	       	
   	       	var tenLayer = new google.maps.KmlLayer('https://maps.google.com/maps/ms?ie=UTF8&authuser=0&msa=0&output=kml&msid=207036911883524595366.0004dc13e0f4ebb53d3f7');
				tenLayer.setMap(myMap);
			
			$("#ten").click( function () {
  				$("#tenhover").show();
                tenLayer.setMap(null);
					});

            $("#tenhover").click( function () {
  				$("#tenhover").hide();
                tenLayer.setMap(myMap);
					});
			
			var fortyLayer = new google.maps.KmlLayer('https://maps.google.com/maps/ms?authuser=0&vps=2&ie=UTF8&msa=0&output=kml&msid=207036911883524595366.0004dc22713f969f52c9a');
				fortyLayer.setMap(myMap);
				
			$("#forty").click( function () {
  				$("#fortyhover").show();
                fortyLayer.setMap(null);
					});

            $("#fortyhover").click( function () {
  				$("#fortyhover").hide();
                fortyLayer.setMap(myMap);
					});
			
			var seventyLayer = new google.maps.KmlLayer('https://maps.google.com/maps/ms?authuser=0&vps=3&ie=UTF8&msa=0&output=kml&msid=207036911883524595366.0004dc2278053b234343e');
				seventyLayer.setMap(myMap);
			
			$("#seventy").click( function () {
  				$("#seventyhover").show();
                seventyLayer.setMap(null);
					});

            $("#seventyhover").click( function () {
  				$("#seventyhover").hide();
                seventyLayer.setMap(myMap);
					});
				
      		var i = 0;
      		while (i < cstore.data.length) {
        	var store = cstore.data[i];
			
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
        	title: store[8],
        	map: myMap,
        	icon: point
        	
        	})
    		i++;
    
      		}
      		
      		//console.log(hstore.data);
      		
      		var i = 0;
      		while (i < hstore.data.length) {
        	var healthy = hstore.data[i];
      		
      		var latlong = healthy[13].split(",");
      		
      		var longi = latlong[0];
    		var late = latlong[1];
    		
    		//console.log(hstore.data.length);
    		//console.log(healthy[14][1]);
			//console.log(healthy[14][2]);
      		
    		
    		var carrot = {	url:'carrot.png',
    						size: new google.maps.Size(71, 71),
  							origin: new google.maps.Point(0, 0),
  							anchor: new google.maps.Point(17, 34),
							scaledSize: new google.maps.Size(19, 32)
    					};
    		
        	var marker = new google.maps.Marker({
        	position: new google.maps.LatLng(longi,late),
        	title: healthy[8],
        	map: myMap,
        	icon: carrot
        	})
      		    i++;
    
      		}
       	});
        
        	/*var longi = healthy[13][1];
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
        	})*/
    
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