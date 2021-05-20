<html>
    <head>
		<link rel="stylesheet" href="css/style.css"/>
        <script src='js/registrazione.js' defer></script>
    </head>
    <body>
        <main>
        <header>


				 <h1>
					 <strong>Registrati</strong>
                     
				 </h1>
			</header>
            <section id="registerSection">

                <p>
                    <input type='text' name='Username' id="username" placeholder="Username">&nbsp;<span style="color:red;" id="errorUsername"></span>
                </p>
                <p>
                   <input type='password' name='Password' id="password" placeholder="Password">&nbsp;<span style="color:red;" id="errorPassword"></span>
                </p>
                <p>
                    <input type='text' name='Nome' id="nome" placeholder="Nome">
                </p>
                <p>
                    <input type='text' name='Cognome' id="cognome" placeholder="Cognome">
                </p>
                <p>
                    <input type='text' name='Email' id="email" placeholder="Email">
                </p>
                <p>
                    <button id="buttonLogin" class="btn btn-primary">Registrati</button>
                </p>
				
				<div role="alert" id="alert" class="alert hidden"></div>
				
				

                <a href="login.php">Login</a>

            </section>
            <footer>
                <p>Antonio Luca Cardaci</p>
                <p>O46002184</p>
            </footer>

        </main>
    </body>
</html>