window.addEventListener("DOMContentLoaded", async () => {
  const listaDiv = document.getElementById("lista-tramites");
  try {
    const resp = await fetch("http://localhost:5000/tramites");
    const tramites = await resp.json();
    if (!Array.isArray(tramites)) throw new Error("Respuesta inválida");

    if (tramites.length === 0) {
      listaDiv.innerHTML = "<div class='alerta'>No hay trámites registrados.</div>";
      return;
    }

    listaDiv.innerHTML = `
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Descripción</th>
          <th>Prioridad</th>
        </tr>
        ${tramites.map((t, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${t.nombre}</td>
            <td>${t.tipo}</td>
            <td>${t.descripcion}</td>
            <td style="color:${t.prioridad === "Alta" ? "#b71c1c" : "#1b5e20"}">${t.prioridad}</td>
          </tr>
        `).join("")}
      </table>
    `;
  } catch (err) {
    listaDiv.innerHTML = "<div class='alerta alerta-alta'>Error al cargar los trámites.</div>";
  }
});