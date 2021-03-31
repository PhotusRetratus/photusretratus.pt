<?php
	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
	
	require_once "../../vendor/autoload.php";
	
	
	if (isset($_POST['g-recaptcha-response'])) {
		
		$captcha = $_POST['g-recaptcha-response'];
		echo $captcha;
		$ip = $_SERVER['REMOTE_ADDR'];
		echo $ip;
		$secret = "6LfmF8AZAAAAAF284CXnmOJzsaZ8hZ-e9TQfHHIz";
		$response = file_get_contents(
        "https://www.google.com/recaptcha/api/siteverify?secret=" . $secret . "&response=" . $captcha . "&remoteip=" . $ip);
		$response = json_decode($response);
		
		echo $response;
		
		if ($response->success === false) {
			echo "nay";
		}
		else{
			if($response->score <= 0.5){
				echo "yay";
			}
			else{
				echo "nay2";
			}
		}
	}
	
	else {
		
	}
	
	
	
	
	
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
	}
?>