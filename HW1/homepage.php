<?php

    
    session_start();
    
    if(!isset($_SESSION['Username']))
    {
        
        header("Location: login.php");
        exit;
    }
	else {
		$username = $_SESSION['Username'];
	}

?>


<html>
    <head>
        <link rel="stylesheet" href="css/style.css"/>
		
		
		<script src="js/homepage.js" defer="true"></script>
        <title>Progetto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

        </head>
        <body>
		<input type="text" id="username" class="hidden" value="<?php echo htmlspecialchars($username); ?>" />
		
		
			<header>
			<h1>Benvenuto <?php echo $_SESSION["Username"]; ?>!</h1>
				<div id="nomeSito" class="right">
					RADDISON RED
				</div>

				<nav id="navMenu">
                    <div class="divMenu">
						<a class="btn btn-primary" href="homepage.php">HOMEPAGE</a>
						<a class="btn btn-primary" href="servizi.php">SERVIZI</a>
						<a class="btn btn-primary" href="preferiti.php">PREFERITI</a>
                       

                    </div>
                    
                <div class="navdiv">
                    <div></div>
                    <div></div>
                    <div></div>

                </div>

				 </nav>

				 <h1>
					 <strong>Visita il nostro Hotel</strong>
                     <br>
					
				 </h1>
			</header>
			
			<section id="contenuti">
				<input type="text" id="searchBar"  placeholder="Cerca una camera"></input>
				<h1>Dai un'occhiata alle nostre camere</h1>
				<div role="alert" id="alert" class="alert hidden"></div>
            </section>
			
			
            <section id="sectionMeteo">
				<h1>Verifica le condizioni meteo della tua destinazione</h1>
				<input type="text" id="searchBarMeteo" placeholder="Cerca una localita'"></input>
				<button class="button" id="buttonMeteo">Cerca</button>
			</section>
			
			 <section id="sectionCovid">
				<h1>Verifica la situazione COVID-19 della tua destinazione</h1>
				<button class="button" id="buttonCovid">Verifica</button>
			 </section>

			 <p><a href='logout.php'>Esci dall'account</a></p>

            <footer>
                <p>Antonio Luca Cardaci</p>
                <p>O46002184</p>
            </footer>
            
        </body>
    
</html>