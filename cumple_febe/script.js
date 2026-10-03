/* =========================
   ABRIR CARTA
========================= */

function abrirCarta() {

    const inicio = document.querySelector(".inicio");

    inicio.classList.add("desaparecer");


    setTimeout(() => {

        inicio.style.display = "none";

        const carta = document.getElementById("carta");

        carta.style.display = "block";

        carta.classList.add("aparecer");

    }, 500);

}


/* =========================
   PASAR DE LA CARTA A FOTOS
========================= */

function siguientePagina() {

    const carta = document.getElementById("carta");

    carta.classList.add("desaparecer");


    setTimeout(() => {

        carta.style.display = "none";


        const segunda =
            document.getElementById("segunda-pagina");

        segunda.style.display = "block";
segunda.classList.remove("desaparecer");
segunda.classList.add("pagina-suave");

    }, 500);

}


/* =========================
   PASAR DE FOTOS A MÚSICA
========================= */

function siguientePagina2() {

    const segunda =
        document.getElementById("segunda-pagina");

    segunda.classList.add("desaparecer");


    setTimeout(() => {

        segunda.style.display = "none";


        const tercera =
            document.getElementById("tercera-pagina");

        tercera.style.display = "block";
tercera.classList.remove("desaparecer");
tercera.classList.add("pagina-suave");

    }, 500);

}


/* =========================
   ABRIR FOTO GRANDE
========================= */

function abrirFoto(foto) {

    const visor =
        document.getElementById("visor");

    const fotoGrande =
        document.getElementById("foto-grande");


    fotoGrande.src = foto;

    visor.style.display = "flex";

}


/* =========================
   CERRAR FOTO
========================= */

function cerrarFoto() {

    document.getElementById("visor").style.display = "none";

}


/* =========================
   REPRODUCIR MÚSICA
========================= */

function reproducirMusica() {

    const musica =
        document.getElementById("musica");

    const boton =
        document.querySelector(".boton-musica");

    const disco =
        document.getElementById("disco");


    if (musica.paused) {

        musica.play();

        boton.textContent = "Ⅱ pausar";

        disco.style.animation =
            "girar 3s linear infinite";

    } else {

        musica.pause();

        boton.textContent = "▶ reproducir";

        disco.style.animation = "none";

    }

}


/* =========================
   RANITA SECRETA
========================= */

let clicsRanita = 0;


function secretoRanita() {

    clicsRanita++;


    if (clicsRanita === 5) {

        const mensaje =
            document.getElementById("mensaje-ranita");


        mensaje.style.display = "block";


        setTimeout(() => {

            mensaje.style.display = "none";

            clicsRanita = 0;

        }, 3000);

    }

}


/* =========================
   MOSTRAR SORPRESA
========================= */

function mostrarSorpresa() {

    const sorpresa =
        document.getElementById("sorpresa");

    const boton =
        document.querySelector(".boton-sorpresa");


    sorpresa.style.display = "block";

    boton.style.display = "none";


    crearLluvia();

}


/* =========================
   LLUVIA DE EMOJIS
========================= */

function crearLluvia() {

    const lluvia =
        document.getElementById("lluvia");


    const elementos = [
        "🌿",
        "🍃",
        "♡",
        "✿",
        "💚"
    ];


    for (let i = 0; i < 25; i++) {

        const particula =
            document.createElement("span");


        particula.classList.add("particula");


        particula.textContent =
            elementos[
                Math.floor(
                    Math.random() * elementos.length
                )
            ];


        particula.style.left =
            Math.random() * 100 + "%";


        particula.style.animationDelay =
            Math.random() * 1.5 + "s";


        particula.style.fontSize =
            15 + Math.random() * 15 + "px";


        lluvia.appendChild(particula);


        setTimeout(() => {

            particula.remove();

        }, 4500);

    }

}