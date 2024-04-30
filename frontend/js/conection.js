const contenedor = document.getElementById('root');


const obtenerDatos = async (url) => {
    var respuesta = await fetch(url);
    var datos = await respuesta.text();

    const card = document.createElement("div");
    card.className = "card center";
    card.innerHTML = datos;

    contenedor.appendChild(card);
}

const obtenerDatosJSON = async (url) => {
    var respuesta = await fetch(url);
    var datos = await respuesta.json();

    const card = document.createElement("div");
    card.className = "card center";
    card.innerHTML = datos.mensaje;

    contenedor.appendChild(card);
}

obtenerDatos("http://localhost:3000");
obtenerDatos("http://localhost:3000/suma/1/2");
obtenerDatosJSON("http://localhost:3000/json");

//Hacer un formulario para la suma, realizar la peticion http y mostrar un alert rojo con el error y mostrar verde si la respuesta es correcta