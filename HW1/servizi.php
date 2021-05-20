<?php

    
    session_start();
    
    if(!isset($_SESSION['Username']))
    {
        
        header("Location: login.php");
        exit;
    }

?>


<html>
    <head>
        <link rel="stylesheet" href="css/style.css"/>
		
		<script src="js/servizi.js" defer="true"></script>
        <title>Progetto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

        </head>
        <body>
		
		
			<header>
			<h1>Benvenuto <?php echo $_SESSION["Username"]; ?>!</h1>
				<div id="nomeSito" class="right">
					RADDISON RED
				</div>

				<nav id="navMenu">
                    <div class="divMenu">
						<a class="btn btn-primary" href="homepage.php">HOME</a>
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
					 <strong>Scopri i nostri servizi</strong>
				 </h1>
			</header>
            <section id="section">
				<input type="text" id="searchBar" placeholder="Cerca un servizio"></input>
                <h1>Ecco alcuni dei nostri servizi</h1>
            </section> 

            <footer>
                <p>Antonio Luca Cardaci</p>
                <p>O46002184</p>
            </footer>
            
        </body>
    
</html>