function showStaticContent() {
	Generarcabecera();
	Generarpie();	
	setNotificationPanelEvents();
	setMagicEvents();
	manageUserevents();
	return 0;
}

function manageUserevents(){
	document.getElementById("doInyection").addEventListener("click", inyectartexto1);
	return 0;
}


function cleanManageUserevents(){
	document.getElementById("doInyection").removeEventListener("click");
	return 0;
}

function setMagicEvents() {
	var mtg = document.getElementById("magic");
	if( mtg ) {
		mtg.addEventListener("click", clickmagic);
	}

}

function clickmagic() {
	document.getElementById("magic").classList.toggle("show");

}	

function setNotificationPanelEvents() {
	var rs = document.getElementById("rdssociales");
	if( rs ) {
		rs.addEventListener("mouseover", showNotificationPanel);
		rs.addEventListener("mouseout", hideNotificationPanel);	
	}
}


function showNotificationPanel() {
	var a = document.getElementById("notificationpanel");
    a.style.display = 'block';   
}

function hideNotificationPanel() {
	var a = document.getElementById("notificationpanel");
    a.style.display = 'none';   
} 



function Generarcabecera() {

	var cab = document.getElementById("cabecera");
	if ( cab ) {
		var sh2 = document.createElement("h2");
		var simg = document.createElement("img");
		sh2.innerHTML = "MAGIC EN EL GARAJE";
		simg.className="image1";
		simg.src = "../image/Logo Magic.jpg";
		cab.appendChild(sh2);
		cab.appendChild(simg);
	}

}	

function Generarpie() {
	var pie = document.getElementById("pie");

	if ( pie ) {
		var simg = document.createElement("img");
		var sa = document.createElement("a");
		sa.href = "../index.html";
		sa.innerHTML = "VOLVER A INICIO";
		simg.className="image2";
		simg.src = "../image/MTGlogoinf.jpg";
		pie.appendChild(simg);
		pie.appendChild(sa);
	}


}

function inyectartexto1() {

	var txt1 = document.getElementById("texto1");
	if ( txt1 ) {
		var sh2 = document.createElement("h2");
		var simg = document.createElement("img");
		sh2.innerHTML = "MAGIC EN EL GARAJE";
		simg.className="image1";
		cab.appendChild(sh2);
		cab.appendChild(simg);
	}

}

function Inyectartexto2() {

	var txt2 = document.getElementById("texto2");
	if ( txt2 ) {
		var sh2 = document.createElement("h2");
		var simg = document.createElement("img");
		sh2.innerHTML = "MAGIC EN EL GARAJE";
		simg.className="image1";
		cab.appendChild(sh2);
		cab.appendChild(simg);
	}

}


function Redessociales() {
	alert("FACEBOOK TWITTER INSTAGRAM SNAPCHAT");
}

function Buscador() {
	alert("Introduce palabra o texto a buscar");
}
  
function Sobremi() {
	alert("Soy el más juapo del barrio");
} 

(function(){
	window.addEventListener("load", showStaticContent);
})();


