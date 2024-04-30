document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form");
    const numero1Input = document.getElementById("num1");
    const numero2Input = document.getElementById("num2");
    const mensaje = document.getElementById("mensaje");

    const eventoForm = async (evento) => {
        evento.preventDefault();
        var numero1 = numero1Input.value;
        var numero2 = numero2Input.value;
        var objetoJson = { numero1, numero2 };

        const cabeceras = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objetoJson)
        }

        const datosSinForm = await fetch(`http://localhost:3000/sumar`, cabeceras);

        const respuesta = await datosSinForm.text();

        const card = document.createElement('div')
        card.className = 'card center'

        if (datosSinForm.status == 200) {
            card.style.color = 'green';
        } else {
            card.style.color = 'red';
        }

        card.innerHTML = respuesta
        formulario.appendChild(card)
    }

    formulario.addEventListener("submit", eventoForm);
});