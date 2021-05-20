
<?php
	$conn = mysqli_connect("localhost","root","","hotel");
	
	$search = "SELECT * FROM preferiti,contenuti WHERE preferiti.Titolo = contenuti.Nome";
	$preferiti =  mysqli_query($conn,$search);
	if(mysqli_num_rows($preferiti)>0){
		
		$list = array();
		while($row = $preferiti->fetch_assoc()) {
			$list[] = array(
                
                'username'=> $row["Username"],
                'titolo' => $row["Titolo"],
				'immagine' => $row["Immagine"]
               
				
				
			);
		}
		$jsonStr = json_encode($list);
		echo ($jsonStr);
	}

?>