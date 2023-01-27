const seccionSelecionarAtaque = document.getElementById("Escoje_ataque")
const seccionreniciar = document.getElementById("Reiniciar")
const botonMascotaJugador = document.getElementById("boton_mascota")
const botonReiniciar = document.getElementById("boton_reiniciar")

const seccionMascotaJugador = document.getElementById("Escoje_mascota")
const spanseleccionJugador = document.getElementById("mascota-jugador")

const spanSeleccionEnemigo = document.getElementById("mascota-enemiga")

const spanVidajugadormascota = document.getElementById("vidas-jugador")
const spanVidaEnemigomascota = document.getElementById("vidas-enemiga")

const mensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedor_tarjetas")
const contenedorAtaques = document.getElementById("contenedor-ataques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let InputNicodemo
let InputFurebal
let InputNiqertan
let InputDublai
let InputCalcifor
let InputBains
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokemon
let ataqueMokeponesEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")//permite dibujar en 2d dentro del canvas
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './img/caminoMokemon.jpg'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 1100
    if(anchoDelMapa > anchoMaximoDelMapa) {
        anchoDelMapa = anchoMaximoDelMapa - 20
    }
alturaQueBuscamos = anchoDelMapa * 600 / 1100

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, foto, vida, fotomapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotomapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokemon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let nicodemo = new Mokepon('Nicodemo', './img/descarga (5).png', 5, './img/descarga (3).png')
let furebal = new Mokepon('Furebal', './img/descarga (6).png', 5, './img/descarga (11).png')
let niqertan = new Mokepon('Niqertan', './img/descarga (7).png', 5, './img/descarga (4).png')
let dublai = new Mokepon('Dublai', './img/descarga (8).png', 5, './img/descarga (12).png')
let calcifor = new Mokepon('Calcifor', './img/descarga (9).png', 5, './img/descarga.png')
let bains = new Mokepon('Bains', './img/descarga (10).png', 5, './img/descarga (2).png')

let nicodemoEnemigo = new Mokepon('Nicodemo', './img/descarga (5).png', 5, './img/descarga (3).png')
let furebalEnemigo = new Mokepon('Furebal', './img/descarga (6).png', 5, './img/descarga (11).png')
let niqertanEnemigo = new Mokepon('Niqertan', './img/descarga (7).png', 5, './img/descarga (4).png')
let dublaiEnemigo = new Mokepon('Dublai', './img/descarga (8).png', 5, './img/descarga (12).png')
let calciforEnemigo = new Mokepon('Calcifor', './img/descarga (9).png', 5, './img/descarga.png')
let bainsEnemigo = new Mokepon('Bains', './img/descarga (10).png', 5, './img/descarga (2).png')

nicodemo.ataques.push(
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

nicodemoEnemigo.ataques.push(
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

furebal.ataques.push(
    { nombre: "🌱", id:"boton_tierra"},
    { nombre: "🌱", id:"boton_tierra"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

furebalEnemigo.ataques.push(
    { nombre: "🌱", id:"boton_tierra"},
    { nombre: "🌱", id:"boton_tierra"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

niqertan.ataques.push(
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

niqertanEnemigo.ataques.push(
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

dublai.ataques.push(
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

dublaiEnemigo.ataques.push(
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

calcifor.ataques.push(
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

calciforEnemigo.ataques.push(
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

bains.ataques.push(
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

bainsEnemigo.ataques.push(
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "💧", id:"boton_agua"},
    { nombre: "🔥", id:"boton_fuego"},
    { nombre: "🌱", id:"boton_tierra"},
)

mokepones.push(nicodemo, furebal, niqertan, dublai, calcifor, bains)

function iniciarJuego() {
    seccionSelecionarAtaque.style.display = "none"
    seccionreniciar.style.display = "none"
    sectionVerMapa.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id="${mokepon.nombre}" />
        <label class="css_mokemon" for="${mokepon.nombre}">
            <p>${mokepon.nombre}</p>
            <img src="${mokepon.foto}" alt="${mokepon.nombre}">
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    InputNicodemo = document.getElementById("Nicodemo")
    InputFurebal = document.getElementById("Furebal")
    InputNiqertan = document.getElementById("Niqertan")
    InputDublai = document.getElementById("Dublai")
    InputCalcifor = document.getElementById("Calcifor")
    InputBains = document.getElementById("Bains")

    })

    botonMascotaJugador.addEventListener("click", selecionarJugadorMascota)
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function selecionarJugadorMascota() {
    seccionMascotaJugador.style.display = "none"

    if(InputNicodemo.checked) {
        spanseleccionJugador.innerHTML = InputNicodemo.id
        mascotaJugador = InputNicodemo.id
    } else if(InputFurebal.checked) {
        spanseleccionJugador.innerHTML = InputFurebal.id
        mascotaJugador = InputFurebal.id
    } else if(InputNiqertan.checked) {
        spanseleccionJugador.innerHTML = InputNiqertan.id
        mascotaJugador = InputNiqertan.id
    } else if(InputDublai.checked) {
        spanseleccionJugador.innerHTML = InputDublai.id
        mascotaJugador = InputDublai.id
    } else if(InputCalcifor.checked) {
        spanseleccionJugador.innerHTML = InputCalcifor.id
        mascotaJugador = InputCalcifor.id
    } else if(InputBains.checked) {
        spanseleccionJugador.innerHTML = InputBains.id
        mascotaJugador = InputBains.id
    } else {
        alert("Seleciona Una Mascota")
    } 
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
}

function extraerAtaques(mascotaJugador) {
    let atakes
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            atakes = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(atakes)
}

function mostrarAtaques(atakes) {
    atakes.forEach((ataques) => {
        ataquesMokemon = `
        <button id="${ataques.id}" class="boto_de_ataque BAtaque">${ataques.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokemon
})
        botonFuego = document.getElementById("boton_fuego")
        botonAgua = document.getElementById("boton_agua")
        botonTierra = document.getElementById("boton_tierra")
        botones = document.querySelectorAll(".BAtaque")//sirve para selecionar todo lo que en el ejemplo tenga la class .BAtaque
       /*
        botonFuego.addEventListener("click", ataqueFuego)
        botonAgua.addEventListener("click", ataqueAgua)
        botonTierra.addEventListener("click", ataqueTierra)
        */
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {//la e significa a que elemento le da click y me lo dice y donde esta con target y texcontec
        if (e.target.textContent === "🔥") {
            ataqueJugador.push("🔥")
            console.log(ataqueJugador)
            boton.style.background = "#112f58"
            boton.disabled = true
        } else if (e.target.textContent === "💧") {
            ataqueJugador.push("💧")
            console.log(ataqueJugador)
            boton.style.background = "#112f58"
            boton.disabled = true
        } else {
            ataqueJugador.push("🌱")
            console.log(ataqueJugador)
            boton.style.background = "#112f58"
            boton.disabled = true
        }
        selecionarAtaqueEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo(enemigo) {
    //let mascotaAleatoria = aleatorio(0, mokepones.length -1) 
    spanSeleccionEnemigo.innerHTML = enemigo.nombre//mokepones[mascotaAleatoria].nombre
    
    ataqueMokeponesEnemigo = enemigo.ataques//mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function selecionarAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataqueMokeponesEnemigo.length -1)
        if(ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("🔥")
    } else if(ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("💧")
    } else {
        ataqueEnemigo.push("🌱")
    } 
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === ataqueMokeponesEnemigo.length) {
        combate()
    }
}

function indexAmboxOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
        indexAmboxOponentes(index, index)
        crearMensaje("😒🥱 Empate 😒🥱")
    }   else if(ataqueJugador[index] === "🔥" && ataqueEnemigo[index] === "🌱" || ataqueJugador[index] === "💧" && ataqueEnemigo[index] === "🔥" || ataqueJugador[index] === "🌱" && ataqueEnemigo[index] === "💧") {
        indexAmboxOponentes(index, index)
        crearMensaje("🎉🥳 Ganaste 🎉🥳")
        victoriasJugador++
        spanVidajugadormascota.innerHTML = victoriasJugador 
    } else {
        indexAmboxOponentes(index, index)
        crearMensaje("😢😪 Perdiste 😢😪")
        victoriasEnemigo++
        spanVidaEnemigomascota.innerHTML = victoriasEnemigo
    }       
    revisarVidas()
}
}

function revisarVidas() {
    if(victoriasJugador === victoriasEnemigo) {
        crearMensajefinal("🤕😱 Estas en una Batalla de 1000 Dias 🤕😱")
    } else if(victoriasJugador > victoriasEnemigo) {
        crearMensajefinal("🤩😛 Ganaste y liberaste Lunacia 🤩😛")
    } else {
        crearMensajefinal("😫😿 Perdiste y Lunacia Fue Esclavisada 😫😿")
    }
}

function crearMensaje(gana) {
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    mensajes.innerHTML = gana
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    /* let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu atacas con " + ataqueJugador + " y tu contrincante con " + ataqueEnemigo + ", por lo que " +  gana + "." */
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajefinal(resultadoFinal) {
    mensajes.innerHTML = resultadoFinal
    seccionreniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
   mascotaJugadorObjeto.pintarMokemon()
   nicodemoEnemigo.pintarMokemon()
   furebalEnemigo.pintarMokemon()
   niqertanEnemigo.pintarMokemon()
   dublaiEnemigo.pintarMokemon()
   calciforEnemigo.pintarMokemon()
   bainsEnemigo.pintarMokemon()
   if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
    revisarColision(nicodemoEnemigo)
    revisarColision(furebalEnemigo)
    revisarColision(niqertanEnemigo)
    revisarColision(dublaiEnemigo)
    revisarColision(calciforEnemigo)
    revisarColision(bainsEnemigo)
   }
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = - 5
    //pintarCanvas()
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = - 5
   // pintarCanvas()
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
    //pintarCanvas()
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
   // pintarCanvas()
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)//el 50 son milisegundo para dibujar cada ves que de clic
    //let imagenDeNicodemo = new Image()
    //imagenDeNicodemo.src = nicodemo.foto(asi se inserta un dibujo)
    //fillRect(5,15,20,40), crea un rectangulo dentro del canvas, y los numeros son 5=x, 15=y, 20=ancho, 40=alto.
    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)//paa que se frene el intervalo y no produca mas coliciones
    sectionVerMapa.style.display = "none"
    seccionSelecionarAtaque.style.display = "flex"
    seleccionarMascotaEnemigo(enemigo)  
    
}

window.addEventListener('load', iniciarJuego)