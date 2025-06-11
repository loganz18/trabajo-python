document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const usuario = this.usuario.value;
  const password = this.password.value;

  // Usuario y contraseña fijos para demo
  if (usuario === "admin" && password === "1234") {
    localStorage.setItem("admin_autenticado", "si");
    window.location.href = "admin.html";
  } else {
    document.getElementById("login-error").textContent = "Usuario o contraseña incorrectos.";
  }
});