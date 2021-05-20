<?php
	$conn = mysqli_connect("localhost","root","","hotel");
	$username = $_POST["username"];
	$nome = $_POST["nome"];
	$insert = "INSERT INTO preferiti ( Username , Titolo) VALUES ('$username' , '$nome')";
	$result =  mysqli_query($conn,$insert);
	if($result){
		$elemento = array(
			'ok' => 'Inserimento effettuato con successo.',
		);
		$jsonStr = json_encode($elemento);
		echo ($jsonStr);
	}
	else{
		$elemento = array(
			'notOk' => 'Errore',
		);
		$jsonStr = json_encode($elemento);
		echo ($jsonStr);
	}

?>