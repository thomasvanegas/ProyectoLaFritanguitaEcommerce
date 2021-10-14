
// DECLARACIÓN DE VARIABLES

let mas_1, mas_2, mas_3, mas_4, mas_5, menos_1, menos_2, menos_3, menos_4, menos_5, numero_1, numero_2, numero_3, numero_4, numero_5, a;

// INICIALIZO LAS VARIBALES MAS_N MEDIANTE EL MANEJO DEL DOM

mas_1 = document.querySelector(".mas-1");
mas_2 = document.querySelector(".mas-2");
mas_3 = document.querySelector(".mas-3");
mas_4 = document.querySelector(".mas-4");
mas_5 = document.querySelector(".mas-5");

menos_1 = document.querySelector(".menos-1");
menos_2 = document.querySelector(".menos-2");
menos_3 = document.querySelector(".menos-3");
menos_4 = document.querySelector(".menos-4");
menos_5 = document.querySelector(".menos-5");

numero_1 = document.querySelector(".numero-1");
numero_2 = document.querySelector(".numero-2");
numero_3 = document.querySelector(".numero-3");
numero_4 = document.querySelector(".numero-4");
numero_5 = document.querySelector(".numero-5");

a = 1;

// EJECUCIÓN DEL CÓDIGO

// PRODUCTO N°1

mas_1.addEventListener("click", () => {

    a++;

    a = (a < 10) ? "0" + a : a;

    numero_1.innerText = a;

    //console.log(a);

})

menos_1.addEventListener("click", () => {

    if (a > 1) {

        a--;

    } else{

        a = 0;

    }

    a = (a < 10) ? "0" + a : a;

    numero_1.innerText = a;

})

// PRODUCTO N°2

mas_2.addEventListener("click", () => {

    a++;

    a = (a < 10) ? "0" + a : a;

    numero_2.innerText = a;

    //console.log(a);

})

menos_2.addEventListener("click", () => {

    if (a > 1) {

        a--;

    } else{

        a = 0;

    }

    a = (a < 10) ? "0" + a : a;

    numero_2.innerText = a;

})

// PRODUCTO N°3

mas_3.addEventListener("click", () => {

    a++;

    a = (a < 10) ? "0" + a : a;

    numero_3.innerText = a;

    //console.log(a);

})

menos_3.addEventListener("click", () => {

    if (a > 1) {

        a--;

    } else{

        a = 0;

    }

    a = (a < 10) ? "0" + a : a;

    numero_3.innerText = a;

})

// PRODUCTO N°4

mas_4.addEventListener("click", () => {

    a++;

    a = (a < 10) ? "0" + a : a;

    numero_4.innerText = a;

    //console.log(a);

})

menos_4.addEventListener("click", () => {

    if (a > 1) {

        a--;

    } else{

        a = 0;

    }

    a = (a < 10) ? "0" + a : a;

    numero_4.innerText = a;

})

// PRODUCTO N°5

mas_5.addEventListener("click", () => {

    a++;

    a = (a < 10) ? "0" + a : a;

    numero_5.innerText = a;

    //console.log(a);

})

menos_5.addEventListener("click", () => {

    if (a > 1) {

        a--;

    } else{

        a = 0;

    }

    a = (a < 10) ? "0" + a : a;

    numero_5.innerText = a;

})