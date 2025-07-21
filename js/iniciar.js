document.addEventListener('DOMContentLoaded', function () { 
    
    // Carrusel
    let elemcr = document.querySelector('.carousel');
    let optioncr={fullWidth: true, indicators: false, padding: 40, dist: -130 };
    //Internamente convierte el valor de elemcr a un valor lógico (esto se llama truthy o falsy).
    //Si elemcr contiene un elemento HTML, es un valor truthy, entonces el if se ejecuta.
    //Si elemcr es null (porque no encontró nada), es un valor falsy entonces el if no se ejecuta.
    //Podríamos que sería un equivalente de usar elemcr !== null
    if (elemcr) {
        let instancecr = M.Carousel.init(elemcr,optioncr);
        if(instancecr){
        setInterval(function () {
            instancecr.next();
        }, 2500);
        }
    };
  

    // Dropdown    
    let elemdd = document.querySelectorAll('.dropdown-trigger');
    let optiondd = { alignment: 'left',hover: false, coverTrigger: false, constrainWidth: false };
    let instancesdd = M.Dropdown.init(elemdd,optiondd);


    // Collapsible
    let elemclp = document.querySelectorAll('.collapsible.popout');
    let optionclp ={accordion: true};
    let instancesclp = M.Collapsible.init(elemclp, optionclp);

    //para el menú hamburguesa usaremos el Collapsible con acordión
    let elemAcordionMenu = document.querySelectorAll('.collapsible.accordion');
    let optionAcordionMenu={ accordion: true };
    let instanciaAcordionMenu = M.Collapsible.init(elemAcordionMenu, optionAcordionMenu);


    let elemssn = document.querySelectorAll('.sidenav');
    let optionssn = {
        edge: 'left', // por defecto
        draggable: true // por defecto también
        };
    let instancesns = M.Sidenav.init(elemssn, optionssn);

    let elems = document.querySelectorAll('.materialboxed');
    let optionsImgBox ={inDuration:200};
    let instances = M.Materialbox.init(elems, optionsImgBox);


    // titulo que se debe desplazar   
    let tituloDesplazar = " ¡¡¡Gracias por tu tiempo!!! ";
    // funcion que hace que el titulo se mueva
    function moverTitulo() {
    // quita la primer letra y la pone al final
        let primeraLetra = tituloDesplazar.charAt(0);
        let resto = tituloDesplazar.substring(1);
        tituloDesplazar = resto + primeraLetra;
        //cambia el titulo del documento
        document.title = tituloDesplazar;
    }
    // cada 150 milisegundos llama a la funcion moverTitulo
    setInterval(moverTitulo, 150);

});

//Se implementa esta función debido a que el efecto de luz detrás de los polos casi siempre funciona pero si demora
//en redimensionar el tamaño de todos los elementos no carga bien, con esto le vamos a decir al navegador
//que nos calcule nuestro elemento, previamente detenido, pero... aprovechamos que se enteré de toda su dimensión
//como página para que cargué bien

/*

function reiniciarLayout(selector){
    document.querySelectorAll(selector).forEach(elemento=>{
        elemento.style.animation="none";   // paramos los efectos
        void elemento.offsetHeight;        // que se enteré de su tamaño
        elemento.style.animation="";       //ahora esta activo para efectos que jale lo que tenga disponible en este caso .obsequio
});
}

window.addEventListener('load', () => {
    setTimeout(() => {
        reiniciarLayout('.obsequio');
    }, 200);
});

*/