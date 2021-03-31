$(function(){	
	
	contactForm.addEventListener('submit', event => {
        alert("0");
		e.preventDefault();
		alert("1");
		grecaptcha.ready(function() {
		alert("2");
			grecaptcha.execute('6LfmF8AZAAAAAFNT2ytbglM2hGpeJif1CmZgZZXm', {action:'contactForm'}).then(function(token) {
				alert("3");
				$("#g-recaptcha-response").value = token;
				contactForm.submit();
				alert("4"):
			});
		});
	});
	
	
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
		if (this.files && this.files[0]) {
			for(var i = 0; i < this.files.length; i++){
				$("#contactForm").append( 
				'<div class="input-group-prepend"> <label class="input-group-text" for="validatedInputGroupSelect">' + this.files[i].name+ '</label> </div>')
			}
			
		}
	});		
});		