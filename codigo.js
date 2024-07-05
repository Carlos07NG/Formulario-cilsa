document.getElementById('btn3').addEventListener('click', function() {
    let link = document.getElementById('estilo');
    link.setAttribute('href', 'estiloAltoContraste.css');
});

document.getElementById('btn2').addEventListener('click', function() {
    let link = document.getElementById('estilo');
    link.setAttribute('href', 'estilo1.css');
});

document.getElementById('formulario').addEventListener('submit', function(event) {
    let isValid = true;
    const name = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('fecha').value;
    const pais = document.getElementById('pais').value;

    if (!name) {
        isValid = false;
        alert('El nombre es obligatorio');
    }

    if (!apellido) {
        isValid = false;
        alert('El nombre es obligatorio');
    }

    if (!email) {
        isValid = false;
        alert('El correo electrónico es obligatorio');
    } else if (!validateEmail(email)) {
        isValid = false;
        alert('Por favor ingrese un correo electrónico válido');
    }

    if (!validateFecha(fecha)) {
        isValid = false;
        alert('Por favor ingrese una fecha de nacimiento válida');
    }

    if (!pais) {
        isValid = false;
        alert('El nombre es obligatorio');
    }

    if (!isValid) {
        event.preventDefault();
    }
    
});
alert('Datos enviados')

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateFecha(fecha) {
    const date = new Date(fecha);
    const today = new Date();
    return date <= today;
}