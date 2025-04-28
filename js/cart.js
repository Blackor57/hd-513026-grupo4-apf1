const tarjetas = [
    {
        imagen: "https://hips.hearstapps.com/hmg-prod/images/jurassic-world-1645009812.jpeg?crop=0.566xw:1.00xh;0.347xw,0&resize=640:*",
        titulo: "Título de la tarjeta 1",
        descripcion: "Este es el texto de la tarjeta 1. Se ajusta al tamaño del contenido.",
        actualizado: "Última actualización hace 3 minutos"
    },
    {
        imagen: "https://hips.hearstapps.com/hmg-prod/images/jurassic-world-1645009812.jpeg?crop=0.566xw:1.00xh;0.347xw,0&resize=640:*",
        titulo: "Título de la tarjeta 2",
        descripcion: "Este es el texto de la tarjeta 2. Se ajusta al tamaño del contenido.",
        actualizado: "Última actualización hace 5 minutos"
    },
    {
        imagen: "https://hips.hearstapps.com/hmg-prod/images/jurassic-world-1645009812.jpeg?crop=0.566xw:1.00xh;0.347xw,0&resize=640:*",
        titulo: "Título de la tarjeta 3",
        descripcion: "Este es el texto de la tarjeta 3. Se ajusta al tamaño del contenido.",
        actualizado: "Última actualización hace 10 minutos"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('cards-container');

    tarjetas.forEach(tarjeta => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4'; // Cada tarjeta ocupa 1/3 de fila

        const card = document.createElement('div');
        card.className = 'card';
        card.style.minHeight = '300px';
        card.style.height = '300px';

        const row = document.createElement('div');
        row.className = 'row g-0 h-100';

        const colImg = document.createElement('div');
        colImg.className = 'col-md-4 h-100';

        const img = document.createElement('img');
        img.src = tarjeta.imagen;
        img.className = 'img-fluid rounded-start h-100 object-fit-cover';
        img.alt = tarjeta.titulo;

        colImg.appendChild(img);

        const colContent = document.createElement('div');
        colContent.className = 'col-md-8 h-100';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column justify-content-center h-100';

        const titulo = document.createElement('h5');
        titulo.className = 'card-title';
        titulo.textContent = tarjeta.titulo;

        const descripcion = document.createElement('p');
        descripcion.className = 'card-text';
        descripcion.textContent = tarjeta.descripcion;

        const lastUpdated = document.createElement('p');
        lastUpdated.className = 'card-text';
        lastUpdated.innerHTML = `<small class="text-muted">${tarjeta.actualizado}</small>`;

        cardBody.appendChild(titulo);
        cardBody.appendChild(descripcion);
        cardBody.appendChild(lastUpdated);

        colContent.appendChild(cardBody);

        row.appendChild(colImg);
        row.appendChild(colContent);
        card.appendChild(row);
        col.appendChild(card);
        contenedor.appendChild(col);
    });
});