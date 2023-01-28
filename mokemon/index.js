const express = require("express")//permite utilizar libreriar instaladas con npm

const app = express()//aplicacion que representa el servidor la cual resive y responde las peticiones de los clientes, esto genera una copia del servidor utilizado

const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }
}
    
app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    res.setHeader("Access-Control-Allow-Origin", "*")//es la forma de autorizar para que no de error en la consola y me permita pasar, la * es el comodin que dice permite todo
    res.send(id)//es la respuesta al cliente
}) //arrow function que da las pautas como resive las peticiones

app.listen(8080, () => {
    console.log("El servidor ya arranco")
})//es el puerto que mantiene pendiete para trabajar con el cliente

/*
Nuestro Código está hecho de la siguiente manera:

Importamos ExpressJS para usarlo en nuestro Proyecto
Creamos una Aplicación con ExpressJS
Le decimos a Express que cuando la URL raíz reciba una petición, responda “Hola”
Le decimos que escuche continuamente en el puerto 8080 las peticiones de los clientes para que todo el tiempo pueda responderles
*/

/*
GET: El verbo GET se utiliza para la obtención de datos. Es el más utilizado. Siempre que ingresas a una página web, la solicitud se realiza por GET.
POST: Utilizarás POST para la creación de datos o registros. POST tiene la particularidad de que codifica la información para el envío de datos secretos.
PUT: PUT se usa para la actualización de datos, para indicarle al servidor de la actualización completa de un registro.
PATCH: PATCH es muy similar a PUT, con la diferencia de que suele implementar para actualizar un solo dato de un registro.
DELETE: Así como puedes obtener, crear y actualizar información, DELETE lo utilizarás para el borrado de datos.
*/