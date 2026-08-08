// ui-helpers.js
// Controla el loader inicial y el modal de confirmación/error

// Oculta el loader cuando la página termina de cargar
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(function () {
      loader.classList.add("is-hidden");
    }, 400); // pequeño delay para que no se sienta parpadeo
  }
});

// Muestra el modal con título, mensaje y tipo ("success" | "error")
function mostrarModal(titulo, mensaje, tipo) {
  const overlay = document.getElementById("modalOverlay");
  const icon = document.getElementById("modalIcon");
  const title = document.getElementById("modalTitle");
  const message = document.getElementById("modalMessage");

  title.textContent = titulo;
  message.innerHTML = mensaje;

  icon.classList.toggle("is-error", tipo === "error");
  icon.innerHTML = tipo === "error"
    ? '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v5M12 16h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  overlay.classList.add("is-visible");
}

function cerrarModal() {
  document.getElementById("modalOverlay").classList.remove("is-visible");
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("modalBtn");
  const overlay = document.getElementById("modalOverlay");
  if (btn) btn.addEventListener("click", cerrarModal);
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) cerrarModal();
    });
  }
});