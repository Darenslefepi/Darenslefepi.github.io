const express = require("express")//permite utilizar libreriar instaladas con npm
const cors = require("cors")//es la forma de inportar la libreria.....
const app = express()//aplicacion que representa el servidor la cual resive y responde las peticiones de los clientes, esto genera una copia del servidor utilizado
app.use(express.static("public"))//para conetar al wifi y ver en cualquiera que este conetado a la misma red
app.use(cors())
app.use(express.json())//habilita todos los errores de eticion relacionados con coors y se habilito resivir notificaciones post
const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }
    asignarMokemon(mokemon) {
        this.mokemon = mokemon 
    }
    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
    }
    asignarAtaques(ataques) {
        this.ataques = ataques
    }
}

class Mokemon {
    constructor(nombre) {
        this.nombre = nombre
    }
}
    
app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    res.setHeader("Access-Control-Allow-Origin", "*")//es la forma de autorizar para que no de error en la consola y me permita pasar, la * es el comodin que dice permite todo
    res.send(id)//es la respuesta al cliente
}) //arrow function que da las pautas como resive las peticiones

app.post("/mokemon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokemon || ""//esto es por si no sale nada llegue una cadena vacia y no se quede buscando
    const mokemon = new Mokemon(nombre)
    //lo siguenete es para validadr si existe un usuario, si existe lo envia si 0 o + no es asi envia -1
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    if(jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMokemon(mokemon)
    }
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mokemon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    if(jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }
    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id) 

    res.send({
        enemigos
    })
})

app.post("/mokemon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    if(jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }
    res.end()
})
//esta linea de codigo es para recivir la informacion de los ataques del enemigo
app.get("/mokemon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
        ataques: jugador.ataques || []
    })
}) 

app.listen(8080, () => {
    console.log("Servidor Funcionando")
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