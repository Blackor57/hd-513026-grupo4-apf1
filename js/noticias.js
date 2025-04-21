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
      titulo: "gran apertura de parque jurasico",
      descripcion: "El nuevo parque se abre para todo el publico con criaturas sorprendentes y historias interesantes.",
      imagen: "../img/aperturaparque.jpeg",
      fecha: "18 de abril 2025"
    },
    {
      titulo: "nuevas medidad de seguridad implementadas no alimentar a los dinosaurios y solo el personal adecuado podra acercace a mas de 100 metros",
      descripcion: "Mejoras en los cercos y protocolos de emergencia.",
      imagen: "../img/seguridadparque.png",
      fecha: "15 de abril 2025"
    },
    {
      titulo: "Nuevo bioma tropical",
      descripcion: "Explora el nuevo entorno tropical con especies únicas.",
      imagen: "https://via.placeholder.com/500x300?text=Bioma+Tropical",
      fecha: "12 de abril 2025"
    }
  ];
  