
function guardar(){
var usuarios = JSON.parse(localStorage.getItem('usuarios'));
if (!usuarios) {
	usuarios = new Array();
}
var usuario = new Array();
if (typeof(Storage) !== "undefined") {
	usuario[0] = document.getElementById('nombre').value;
	usuario[1] = document.getElementById('apellido').value;
	usuario[2] = document.getElementById('correo').value;
	usuario[3] = document.getElementById('contrasenna').value;
	usuarios.push(usuario);
	localStorage.setItem("usuarios", JSON.stringify(usuarios));
	}
}

function check() {
var usuarios = 	JSON.parse(localStorage.getItem('usuarios'));

if (!usuarios) {s
	alert("No hay usuarios")
}
	var corr = document.getElementById('inputEmail').value;
    var cont = document.getElementById('inputPassword').value;
	for (var i = usuarios.length - 1; i >= 0; i--) {
	if (usuarios[i][2] == corr && usuarios[i][3] == cont) {
		window.location.replace("post.html");
	}
  }         
}

function post(){
var post = JSON.parse(localStorage.getItem('post'));
if (!post) {
	post = new Array();
}
var postT = new Array();
if (typeof(Storage) !== "undefined") {
	postT[0] = document.getElementById("postText").value;
	post.push(postT);
	localStorage.setItem("post", JSON.stringify(post));
	}

	for (var i = post.length - 1; i >= 0; i--) {
		var publicacion=document.createElement("div");
		publicacion.innerHTML= "<textarea disabled=\"true\"">+post[i][0]+"</textarea> <button class=\"btn btn-info\" onclick=>Cambiar</button>";
	}
}
