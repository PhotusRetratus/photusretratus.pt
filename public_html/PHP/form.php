<?php
	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
	
	require_once "../../vendor/autoload.php";
	
	if (isset($_POST['g-recaptcha-response'])) {
		
		$captcha = $_POST['g-recaptcha-response'];
		$response = json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']));
		
		$response = json_decode($response);
		
		if ($response->success === false) {
		}
		else{
			if($response->score <= 0.7){
				
				try {
					
					$mail = new PHPMailer();
					
					$mail->isSMTP();
					
					$mail->SMTPAuth = TRUE;
					
					$mail->Mailer = "smtp";
					
					$mail->Host = 'smtp.gmail.com';
					
					$mail->SMTPSecure = 'tls';
					
					$mail->Username = 'diogoah99@gmail.com';
					
					$mail->Password = 'hvlcjqjxfhwljlbn';
					
					$mail->Port = 587;
					
					$mail->setFrom('diogoah99@gmail.com');
					
					$mail->addAddress('diogoah99@gmail.com');
					
					$mail->Subject = 'Force';
					
					$mail->Body = "oi";
					
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
				
			}
			else{
			}
		}
		} else {
		
	}
	
	
	
?>