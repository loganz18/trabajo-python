document
  .getElementById("formulario")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const datos = {
      nombre: this.nombre.value,
      tipo: this.tipo.value,
      descripcion: this.descripcion.value,
    };

    let duracion = 5;

    try {
      const resp = await fetch("http://localhost:5000/clasificar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      if (!resp.ok) throw new Error("Error en la API");

      const data = await resp.json();

      Swal.fire({
        title: "¡Formulario enviado!",
        html: `Prioridad asignada: <b>${data.prioridad}</b><br>Esta alerta se cerrará en <b>${duracion}</b> segundos.`,
        timer: duracion * 1000,
        timerProgressBar: true,
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelectorAll("b")[1];
          let timerInterval = setInterval(() => {
            b.textContent = Math.floor(Swal.getTimerLeft() / 1000);
          }, 100);
          Swal._timerInterval = timerInterval;
        },
        willClose: () => {
          clearInterval(Swal._timerInterval);
          document.getElementById("formulario").reset();
        },
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al enviar el trámite. Intenta de nuevo.",
        timer: 3000,
        timerProgressBar: true,
      });
    }
  });
