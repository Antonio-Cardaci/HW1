<?php
	$conn = mysqli_connect("localhost","root","","hotel");
	$nome = $_POST["nome"];
	$search = "SELECT * FROM contenuti WHERE UPPER(Nome) like '%$nome%'";
	$result =  mysqli_query($conn,$search);
	if(mysqli_num_rows($result)>0){
		$list = array();
		while($row = $result->fetch_assoc()) {
			$list[] = array(
				'nome' => $row["Nome"],
				'immagine'=> $row["Immagine"],
			);
		}
		$jsonStr = json_encode($list);
		echo ($jsonStr);
	}
	else{
		$elemento = array(
			'message' => 'Nessun elemento trovato',
		);
		$jsonStr = json_encode($elemento);
		echo ($jsonStr);
	}

?>