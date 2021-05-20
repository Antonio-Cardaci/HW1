<?php

    session_start();

    if(isset($_SESSION["Username"])){

    header("Location:homepage.php");
    exit;
}

if(isset($_POST["Username"]) && isset($_POST["Password"]))
{

    $conn = mysqli_connect("localhost","root","","hotel");
    $query = "SELECT * FROM clienti WHERE Username = '".$_POST['Username']."' 
    AND Password = '".$_POST['Password']."'";
        $res = mysqli_query($conn, $query);

        if(mysqli_num_rows($res)>0){

            $_SESSION["Username"]= $_POST["Username"];

            header("Location:homepage.php");
            exit;
        }
        else{
            $errore =true;
        }
}





?>

<html>
    <head>
    <link rel="stylesheet" href="css/style.css"/>
    </head>
    <body>
    <header>

				 <h1>
					 <strong>Login</strong>
				 </h1>
				
			</header>
    <?php
            
            if(isset($errore))
            {
                echo "<p class='errore'>";
                echo "Credenziali non valide.";
                echo "</p>";
            }
    ?>
		<main>
			<div class="centerBox">
				<form name='user_form' method='post'>
					<p>
						 <input type='text' name='Username' placeholder="Username">
					</p>
					<p>
						<input type='password' name='Password' placeholder="Password">
					</p>
					<a href="registrazione.php">Non sei registrato? Registrati ora</a>
					<p>
						<button type='submit' name='login' class='btn btn-primary'>Accedi</button>
					</p>
				</form>
				
			</div>
		</main>

        <footer>
                <p>Antonio Luca Cardaci</p>
                <p>O46002184</p>
        </footer>

        
</body>
</html>
