$(function() {
	$("<p>").text("My Visualization Right Hurr")
			.appendTo("body");

});

$(function() {

  
    var i = 0;
    while(i < data.length) {
      var name = data[i];
      var fullName = name[8];
      var salary = parseInt(name[11]);
      
      var maxSalary = 266750;
      
      var fraction = salary / maxSalary;
      
      var salaryWidth = fraction * 1000;
      
      var row = $("<div>").addClass("row");
      
      var nameDiv = $("<div>")
      				.addClass("name")
      				.text(fullName + " ")
      				.appendTo(row);
      
      var salaryDiv = $("<div>")
      					.css({ width: salaryWidth })
      					.addClass("salary")
      					.text(salary)
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