const formulario = document.querySelector(`form`);
const respuesta = document.getElementById(`mensaje-exito`);
formulario.addEventListener(`submit`, function(event) {
    event.preventDefault();
    const nombre = document.getElementById(`nombre`).value.trim();
    const mensaje = document.getElementById(`mensaje`).value.trim();

    if (nombre === `` || mensaje === ``) {
        respuesta.style.color = `#e74c3c`;
        respuesta.textContent = `Por favor, rellena todos los campos antes de enviar`;
        return;
    }

    respuesta.style.color = `#27ae60`;
    respuesta.textContent = `¡Gracias por tu mensaje, ${nombre}! Me pondré en contacto contigo pronto`;
    formulario.reset();
});

const btnTheme = document.getElementById('toggle-theme');

// Función para actualizar el texto del botón según el tema activo
function actualizarTextoBoton() {
    if (document.body.classList.contains('dark-mode')) {
        btnTheme.textContent = '☀️ Modo Claro';
    } else {
        btnTheme.textContent = '🌙 Modo Oscuro';
    }
}

// 1. Al cargar la página, comprobar si el usuario ya tenía el modo oscuro guardado
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Actualizar el texto inicial del botón según lo que se haya cargado
actualizarTextoBoton();

// 2. Evento para cambiar de tema al hacer clic en el botón
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Guardar la preferencia en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    // Actualizar el texto del botón inmediatamente
    actualizarTextoBoton();
});