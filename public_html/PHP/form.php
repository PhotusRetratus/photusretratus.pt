<?php
	
	echo "yo";
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
	
	
	require_once "vendor/autoload.php";
	
	
	echo "yo2";
	
	/*$ip = $_SERVER['REMOTE_ADDR'];
	$captchaURL = "https://www.google.com/recaptcha/api/siteverify?secret=6LfmF8AZAAAAAF284CXnmOJzsaZ8hZ-e9TQfHHIz";
	$response = file_get_contents($url);
	$responseKeys = json_decode($response, true);
	*/
	echo "yo3";
	
	if ($responseKeys["success"] && $responseKeys["action"] == 'contactForm') {
            if ($responseKeys["score"] >= 0.5) {
                //send email with contact form submission data to site owner/ submit to database/ etc
                //redirect to confirmation page or whatever you need to do
            } elseif ($responseKeys["score"] < $g_recaptcha_allowable_score) {
                //failed spam test. Offer the visitor the option to try again or use an alternative method of contact.
            }
        } elseif($responseKeys["error-codes"]) { //optional
            //handle errors. See notes below for possible error codes
            //(I handle errors by sending myself an email with the error code for debugging and offering the visitor the option to try again or use an alternative method of contact)
        } else {
            //unkown screw up. Again, offer the visitor the option to try again or use an alternative method of contact.
        }

        exit;
	
	if ($response->success==true && $response->score <= 0.5) {
    //Do something to denied access
}
	
	/*
	
		try {
		
		$mail->isSMTP();
		
		$mail->SMTPAuth = TRUE;
		
		$mail->Host = 'smtp.gmail.com';
		
		$mail->SMTPSecure = 'tls';
		
		$mail->Username = 'diogoah99@gmail.com';
		
		$mail->Password = 'padjroixggvqqdau';
		
		$mail->Port = 587;
		
		$mail->setFrom('print@photuseretratus.pt');
		
		$mail->addAddress('diogoah99@gmail.com');
		
		$mail->Subject = 'Force';
		
		$mail->Body = $name;
		
		//$mail->AddAttachment($_POST['fileSubmission']);
		
		$mail->send();
		}
		catch (Exception $e)
		{
		echo $e->errorMessage();
		}
		catch (\Exception $e)
		{
		echo $e->getMessage();
	}*/
?>