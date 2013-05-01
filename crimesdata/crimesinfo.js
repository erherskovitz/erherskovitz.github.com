
$(function() {
   //console.log(crimes.meta);
  console.log(crimes.data);
  $("<p>").text("")
			.appendTo("body");
			
	var i = 0;
	var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  while(i < 100) { // crimes.data.length){
    var crime = crimes.data[i];
    
    var x = parseFloat(crime[34]);
    var y = parseFloat(crime[35]);  
   
    if(x < minX) { minX = x; }
    if(x > maxX) { maxX = x; }
    if(y < minY) { minY = y; }
    if(y > maxY) { maxY = y; }
    
 
    
      
    i++;
    
    }			

	//console.log([minX, maxX, minY, maxY]);
			
  /*var i = 0;
  while(i < 100) { // crimes.data.length){
    var crime = crimes.data[i];
    
    var neighborhood = crime[22];
    var crimeCode = crime[42];
    
    var x = parseFloat(crime[34]);
    var y = parseFloat(crime[35]);  
    
    
    // console.log(neighborhood);
    var diffX = maxX - minX;
	var screenX =  (x - minX) / diffX * 500;
	
	var diffY = maxY - minY;
	var screenY =  (y - minY) / diffY * 500;
    */
     
    /* var div = $("<div>").css({
     							left: screenX,
     							top: screenY,
     							width:"10",
     							height:"10",
     							backgroundColor:"rgb(141, 214, 185)",
     							position:"absolute",
     							opacity:.4
     							})
     							.attr("title", neighborhood + crimeCode);
     							
    	$("body").append(div); */
      
     /* var crimeCodeDiv = $("<div>")
      				.addClass("crime_code")
      				.text(crimeCode)
      				.appendTo(row);*/
      
      /*var neighborhoodDiv = $("<div>")
      					.addClass("neighborhood")
      					.text(neighborhood)
      					.appendTo(row);*/
      /* var xDiv = $("<div>")
      					.addClass("x-axis")
      					.text(x)
      					.appendTo(row);
      	
       var yDiv = $("<div>")
      					.addClass("y-axis")
      					.text(y)
      					.appendTo(row);*/
      	
      
      
    i++;
  
 });
  /*console.log(crimes);*/


