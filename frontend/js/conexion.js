const formulario = document.querySelector('#form')

const recibirDatos = (evento) => {
    evento.preventDefault()

    const numero1 = parseFloat(document.getElementById('num1').value)
    const numero2 = parseFloat(document.getElementById('num2').value)
    procTDA(`http://localhost:3000/suma/${numero1}/${numero2}`)
}

const procTDA = async (url) => {
    var respuesta = await fetch(url)
    var datos = await respuesta.text()

    const card = document.createElement('div')
    card.className = 'card center'

    if (respuesta.status === 200) {
        card.style.color = 'green';
    } else {
        card.style.color = 'red';
    }

    card.innerHTML = datos
    formulario.appendChild(card)
}
formulario.addEventListener('submit', recibirDatos)

