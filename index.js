document.getElementById('boton-agregar-imagen').addEventListener('click', function() {
    const url = document.getElementById('url-imagen').value;
    const titulo = document.getElementById('titulo-imagen').value;
    const descripcion = document.getElementById('descripcion-imagen').value;

    if (url && titulo && descripcion) {
        agregarImagenAGaleria(url, titulo, descripcion);
        document.getElementById('url-imagen').value = '';
        document.getElementById('titulo-imagen').value = '';
        document.getElementById('descripcion-imagen').value = '';
    }
});

function agregarImagenAGaleria(url, titulo, descripcion) {
    const galeria = document.getElementById('galeria-imagenes');

    const elementoImagen = document.createElement('div');
    elementoImagen.classList.add('elemento-imagen');

    const img = document.createElement('img');
    img.src = url;
    img.alt = titulo;
    img.addEventListener('click', function() {
        mostrarModal(url, titulo, descripcion);
    });

    const h3 = document.createElement('h3');
    h3.textContent = titulo;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('eliminar');
    botonEliminar.addEventListener('click', function() {
        galeria.removeChild(elementoImagen);
    });

    const botonDetalles = document.createElement('button');
    botonDetalles.textContent = 'Ver detalles';
    botonDetalles.classList.add('detalles');
    botonDetalles.addEventListener('click', function() {
        mostrarModal(url, titulo, descripcion);
    });

    elementoImagen.appendChild(img);
    elementoImagen.appendChild(h3);
    elementoImagen.appendChild(botonEliminar);
    elementoImagen.appendChild(botonDetalles);

    galeria.appendChild(elementoImagen);
}

function mostrarModal(url, titulo, descripcion) {
    const modal = document.getElementById('modal-imagen');
    const modalImg = document.getElementById('contenido-modal');
    const tituloModal = document.getElementById('titulo-modal');
    const textoDescripcion = document.getElementById('texto-descripcion');

    modal.style.display = 'block';
    modalImg.src = url;
    tituloModal.textContent = titulo;
    textoDescripcion.textContent = descripcion;

    const span = document.getElementsByClassName('cerrar')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    }
}

