const { response } = require("express");

function agregarItem() {
   const seleccion = document.getElementById('seleccion').value;
   fetch(`http://localhost:3000/agregar/${seleccion}`)
      .then(response => response.text())
      .then(data => {
         const carrito = document.getElementById('carrito');
         carrito.innerHTML += `<p>${data}</p>`;
      });
}

function calcularCompra() {
   fetch('http://localhost:3000/calcular-compra', {
      method: 'POST'
   })
      .then(response => response.text())
      .then(data => {
         alert(data);
         document.getElementById('carrito').innerHTML = ''
      });
} 
