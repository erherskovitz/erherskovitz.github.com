$(function() {
	$("<p>").text("My Visualization Right Hurr")
			.appendTo("body");

});

$(function() {

  
    var i = 0;
    while(i < data.length) {
      var name = data[i];
      var fullName = name.name;
      var inc = parseInt(name.incidents);
      var dom = parseInt(name.domestic);
      
      var maxIncident = 10652;
      var maxDom = 2841;
      
      var incFraction = inc / maxIncident;
      var domFraction = dom / maxDom;
      
      var incWidth = incFraction * 5000;
   	  var domWidth = domFraction * 500;
      
      var row = $("<div>").addClass("row");
      
      var nameDiv = $("<div>")
      				.addClass("townname")
      				.text(fullName + " ")
      				.appendTo(row);
      
      var incDiv = $("<div>")
      					.css({ width: incWidth })
      					.addClass("incident")
      					.text(inc)
      					.appendTo(row);
       var domDiv = $("<div>")
      					.css({ width: domWidth })
      					.addClass("domestic")
      					.text(dom)
      					.appendTo(row);
      
      
   /*   var clear = $("<div>")
    				.addClass("clear");
    
    $("body").append(clear);
    
    */

      			
      $("p").append(row); 
      console.log(name)
      i++;
    }
    

});