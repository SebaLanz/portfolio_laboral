const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const form_completo = () => {
    Swal.fire({
        icon: 'success',
        title: 'Mensaje envíado'
    })
}
const error = () => {
    if (nombre.value == '' || email.value == '' || telefono.value == '' || asunto.value == ''|| mensaje.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe completar los campos vacíos'
        })
    }else{
        console.log(`nom: ${nombre.value} -  email: ${email.value} - tel: ${telefono.value} - asunto: ${asunto.value} - mensaje: ${mensaje.value}`);
        form_completo();
    }
   
}
const enviarEmail =  () => {
    error();
}
enviar.addEventListener('click', enviarEmail);