// Código para añadir las 8 imágenes iniciales
const imagenesIniciales = [
    { url: 'https://www.infobae.com/new-resizer/lMeDhKLrYj1KzPgAkJsGOIbSG3c=/992x661/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/A5Y5SAG7PZGX5CYNRPYSFVOEOE.jpg', titulo: 'Bugatti La Voiture Noire', descripcion: 'Este superdeportivo de 16,7 millones de euros cuenta con la mecánica del Chiron, un motor W16 de 1.500 caballos con el que alcanza los 400 kilómetros por hora. Con este modelo la casa italiana celebró sus 110 años y al mismo tiempo lo posicionó como el auto más caro de la historia.' },
    { url: 'https://www.infobae.com/new-resizer/3Kr6RGIZybIURnRBq1RRXkMm6Ac=/992x661/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/7IGTGSGX3ZBQZJTCGEY2NX5KFM.jpg', titulo: 'Lamborghini Veneno Roadster', descripcion: 'Desde el aspecto ya es temible este Lamborghini: está trabajado al máximo en la eficiencia aerodinámica para llevar la performance de un prototipo de carreras a un uso convencional. Esconde el motor V12 cilindros de 750 CV reconocido por un sonido inigualable y unas prestaciones que erizan la piel: 355 km/h de máxima y 2,9 segundos para acelerar de 0 a 100 km/h.' },
    { url: 'https://www.infobae.com/new-resizer/QjkSP9qlONV215up0pziMVhqHyU=/992x558/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/CVYGNLJGERBC5IWT7SK3UHAEZA.jpg', titulo: 'Bugatti Divo', descripcion: 'El Divo, de Bugatti está pensado para los clientes que no necesitan superar los 400 km/h, porque en ese aspecto es menos radical que un Chiron. Pero esto también tiene su precio, porque el Divo es una edición limitada de sólo 40 unidades.'+
    'El nombre Divo rinde homenaje a un piloto francés que ganó dos veces la mítica Targa Fiorio, una competencia que hasta 1977 fue una carrera de resistencia en carreteras abiertas de las montañas de Sicilia. Albert Divo nació en París en 1895, y después de servir como piloto de combate en la Primera Guerra Mundial, ejerció como mecánico y más tarde como piloto profesional.'+
    'Equipado con el mismo motor W16 de 1.500 CV, el Divo es 35 kg más liviano que el Chiron, mientras que su velocidad máxima está limitada a 380 km/h.' },
    { url: 'https://www.infobae.com/new-resizer/ytPa3o5cg1o0akR6_w8X7A2C8rs=/992x558/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/PCJXAQEG6NBFHBL4N5SG2AM4O4.jpg', titulo: 'Koenigsegg CCXR Trevita', descripcion: 'Esta pieza del fabricante sueco de hypercars está equipada con motor V8 de aluminio biturbo que le permite acelerar de 0 a 100 km/h en 2,9 segundos. Cuenta con un exclusivo alerón trasero de carbono doble, frenos de cerámica de carbono con ABS, sistemas de monitoreo para neumáticos y de elevación hidráulica.' },
    { url: 'https://www.infobae.com/new-resizer/2rjSqM-FUn3PxH7aMglJHVblQLw=/992x661/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/SNRGFQDPRFEIJAICE2QYAZQYHM.jpg', titulo: 'Bugatti Chiron Super Sport 300+', descripcion: 'Es la variante más extrema de la Bugatti Chiron, que se realizó para batir el récord de velocidad de autos de fabricación. Y la hazaña la consiguió a principios de agosto cuando llegó a los 490,484 km/h.'+
    'La versión Super Sport 300+, entonces, inmortaliza al modelo más rápido del planeta. También concebida en fibra de carbono, esta Bugatti se diferencia del modelo de serie porque logró incrementar la potencia del W16 8.0 litros que equipa el hiperdeportivo francés. El Chiron Super Sport 300+ rinde 1.600 caballos, 100 más que el modelo convencional.' },
    { url: 'https://www.infobae.com/new-resizer/3XKIgPjTn7bEd_qJmiaXCYDwJgo=/992x558/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/Q337MCL3HJHUBI2Q4SXJEBM3Q4.jpg', titulo: 'Aston Martin Valkyrie', descripcion: 'Es el resultado de la colaboración entre el fabricante británico y la escudería Red Bull, a tal punto que está concebido por el talento del director técnico del equipo de F1, Adrian Newey. Está construido con un ligero esqueleto de fibra de carbono sobre el que colocaron una carrocería con una carga aerodinámica inusual para un auto de calle.'+
    'Su motor es un V12 de aspiración natural desarrollado para ser montado en posición central, que acredita 1.176 caballos de potencia. Su producción está limitada a 150 unidades, todas ellas vendidas antes de ser producidas, incluso.' },
    { url: 'https://www.infobae.com/new-resizer/ePdlNjSYi9zbDRJs3Xs-LbWZ1LU=/992x661/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/XTHXZNLNJZG2ROEECEP5WKKZ24.jpg', titulo: 'Lamborghini Sián', descripcion: 'El Sián, inspirado en el concept Terzo Milenio, es el Lamborghini más potente y veloz de la historia, pero también el primer modelo híbrido de la marca. Además de su tradicional V12 de 785 caballos añade un segundo motor eléctrico con otros 34 y llega a los 819 caballos de potencia. Por eso la elección de su nombre, que significa “rayo” en un dialecto piamontés, región de Italia en donde se encuentra Bologna.'+
    'Sólo se fabricarán 63 unidades del Sián, y ya están todas vendidas. Eso sí, todas las unidades serán distintas y personalizadas porque tendrán diseños interiores con detalles a pedido de cada usuario. No es caprichoso el límite de 63 modelos, sino que refiere a 1963, el año de fundación de la firma italiana. Con una aceleración de 0 a 100 kilómetros en 2,8 segundos, en la casa bolognesa indican que con este modelo entran en la era de la electrificación.' },
    { url: 'https://www.infobae.com/new-resizer/pE6IUlHGzzerYhleSlrljXA5iBk=/992x606/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/ZARXERQJW5AMJBRHN4FLWOXE74.jpg', titulo: 'Pagani Huayra Roadster BC', descripcion: 'Es una de las últimas creaciones el diseñador argentino Horacio Pagani. Su nombre procede del término quechua “huayra”, que significa viento, y las iniciales BC de esta edición especial corresponden a Benny Caiola, coleccionista de coches y primer propietario de un Pagani, al que el diseñador le quiso rendir homenaje con una serie de 20 unidades.'+
    'Es un biplaza con motor V12 biturbo central trasero y carrocería roadster que consigue acelerar de 0 a 100 km/h en 2,9 segundos y puede alcanzar una velocidad de 386 km/h. Con respecto a la coupé se incrementó la potencia en 60 caballos (supera los 750 CV) y se redujo su peso en 132 kilos: tiene llantas 9 kilos más livianas, un escape de titanio, suspensiones construidas en aleación de aluminio que ahorran un 25 por ciento respecto al Huayra y nueva fibra de carbono con un 50 por ciento menos de peso que la convencional. Con 1.218 kilos es uno de los hypercars más ligeros del mundo.' }
];

imagenesIniciales.forEach(imagen => {
    agregarImagenAGaleria(imagen.url, imagen.titulo, imagen.descripcion);
});