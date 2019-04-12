<?php
	$SITE_TITLE = 'Justfit';
	$SITE_DESCR = '';
	if ( isset($_POST) ) {
		$name = htmlspecialchars(trim($_POST['name']));
		// $email = htmlspecialchars(trim($_POST['email']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$subject = htmlspecialchars(trim($_POST['subject']));
		// $comment = isset($_POST['comment']) ? htmlspecialchars(trim($_POST['comment'])) : '';
		// $question = isset($_POST['question']) ? htmlspecialchars(trim($_POST['question'])) : '';

		$club = isset($_POST['club']) ? htmlspecialchars(trim($_POST['club'])) : '';
		$lesson = isset($_POST['lesson']) ? htmlspecialchars(trim($_POST['lesson'])) : '';
		$day = isset($_POST['day']) ? htmlspecialchars(trim($_POST['day'])) : '';
		

		$to = 'Elena357910@yandex.com';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1>";
		// $data .= 'Имя: '.$name."<br>";
		// // $data .= 'Email: '.$email."<br>";
		// $data .= 'Телефон: '.$phone."<br>";

		// if ( $comment != '' ) {
		// 	$data .= 'Комментарий: ' . $comment;
		// }
		// if ( $question != '' ) {
		// 	$data .= 'Вопрос: ' . $question;
		// }
		if($name){
			$data .= 'Имя: '.$name."<br>";
		}
		if($phone){
			$data .= 'Телефон: '.$phone."<br>";
		}

		if($club){
			$data .= 'Клуб: '.$club."<br>";
		}
		if($lessons){
			$data .= 'Занятие: '.$lessons."<br>";
		}
		if($day){
			$data .= 'Время дня: '.$day."<br>";
		}

		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();
?>