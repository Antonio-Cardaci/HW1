
<?php
	$conn = mysqli_connect("localhost","root","","hotel");
	
	$search = "SELECT * FROM contenuti";
	$contenuti =  mysqli_query($conn,$search);
	if(mysqli_num_rows($contenuti)>0){
		
		$list = array();
		while($row = $contenuti->fetch_assoc()) {
			$list[] = array(
				'nome' => $row["Nome"],
				'immagine'=> $row["Immagine"],
				
			);
		}
		$jsonStr = json_encode($list);
		echo ($jsonStr);
	}

?>