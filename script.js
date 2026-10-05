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

const btnTheme = document.getElementById(`toggle-theme`);

const temaGuardado = localStorage.getItem(`tema`);

if (temaGuardado === `oscuro`){
    document.body.classList.add(`dark-mode`);
    btnTheme.Theme.textContent = `☀️ Modo Claro`;
}

btnTheme.addEventListener(`click`, function() {
    document.body.classList.toggle(`dark-mode`);

    if (document.body.classList.contains(`dark-mode`)){
    } else {
        btnTheme.textContent = `🌙 Modo Oscuro`;
        localStorage.setItem(`tema`, `claro`);
    }
});