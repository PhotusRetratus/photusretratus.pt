$(function(){	
	
	$("#contactForm").submit(function(e){
        e.preventDefault();
		grecaptcha.ready(function() {
			grecaptcha.execute('6LfmF8AZAAAAAFNT2ytbglM2hGpeJif1CmZgZZXm', {action: 'submit'}).then(function(token) {
				$('#contactForm').prepend('<input type="hidden"	id="token" 	name="token"	value="' + token + '">');
                $('#contactForm').prepend('<input type="hidden"	id="action"	name="action" 	value="sendMessage">');
				alert($("#token").value);
				alert(token);
				
                $(this).unbind('submitbutton').submit();
				$(this).unbind('submit').submit();
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