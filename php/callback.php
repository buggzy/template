<?php

function callback($fields = "default"){

    if($fields == "default")
	$fields = array("person"=>"Имя", "phone"=>"Телефон");

    $msg = "";
    foreach($fields as $key => $val){
	if( isset($_POST[$key]) and (strlen($_POST[$key])>0) )
	    $msg .= $val . ": " . $_POST[$key] . "\n";
    }

    if(strlen($msg) > 0){

	if(isset($_REQUEST['force-subj']))
	    $subj = $_REQUEST['force-subj'];

	$subj = "Заказ обратного звонка с сайта ".$_SERVER['HTTP_HOST'];

	$to = "buggzy2@mail.ru";

	mail($to, $subj, $msg, "From: buggzy2@mail.ru\r\n;Content-type: text/plain; charset=utf-8");

	return true;
    }
}

?>
