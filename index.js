const express = require("express"); // Montar el servidor
const cors = require("cors"); // Conectar los clientes al servidor

const app = express();

app.use(cors());  // Para recibir datos de ips distintas a localhost 

app.use(express.json());  // Permite ver los datos JSON

app.listen(3000, () => console.log("Servidor creado en el puerto 3000"));

/**
 * * GET        LEER
 * * POST       ESCRIBIR
 * *PATCH       MODIFICAR ATRIBUTOS
 * *PUT         MODIFICAR EL REGISTRO
 * *DELETE      ELIMINAR
 **/

//app.get();


app.get("/", (req, res) => {
    res.send("<h1>Hola desde Node</h1>");
});

app.get("/json", (req, res) => {
    res.json({ mensaje: "Hola con JSON" });
});

app.get("/suma/:numero1/:numero2", (req, res) => {
    var numero1;
    var numero2;
    try {
        numero1 = parseFloat(req.params.numero1);
        numero2 = parseFloat(req.params.numero2);

        if (isNaN(numero1) || isNaN(numero2)) {
            res.status(500).send("Los datos ingresados no son validos");
        }
    } catch (error) {
        res.status(500).send("Los datos ingresados no son validos");
    }
    res.status(200).send(`La suma de ${numero1} + ${numero2} = ${numero1 + numero2}`);
});

app.get("/datos/:nombre/:edad", (req, res) => {
    var { nombre, edad } = req.params;
    const datosHtml = `
    <div>
        <h1>
            Hola ${nombre}</h1>
        <br/>
        <p>Tu edad es: ${edad}</p>
    </div>
    `;
    res.send(datosHtml);
});

app.get("/sumar/:numero3/:numero4", (req, res,) => {

    let { numero3, numero4 } = req.params;

    numero3 = parseFloat(numero3);
    numero4 = parseFloat(numero4);

    if (isNaN(numero3) || isNaN(numero4)) {
        res.status(500).send("Campos no validos para poder realizar la opereacion")
    } else {
        res.status(200).send(`${numero3} + ${numero4} = ${(numero3 + numero4)}`)
    }

});

let carrito = [];

const precios = {
    leche: 25,
    cereal: 50,
    agua: 13,
    galleta: 18,
    pan: 40
};

app.get("/agregar/:item", (req, res) => {
    const item = req.params.item;
    carrito.push(item);
    res.send(`Se ha agregado "${item}"  al carrito`);
});


//app.post();

app.post("/sumar", (req, res) => {
    let { numero1, numero2 } = req.body;
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        res.status(500).send("Campos no validos para poder realizar la operacion");
    } else {
        res.status(200).send(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    }
});

app.post("/calcular-compra", (req, res) => {
    let total = 0;
    carrito.forEach(item => {
        total += precios[item];
    });
    res.status(200).send(`El total de la compra es: $${total}`);
    carrito =[];
});
