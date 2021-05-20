
<?php
	$conn = mysqli_connect("localhost","root","","hotel");
	
	$search = "SELECT * FROM servizi";
	$servizi =  mysqli_query($conn,$search);
	if(mysqli_num_rows($servizi)>0){
		
		$list = array();
		while($row = $servizi->fetch_assoc()) {
			$list[] = array(
				'titolo' => $row["Titolo"],
				'immagine'=> $row["Immagine"],
				'descrizione'=> $row["Descrizione"]
			);
		}
		$jsonStr = json_encode($list);
		echo ($jsonStr);
	}

?>