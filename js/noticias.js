function noticiaCreada(titulo, descripcion, imagen, fecha) {
    const carta = document.createElement("div");
    carta.className = "carta-Noticia";
    
    carta.innerHTML = `<img src="${imagen}" alt="Noticia" />
    <div class="contenido">
      <span class="fecha">${fecha}</span>
      <h2>${titulo}</h2>
      <p>${descripcion}</p>
    </div>
  `;

  return carta;

}

const noticias = [
    {
      titulo: "Nuevo Rex en el parque",
      descripcion: "El Tyrannosaurus Rex llega con nuevas animaciones y rugidos.",
      imagen: "https://via.placeholder.com/500x300?text=T-Rex",
      fecha: "18 de abril 2025"
    },
    {
      titulo: "Actualización de seguridad",
      descripcion: "Mejoras en los cercos y protocolos de emergencia.",
      imagen: "https://via.placeholder.com/500x300?text=Seguridad",
      fecha: "15 de abril 2025"
    },
    {
      titulo: "Nuevo bioma tropical",
      descripcion: "Explora el nuevo entorno tropical con especies únicas.",
      imagen: "https://via.placeholder.com/500x300?text=Bioma+Tropical",
      fecha: "12 de abril 2025"
    }
  ];
  