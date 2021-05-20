<?php

$conn = mysqli_connect("localhost","root","","hotel");

$username = $_POST["username"];
$password = $_POST["password"];
$nome=$_POST["nome"];
$cognome=$_POST["cognome"];
$email=$_POST["email"];

$search = "SELECT * FROM clienti WHERE Username = '$username'";

$utente =  mysqli_query($conn,$search);

if(mysqli_num_rows($utente)>0){
    $jsonData = array(
		'result' => 'notOk',
		'message' => "Username gia' utilizzato",
		);
		
		$jsonStr = json_encode($jsonData);
		echo ($jsonStr);
}
else{
	$toinsert = "INSERT INTO clienti
			(Username, Password,Nome,Cognome,Email) 
			VALUES
			('$username','$password','$nome','$cognome','$email')";

	$result = mysqli_query($conn,$toinsert);

	if($result){
		$jsonData = array(
		'result' => 'ok',
		'message' => 'Registrazione avvenuta con successo'
		);
		
		$jsonStr = json_encode($jsonData);
		echo $jsonStr;
	} else{
		$jsonData = array(
		'result' => 'notOk',
		'message' => 'Si e\' verificato un errore, riprovare',
		);
		
		$jsonStr = json_encode($jsonData);
		echo $jsonStr;
	}
}


?>

