const email = document.querySelector("input[type=email]");
const dni = document.querySelector("input[name=dni]");
const tel = document.querySelector("input[type=tel]");
const input = document.querySelector("input")
let labels = document.querySelectorAll("label")

window.onload = ()=>{
    document.querySelector("input[name=apellidos]").focus()
}

for(l of labels){
    l.focus()
}

input.addEventListener('invalid', () => {
    input.setCustomValidity('No puedes dejar campos en blanco');
});

email.addEventListener('input', () => {
    email.setCustomValidity('');
    email.checkValidity();
});

email.addEventListener('invalid', () => {
    email.setCustomValidity('Me parece que esto no es un E-mail');
});

dni.addEventListener('input', () => {
    dni.setCustomValidity('Debes introducir 8 numeros y una letra');
    dni.checkValidity();
});

dni.addEventListener('invalid', () => {
    dni.setCustomValidity('Debes introducir 8 numeros y una letra');
});

tel.addEventListener('input', () => {
    tel.setCustomValidity('Debes introducir 9 números');
    tel.checkValidity();
});

tel.addEventListener('invalid', () => {
    tel.setCustomValidity('Debes introducir 9 números ');
});
