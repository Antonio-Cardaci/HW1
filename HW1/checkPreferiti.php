<?php
	$conn = mysqli_connect("localhost","root","","hotel");
	$username = $_POST["username"];
	$nome = $_POST["nome"];
	$check = "SELECT * FROM preferiti WHERE Username = '$username' AND Titolo = '$nome'";
	$result =  mysqli_query($conn,$check);
	if(mysqli_num_rows($result)>0){
		$elemento = array(
			'isPresent' => 'true',
		);
		$jsonStr = json_encode($elemento);
		echo ($jsonStr);
	}
	else{
		$elemento = array(
			'isPresent' => 'false',
		);
		$jsonStr = json_encode($elemento);
		echo ($jsonStr);
	}

?>