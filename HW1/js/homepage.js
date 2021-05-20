const section = document.getElementById("contenuti");
var padriNecessari = 0;
function createPadri(contenuti){

	if(contenuti!=null){
	
	
	var numeroElementi = contenuti.length;
	
	padriNecessari = Math.ceil(numeroElementi/3);
	
	}
	for(let numeroPadre = 0; numeroPadre < padriNecessari;numeroPadre++){
		
		
		var padre = document.createElement("div");
		
		padre.setAttribute("id","contenitorePadre"+numeroPadre);
		
		padre.classList.add("box");
		
		
		var inizio = 0 + (numeroPadre * 3);
		var fine = inizio + 3;
		
		createChild(padre,inizio,fine,numeroElementi,contenuti);
		section.appendChild(padre);
	}
}



function createChild(divPadre,inizio,fine,numeroElementi,contenuti){
	
	
	for(let i = inizio; i < fine; i++){
		
		if(i < numeroElementi){
			
			
			
			const figlio = document.createElement("div");
			figlio.setAttribute("id","divFiglio"+i);
			
			const img = createImg(contenuti[i].immagine,"immagine"+i, 400,400);
			figlio.appendChild(img);
			
			
			const divNome = document.createElement("div");
			divNome.setAttribute("id","divNome"+i);
			const h1 = createTitolo(contenuti[i].nome,"nome"+i);
			
			divNome.appendChild(h1);
			figlio.appendChild(divNome);
			
			var username = document.getElementById("username").value;
			
			var isPreferito = checkPreferiti(i,username, contenuti[i].nome, figlio);

			
			
			divPadre.appendChild(figlio);
		}
	}
	console.log(divPadre);
	
}


function checkPreferiti(i,username, nome,figlio){
	const formData = new FormData();
	formData.append("nome",nome);
	formData.append("username",username);
	fetch("http://localhost/hotel/checkPreferiti.php", {
					method: 'post',
					body:formData,
					}).then(function(response) {
							if (response.status >= 200 && response.status < 300) {
								return response.json();
							}
							throw new Error(response.statusText)
						})
						.then(function(response) {
							if(response.isPresent == 'true'){
								createButtonRimuoviPreferiti(i,username,nome,figlio);
							}
							else if(response.isPresent == 'false'){
								//preferiti
								createButtonPreferiti(i,username,nome,figlio);
							}
							else{
								viewError("Si e' verificato un errore, riprova piu' tardi.");
							}
						});
}

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



function createButtonPreferiti(i,username,nome,figlio){
	const button = document.createElement("button");
	button.setAttribute("id","preferiti"+i);
	button.innerHTML="Preferiti";
	button.addEventListener("click", event => {
				const formData = new FormData();
				formData.append("nome",nome);
				
				formData.append("username",username);
						
				fetch("http://localhost/hotel/addPreferiti.php", {
					method: 'post',
					body:formData,
					}).then(function(response) {
							if (response.status >= 200 && response.status < 300) {
								return response.json();
							}
							throw new Error(response.statusText)
						})
						.then(function(response) {
							if(response.ok){
								button.remove();
								createButtonRimuoviPreferiti(i,username,nome,figlio);
							}
							else if(response.notOk){
								viewError("Si e' verificato un errore, riprova piu' tardi.");
								console.log(response.notOk);
							}
							else{
								viewError("Si e' verificato un errore, riprova piu' tardi.");
							}
						});
				
			});
	figlio.appendChild(button);
}


function createButtonRimuoviPreferiti(i,username,nome,figlio){
	
	const buttonRemovePreferiti = document.createElement("button");
		buttonRemovePreferiti.innerHTML = "Rimuovi";
		buttonRemovePreferiti.setAttribute("id","rimuoviPreferito"+i);
		buttonRemovePreferiti.addEventListener("click", event=>{
			const formData = new FormData();
			formData.append("nome",nome);
			formData.append("username",username);
			fetch("http://localhost/hotel/removePreferiti.php", {
					method: 'post',
					body:formData,
					}).then(function(response) {
							if (response.status >= 200 && response.status < 300) {
								return response.json();
							}
							throw new Error(response.statusText)
						})
						.then(function(response) {
							if(response.ok){
								buttonRemovePreferiti.classList.add("hidden");
								buttonRemovePreferiti.remove();
								
								createButtonPreferiti(i,username,nome,figlio);
							}
							else if(response.notOk){
								viewError("Si e' verificato un errore, riprova piu' tardi.");
								console.log(response.notOk);
							}
							else{
								viewError("Si e' verificato un errore, riprova piu' tardi.");
							}
						});
	});
	figlio.appendChild(buttonRemovePreferiti);
}



function createTitolo(testo,id){
	const h1 = document.createElement("h1");
	h1.innerHTML = testo;

	h1.setAttribute("id", id);
	
	return h1;
	
}

function createImg(src,id,width,height){
	const img = document.createElement("img");
	img.setAttribute("src",src);
	img.setAttribute("height",height);
	img.setAttribute("width",width);
	img.setAttribute("id", id);
	
	return img;
}



function viewError(message){
	const aler = document.getElementById("alert");
	aler.classList.add("alert-danger");
	aler.classList.remove("alert-success");
	aler.classList.remove("hidden");
	aler.innerHTML = message;
}


