$(function() {
	$("<h1>").text("Boston Crime Rates")
      		 .appendTo("body");
    $("<h2>").text("Key")
      		 .appendTo("body");
    $("<li>").text("total incidents")
    		 .addClass("incidentli")
      		 .appendTo("h2");
    $("<li>").text("total domestic")
    		 .addClass("domesticli")
      		 .appendTo("h2");
	$("<p>").text("")
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