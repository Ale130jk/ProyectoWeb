// session-check.js
document.addEventListener('DOMContentLoaded', () => {
  const usuarioActual = JSON.parse(sessionStorage.getItem('usuarioActual'));

  // ⛔ Si no hay sesión activa, redirige al login
  if (!usuarioActual) {
    window.location.href = "./index.html";
    return;
  }

  const rol = usuarioActual.rol;
  const url = window.location.pathname;

  // ⛔ Bloquear acceso si el rol no coincide con la vista actual
  if (url.includes("dashboard-jefe") && rol !== "jefe") {
    window.location.href = "./index.html";
    return;
  }

  if (url.includes("dashboard-almacenero") && rol !== "almacenero") {
    window.location.href = "./index.html";
    return;
  }

  // ✅ Mostrar el nombre del usuario si hay elementos con la clase .nombre-usuario
  document.querySelectorAll('.nombre-usuario').forEach(el => {
    el.textContent = usuarioActual.username;
  });

  // 🔐 Cerrar sesión
  document.querySelectorAll('.logout').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      sessionStorage.removeItem('usuarioActual');
      window.location.href = "./index.html";
    });
  });
});
