(function($) {

	$("#btn").click(function(event){
		var error = false;
		var fName = $("#fName").val();
		if(fName.trim().length<2){
			$("#errfname").html("Invalid first name");
			error = true;
		}
		else {
			$("#errfname").html("");
		}

		var lName = $("#lName").val();
		if(lName.trim().length<2){
			$("#errlname").html("Invalid last name");
			error = true;
		}
		else {
			$("#errlname").html("");
		}	
	});

	$("#fName").keyup(function(){
		var fName = $("#fName").val();
		if(fName.trim().length()>1){
			$("#errfname").html("");
		}
	});
	$("#lName").keyup(function(){
		var lName = $("#lName").val();
		if(lName.trim().length()>1){
			$("#errlname").html("");
		}
	});
	
	var wdth = $(".getSizeFromInput").css("width");
	$(".setSize").css({"width" : wdth});

})(jQuery);
