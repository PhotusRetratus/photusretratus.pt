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
					
					$mail->Body = 
					"Nome: " .$_POST['name'] .
					"\nTelemóvel: " . $_POST['telephone'] . 
					"\nEmail: " . $_POST['email'];
					
					if($_POST['formType'] === "Message"){
						
						$mail->Subject = $_POST['subject'];
						
						
						$mail->Body = 
						$mail->Body ."\nMessage:\n" . 
						$_POST['messageCorp'];
						
					}
					elseif($_POST['formType'] === "Print"){
						
						$mail->Subject = "Fotos Imprimir";
						
						$zip = new ZipArchive();
						$zipName = "teste.zip";
						
						if ($zip->open($zipName, ZipArchive::CREATE)!==TRUE) {
							echo "Error creating zip";
						}
						
						if (isset($_FILES['fileSubmission']['tmp_name'])) {
						
							
							for($i = 0; $i < count($_FILES['fileSubmission']['tmp_name']); $i++){
								$zip->addFile($_FILES['fileSubmission']['name'][$i]);
								$mail->AddAttachment($_FILES['fileSubmission']['tmp_name'][$i], $_FILES['fileSubmission']['name'][$i]);
							}
							
							$zip->close();
							
							$mail->AddAttachment($zipName);
						}
						
					}
					elseif($_POST['formType'] === "Schedule"){
						
						$mail->Subject = "Marcar Reunião";
						
						$mail->Body = 
						$mail->Body . 
						"\nAssunto da Reunião: " . $_POST['subjectMeeting'] .
						"\nDia: " . $_POST['day'] .
						"\nHora: " . $_POST['time'];
						
					}
					
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