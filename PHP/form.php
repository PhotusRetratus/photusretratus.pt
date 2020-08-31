<?php
	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	require 'C:\php\vendor\autoload.php';
	
	$mail = new PHPMailer(TRUE);
	$captchaURL = "https://www.google.com/recaptcha/api/siteverify?secret=6LfmF8AZAAAAAF284CXnmOJzsaZ8hZ-e9TQfHHIz";
	
	if (isset($_POST['g-recaptcha-response'])) {
		$captcha = $_POST['g-recaptcha-response'];
	} 
	else 
	{
		$captcha = false;
		echo "nay1";
	}
	
	if (!$captcha) {
		
		echo "nay2";
	} 
	else 
	{
		$secret   = '6LfmF8AZAAAAAF284CXnmOJzsaZ8hZ-e9TQfHHIz';
		$response = file_get_contents($captchaURL . $secret . "&response=" . $captcha . "&remoteip=" . $_SERVER['REMOTE_ADDR']);
		
		$response = json_decode($response);
		
		if ($response->success === false) {
			echo "nay";
		}
		else
		{
			echo "yay";
			if ($response->success==true && $response->score <= 0.5) {
				//Do something to denied access
			}
		}
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