
function viewSuccess(message){
	const aler = document.getElementById("alert");
	aler.classList.add("alert-success");
	aler.classList.remove("alert-danger");
	aler.classList.remove("hidden");
	aler.innerHTML = message;
}

function viewError(message){
	const aler = document.getElementById("alert");
	aler.classList.add("alert-danger");
	aler.classList.remove("alert-success");
	aler.classList.remove("hidden");
	aler.innerHTML = message;
}

function check(event){
    const username=document.getElementById("username").value;
	const errorUsername = document.getElementById("errorUsername");
	const pass = document.getElementById("password").value;
	const errorPassword = document.getElementById("errorPassword");
	const nome=document.getElementById("nome").value;
	const cognome=document.getElementById("cognome").value;
	const email=document.getElementById("email").value;
    
	if(username.length > 0 && !/^[a-zA-Z0-9]{1,15}$/.test(username)){
        errorUsername.innerHTML = "Sono ammesse lettere,numeri. Max 15";
		errorUsername.classList.remove("hidden");
		event.preventDefault();
    }
	if(pass.length > 0 && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass)){
		 errorPassword.innerHTML =
		"La password deve rispettare i seguenti criteri:Minimo otto caratteri, almeno una lettera maiuscola,una lettera minuscola, un numero e un carattere speciale";
		errorPassword.classList.remove("hidden");
		event.preventDefault();
    }
	else{
		
		errorUsername.classList.add("hidden");
		errorPassword.classList.add("hidden");
		
		
		
		const formData = new FormData();
		formData.append("username",username);
		formData.append("password",pass);
		formData.append("nome",nome);
		formData.append("cognome",cognome);
		formData.append("email",email);

		fetch("http://localhost/hotel/register.php", {
		method: 'post', 
		body:  formData,
		}).then(function(response) {
				if (response.status >= 200 && response.status < 300) {
					
					return response.text()
				}
				throw new Error(response.statusText)
			})
			.then(function(response) {
				var jsonResponse = JSON.parse(response);
				var result = ""+jsonResponse.result;
				var message = ""+jsonResponse.message;
				if(result == "notOk"){
					viewError(message);
				}
				else if(result == "ok") {
					viewSuccess(message);
				}
				else {
					viewError("Si e' verificato un errore, riprova piu' tardi.");
				}
			})
    }
}

const buttonLogin = document.getElementById("buttonLogin");
buttonLogin.addEventListener("click",check);


