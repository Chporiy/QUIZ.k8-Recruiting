<?php
error_reporting(0);

$qual = join(', ', $_POST['qual']);
$workers = $_POST['workers'];
$range = $_POST['range'];
$hr = $_POST['hr'];
$phone = $_POST['phone'];


$to = "";
$subject = "Новая заявка";
$message = '
 Пользователь оставил свои данные <br>
 <b>Уровень квалификации сотрудников:</b> ' . $qual . ' <br>
 <b>Какое количество сторудников нужно:</b> ' . $workers . ' <br>
 <b>На постоянную работу или на проект:</b> ' . $range . ' <br>
 <b>Есть ли внутренний HR Отдел:</b> ' . $hr . ' <br>
 <b>Телефон:</b> ' .  $_POST['phone'] . '';
$headers = "From: k8rekrut@yandex.ru" . "\r\n" .
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
mail($to,$subject,$message,$headers);

?>