function importContent(){

	fetch("http://localhost/hotel/home.php", {
	method: 'get', 
	}).then(function(response) {
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			}
			throw new Error(response.statusText)
		})
		.then(function(response) {

			const contenuti = response;
			createPadri(contenuti);
		});
}


importContent();











//inizializzazione
const section_meteo = document.getElementById("sectionMeteo");
const section_covid = document.getElementById("sectionCovid");


//settings
const apiCovidKey = "217d94abcdmsh7f937b1ced12479p1f40a9jsn1071e498a32a";
const apiCovidHost = "covid-193.p.rapidapi.com";




//integrazione api meteo no-auth
const searchBarMeteo = document.getElementById("searchBarMeteo");
const buttonMeteo = document.getElementById("buttonMeteo");

buttonMeteo.addEventListener("click", event =>{
	meteoApi();
});

searchBarMeteo.addEventListener("keyup", event =>{
	if(searchBarMeteo.value==null || searchBarMeteo.value ==""){
		cancellaMeteo();
	}
});


function meteoApi(){
	var location = searchBarMeteo.value.toLowerCase();
	fetch('https://goweather.herokuapp.com/weather/'+location,{
		method:'get'
	}).then(onSuccess,onFail);
}

//success e fail api meteo
function onSuccess(response) {
	response.json().then(creaElementiMeteo);
}
function onFail(response) {
	console.log("failure");
}


function creaElementiMeteo(json){
	
	//cancelliamo gli elementi precedenti
	cancellaMeteo();
	
	//creiamo i nuovi elementi
	var meteo = document.createElement("div");
	meteo.setAttribute("id","meteo");
	section_meteo.appendChild(meteo);
	
	var description = json.description;
	var temperature =  json.temperature;
	var h1 = document.createElement("h1");
	var h2 = document.createElement("h2");
	h1.setAttribute("id","descrizioneMeteo");
	h2.setAttribute("id","temperaturaMeteo");
	h1.innerHTML = description;
	h2.innerHTML = temperature;
	meteo.appendChild(h1);
	meteo.appendChild(h2);
}

function cancellaMeteo(){
	var div = document.getElementById("meteo");
	
	if(div!=null){
		div.remove();
	}
}



//integrazione api con api-key


const buttonCovid = document.getElementById("buttonCovid");

buttonCovid.addEventListener("click", event =>{
	covidApi();
});

function covidApi() {
	fetch("https://covid-193.p.rapidapi.com/statistics?country=malta", {
	 "method": "GET",
	 "headers": {
	  "x-rapidapi-key": apiCovidKey,
	  "x-rapidapi-host": apiCovidHost
	 }
	}
	).then(covidSuccess,covidFail); 
}

function covidSuccess(response){
	response.json().then(creaElementiCovid);
}


function covidFail(){
	console.log("failure");
}

function creaElementiCovid(json){
	eliminaElementiCovid();
	var div = document.createElement("div");
	div.setAttribute("id","divCovid");
	div.classList.add("boxCovid");
	
	//casi attivi
	var casiAttiviText = document.createElement("h1");
	casiAttiviText.innerHTML = "Casi attivi: ";
	var casiAttiviValue = document.createElement("h2");
	casiAttiviValue.innerHTML = json.response[0].cases.active;
	div.appendChild(casiAttiviText);
	div.appendChild(casiAttiviValue);
	
	
	//nuovi casi
	var nuoviCasiText = document.createElement("h1");
	nuoviCasiText.innerHTML = "Nuovi casi: ";
	var nuoviCasiValue = document.createElement("h2");
	nuoviCasiValue.innerHTML = json.response[0].cases.new;
	div.appendChild(nuoviCasiText);
	div.appendChild(nuoviCasiValue);
	
	
	//ricoverati
	var ricoveratiText = document.createElement("h1");
	ricoveratiText.innerHTML = "Ricoverati: ";
	var ricoveratiValue = document.createElement("h2");
	ricoveratiValue.innerHTML = json.response[0].cases.recovered;
	div.appendChild(ricoveratiText);
	div.appendChild(ricoveratiValue);
	
	//totale
	var totaleText = document.createElement("h1");
	totaleText.innerHTML = "Totale casi: ";
	var totaleValue = document.createElement("h2");
	totaleValue.innerHTML = json.response[0].cases.total;
	div.appendChild(totaleText);
	div.appendChild(totaleValue);
	
	section_covid.appendChild(div);
}


function eliminaElementiCovid(){
	var div = document.getElementById("divCovid");
	if(div!=null){
		div.remove();
	}
}






function search(){
	const searchBar = document.getElementById("searchBar");
	
	searchBar.addEventListener("keyup", event =>{
		
		
		if(searchBar.value.length > 4){
			const formData = new FormData();
			formData.append("nome",searchBar.value.toUpperCase());
			fetch("http://localhost/hotel/search.php", {
					method: 'post',
					body:formData,
					}).then(function(response) {
							if (response.status >= 200 && response.status < 300) {
								return response.json();
							}
							throw new Error(response.statusText)
						})
						.then(function(response) {
							if(response.length>0){
								removePadri(padriNecessari);
								createPadri(response);
							}
							else{
								viewError("Questo elemento non e' presente");
							}
						});
		}
		
		else if(searchBar.value.length == 0){
			removePadri(padriNecessari);
			importContent();
		}
	});
}

search();


function removePadri(padriNecessari){
	for(let i=0;i<padriNecessari;i++){
		padre = document.getElementById("contenitorePadre"+i);
		padre.remove();
	}
}





