<?php
	$conn = mysqli_connect("localhost","root","","hotel");
	$username = $_POST["username"];
	$nome = $_POST["nome"];
	$delete = "DELETE FROM preferiti WHERE Username = '$username' AND Titolo = '$nome'; ";
	$result =  mysqli_query($conn,$delete);
	if($result){
		$elemento = array(
			'ok' => 'Rimozione effettuata con successo.',
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