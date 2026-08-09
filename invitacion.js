(function () {
  var scenes = Array.from(document.querySelectorAll('.scene'));
  var dots = Array.from(document.querySelectorAll('.dot'));
  var current = 0;
  var AUTO_DELAY = 6200; // ms entre escenas automáticas
  var timer = null;

  function show(index) {
    current = (index + scenes.length) % scenes.length;
    scenes.forEach(function (s, i) { s.classList.toggle('is-active', i === current); });
    dots.forEach(function (d, i) { d.classList.toggle('is-active', i === current); });
  }

  function scheduleNext() {
    clearTimeout(timer);
    // se detiene en la última escena (datos del evento)
    if (current < scenes.length - 1) {
      timer = setTimeout(function () {
        show(current + 1);
        scheduleNext();
      }, AUTO_DELAY);
    }
  }

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      clearTimeout(timer);
      show(parseInt(dot.getAttribute('data-go'), 10));
      scheduleNext();
    });
  });

  show(0);
  scheduleNext();
})();

// metodos para mapas y cuenta regresiva
async function irAConfirmacion() {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");

  if (!nombre) {
    mostrarModal(
      "Falta tu nombre",
      "Este link no incluye tu nombre. Pide el link correcto con tu nombre incluido.",
      "error"
    );
    return;
  }

  try {
    // db viene de firebase-init.js (SDK compat)
    await db.collection("invitados").add({
      nombre: nombre,
      confirmo: true,
      fecha: new Date()
    });

    mostrarModal(
      "¡Gracias por confirmar!",
      "Tu compañía en este día especial será un regalo para nuestra familia.<br><strong>" + nombre + "</strong>",
      "success"
    );

    // redirige hasta que el usuario cierre el modal
    document.getElementById("modalBtn").addEventListener("click", function () {
      window.location.href = "confirmacion.html";
    }, { once: true });

  } catch (error) {
    console.error("Error al confirmar:", error);
    mostrarModal(
      "Algo salió mal",
      "Hubo un problema al guardar tu confirmación. Intenta de nuevo.",
      "error"
    );
  }
}

function abrirMapa() {
  window.open("https://www.google.com/maps/search/?api=1&query=Parroquia+Nuestra+Señora+de+la+Medalla+Milagrosa+Puebla", "_blank");
}

function abrirMapaSalon() {
  window.open("https://www.google.com/maps/place/Salon+Alysmy/@19.0861986,-98.1812408,17z/data=!3m1!4b1!4m6!3m5!1s0x85cfc176341e3821:0x3c0708719e6ac07!8m2!3d19.0861935!4d-98.1786605!16s%2Fg%2F11csrdnl4b?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D", "_blank");
}