const header = document.querySelector("header");
const section = document.querySelector(".lista-proyectos");

const requestURL = "./proyectos.json";

const request = new XMLHttpRequest;

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
    const proyectos = request.response;
    showProyectos(proyectos);
  };

  function showProyectos(jsonObj) {
    const listaProyectos = jsonObj["proyectos"];
  
    for (var i = 0; i < listaProyectos.length; i++) {

      // Creando los elementos
        const paquete = document.createElement("div");
        const link = document.createElement("a");
        const imagen = document.createElement("div");
        const descripcion = document.createElement("p");
        link.href = listaProyectos[i].link;
        imagen.style.backgroundImage = listaProyectos[i].enlaceImagen;
        descripcion.textContent = listaProyectos[i].descripcion;

        // Añadiendo los estilos
        paquete.classList.add("paquete");
        link.classList.add("enlace-pro")
        imagen.classList.add("div-pro")

        // Agragando el contenido al HTML
        link.appendChild(imagen);
        paquete.appendChild(link);
        paquete.appendChild(descripcion);
        section.appendChild(paquete);
  
    }
  }