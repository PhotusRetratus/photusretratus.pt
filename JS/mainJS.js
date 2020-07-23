$(function(){
	
	$(".nav-link").click(function(){
		var a = $(this).attr('id');
		a = a.replace("nav", "");
		$('html, body').animate({
			scrollTop: $("#"+a).offset().top
		}, 2000);
	});
	
	$("#formType").change(function(){
		switch($("#formType option:selected").val()){
			case "message":
				$("#print").hide();
				$("#schedule").hide();
			break;
			case "print":
				$("#message").hide();
				$("#schedule").hide();
			break;
			case "schedule":
				$("#message").hide();
				$("#print").hide();
			break;
		}
		$("#"+$("#formType option:selected").val()).show();
		});
});	