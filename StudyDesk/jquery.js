
  $("a").click( function () {
  	console.log('This message will be logged, but will not cause an error in IE7');
	$(this).addClass(".info");},
  function () {
    $(this).removeClass(".info");
  });
