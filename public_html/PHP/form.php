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
					
					$mail->From = $_POST['email'];
					
					$mail->addAddress('diogoah99@gmail.com');
					
					$mail->addReplyTo($_POST['email']);
					
					if($_POST['formType'] === Message){
						
						$mail->Subject = $_POST['subject'];
					
						$mail->Body = 
						"Nome: " .$_POST['name'] .
						"\n Telemóvel: " . $_POST['telephone'] . 
						"\n Email: " . $_POST['email'] .
						"\n Message:\n" . $_POST['messageCorp'];
					
					}else if($_POST['formType'] === Print){
						
						$mail->Subject = $_POST['subject'];
						
						$mail->Body = 
						"Nome: " .$_POST['name'] .
						"\n Telemóvel: " . $_POST['telephone'] . 
						"\n Email: " . $_POST['email'];
					
					}
					
					
					$mail->AddAttachment($_POST['fileSubmission']);
					
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