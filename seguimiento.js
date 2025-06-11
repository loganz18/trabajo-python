document.getElementById("form-seguimiento").addEventListener("submit", async function(e) {
  e.preventDefault();
  const numero = parseInt(this.numero.value);
  const resultadoDiv = document.getElementById("resultado-seguimiento");

  try {
    const resp = await fetch("http://localhost:5000/tramites");
    const tramites = await resp.json();
    if (!Array.isArray(tramites)) throw new Error("Respuesta inválida");

    if (numero < 1 || numero > tramites.length) {
      resultadoDiv.innerHTML = "<div class='alerta alerta-alta'>No se encontró el trámite.</div>";
      return;
    }
    const tramite = tramites[numero - 1];
    resultadoDiv.innerHTML = `
      <div class="alerta ${tramite.prioridad === "Alta" ? "alerta-alta" : "alerta-baja"}">
        <b>Nombre:</b> ${tramite.nombre}<br>
        <b>Tipo:</b> ${tramite.tipo}<br>
        <b>Descripción:</b> ${tramite.descripcion}<br>
        <b>Prioridad:</b> ${tramite.prioridad}<br>
      </div>
    `;
  } catch (err) {
    resultadoDiv.innerHTML = "<div class='alerta alerta-alta'>Error al consultar el trámite.</div>";
  }
});