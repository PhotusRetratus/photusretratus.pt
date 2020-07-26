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
			case "Message":
			$("#formPrint").hide();
			$("#formSchedule").hide();
			break;
			case "Print":
			$("#formMessage").hide();
			$("#formSchedule").hide();
			break;
			case "Schedule":
			$("#formMessage").hide();
			$("#formPrint").hide();
			break;
		}
		$("#form"+$("#formType option:selected").val()).show();
	});
	
	$("#fileSubmission").change(function(){
		alert(this.files[0].name);
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			
			reader.onload = function (e) {
				alert(e.files[0].name);
			};
			
			reader.readAsDataURL(this.files[0]);
		}
	});	
});