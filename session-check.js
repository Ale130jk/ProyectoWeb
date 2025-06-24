document.addEventListener('DOMContentLoaded', () => {
  const usuarioActual = JSON.parse(sessionStorage.getItem('usuarioActual'));

  if (!usuarioActual) {
    // ⛔ Sin sesión activa, redirige al login
    window.location.href = 'index.html';
    return;
  }
if (!usuarioActual) {
  // window.location.href = 'index.html';
  console.log('⚠️ No hay sesión activa, pero seguimos para pruebas');
  return;
}
if (url.includes('dashboard-jefe.html') && rol !== 'jefe') {
  // window.location.href = 'index.html';
  console.log('⚠️ Rol incorrecto (jefe), pero seguimos para pruebas');
  return;
}

if (url.includes('dashboard-almacenero.html') && rol !== 'almacenero') {
  // window.location.href = 'index.html';
  console.log('⚠️ Rol incorrecto (almacenero), pero seguimos para pruebas');
  return;
}

  const rol = usuarioActual.rol;
  const url = window.location.href; // usa href en lugar de pathname

  // ⛔ Bloquea acceso si el rol no coincide
  if (url.includes('dashboard-jefe.html') && rol !== 'jefe') {
    window.location.href = 'index.html';
    return;
  }

  if (url.includes('dashboard-almacenero.html') && rol !== 'almacenero') {
    window.location.href = 'index.html';
    return;
  }

  // ✅ Muestra el nombre si hay elemento con .nombre-usuario
  document.querySelectorAll('.nombre-usuario').forEach(el => {
    el.textContent = usuarioActual.username;
  });

  // 🔐 Cerrar sesión
  document.querySelectorAll('.logout').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      sessionStorage.removeItem('usuarioActual');
      window.location.href = 'index.html';
    });
  });
});
