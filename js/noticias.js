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
      titulo: "nuevas medidad de seguridad implementadas ",
      descripcion: "Mejoras en los cercos y protocolos de emergencia. no alimentar a los dinosaurios y solo el personal adecuado podra acercace a mas de 100 metros",
      imagen: "../img/seguridadparque.png",
      fecha: "15 de abril 2025"
    },
    {
      titulo: "Nuevo bioma tropical",
      descripcion: "Explora el nuevo entorno tropical con especies únicas.",
      imagen: "https://via.placeholder.com/500x300?text=Bioma+Tropical",
      fecha: "12 de abril 2025"
    },
    {
      titulo: "Nuevo bioma tropical",
      descripcion: "Explora el nuevo entorno tropical con especies únicas.",
      imagen: "https://via.placeholder.com/500x300?text=Bioma+Tropical",
      fecha: "12 de abril 2025"
    }
  ];

const contenedor = document.getElementById("contenedor-cartas");

// Generar la tarjeta principal
const noticiaPrincipal = noticias[0]; // La primera noticia será la principal
const cartaPrincipal = document.createElement("div");
cartaPrincipal.className = "carta-principal";
cartaPrincipal.innerHTML = `
  <img src="${noticiaPrincipal.imagen}" alt="${noticiaPrincipal.titulo}">
  <h2>${noticiaPrincipal.titulo}</h2>
  <p>${noticiaPrincipal.descripcion}</p>
  <span class="fecha">${noticiaPrincipal.fecha}</span>
`;
contenedor.appendChild(cartaPrincipal);

// Generar las tarjetas secundarias
noticias.slice(1).forEach(noticia => {
  const cartaSecundaria = document.createElement("div");
  cartaSecundaria.className = "carta-secundaria";
  cartaSecundaria.innerHTML = `
    <img src="${noticia.imagen}" alt="${noticia.titulo}">
    <h3>${noticia.titulo}</h3>
    <p>${noticia.descripcion.substring(0, 100)}...</p>
    <span class="fecha">${noticia.fecha}</span>
  `;
  contenedor.appendChild(cartaSecundaria);
});
