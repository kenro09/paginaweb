
const form = document.getElementById("form");
const nombre= document.getElementById("nombre");
const correo= document.getElementById("correo");
const clave = document.getElementById("clave");
const clave2 = document.getElementById("confirmarclave");

form.addEventListener("submit", e =>{
e.preventDefault();
validarentradas();
});

function validarentradas() {
const nombrevalor = nombre.value.trim();
const correovalor = correo.value.trim();
const clavevalor = clave.value.trim();
const clave2valor = clave2.value.trim();

if (nombrevalor === "") {
setErrorInput(nombre, "El campo de nombre no puede estar vacio.");
}else {
setSuccessInput(nombre);
}


if(correovalor === ""){
    setErrorInput(correo, "El cambo correo no puede estar vacio.");
    } else {
    validarcorreo(correovalor) && setSuccessInput(correo);
}


if (clavevalor === ""){
    setErrorInput(clave, "El campo clave no puede estar vacio.");
}else {
    setSuccessInput(clave) && validarclave(clavevalor);
}


if (clave2valor === ""){
setErrorInput(clave2, "El campo confirmar clave no puede estar vacio.");
} else if (clave2valor !== clavevalor){
    setErrorInput(clave2, "Las claves no coinciden por favor validar nuevamente.");
} else{
    setSuccessInput(clave2);
 }
}

function setErrorInput(input, errorMessage) {
const formcontrol = input.parentElement;
const small = formcontrol.querySelector("small");

small.innerText = errorMessage;
formcontrol.className = "form__control error";
}

function setSuccessInput(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form__control success";
}

function validarcorreo(correo) {
let regular_expressions = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return regular_expressions.test(String(correo).toLocaleLowerCase());
}

function validarclave(clave){
    let regular_expressions = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regular_expressions.match(regular_expressions);
}


