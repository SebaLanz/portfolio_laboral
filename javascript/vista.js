const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

const form_completo = () => {
    Swal.fire({
        icon: 'success',
        title: 'Mensaje envíado'
    })
}
const error = () => {
    if (nombre.value == '' || email.value == '' || mensaje.value == ''){
        let nom, em, msj, cantidad = 0, txt = '';
        if (nombre.value == '') {nom = 'Nombre'; cantidad =  parseInt(cantidad) + 1 ;}else{nom = '';}
        if (email.value == '') {em = 'Email'; cantidad = parseInt(cantidad) + 1;}else{em = '';}
        if (mensaje.value == '') {msj = 'Mensaje'; cantidad = parseInt(cantidad) + 1 ;}else{msj = '';}
        if (cantidad > 1) {
            txt = `Hay campos vacíos, son ${nom} ${em} ${msj}`;
            console.log(cantidad + 'hola');
        }else{
            txt = `Falta completar el campo: ${nom} ${em} ${msj}`;
        }
        Swal.fire({
            icon: 'error',
            text: txt
        })
        return false;
    }else{
        form_completo();
    }
}
const enviarEmail =  () => {
    if (error() === false) {
        error();
        event.preventDefault(); // Evita el envío predeterminado del formulario
    }
}
enviar.addEventListener('click', enviarEmail);
document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollButton");

    scrollButton.addEventListener("click", () => {
        // Desplazamiento suave hacia arriba
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});