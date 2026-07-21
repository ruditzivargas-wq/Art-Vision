/*==================================
        CARRUSEL AUTOMÁTICO
==================================*/

const slides = document.querySelectorAll(".slide");

let indice = 0;

function mostrarSlide() {

    slides.forEach(slide => {

        slide.classList.remove("activo");

    });

    indice++;

    if (indice > slides.length - 1) {

        indice = 0;

    }

    slides[indice].classList.add("activo");

}

setInterval(mostrarSlide, 4000);

/*==================================
      BOTONES DEL CARRITO
==================================*/

const botones = document.querySelectorAll(".producto button");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        alert("Producto agregado al carrito.");

    });

});
/*==================================
        BOTÓN ARRIBA
==================================*/

const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        btnArriba.style.display = "block";

    }else{

        btnArriba.style.display = "none";

    }

});

btnArriba.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==================================
      CONTADOR DEL CARRITO
==================================*/

let carrito = 0;

botones.forEach(boton=>{

    boton.addEventListener("click",()=>{

        carrito++;

        alert("Productos en el carrito: " + carrito);

    });

});