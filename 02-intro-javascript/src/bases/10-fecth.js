// Definimos la clave de API para acceder al servicio de Giphy
const apiKey = 'zZEeY70P9pUhIq2lQXBiRfTJEuu1bRWv';

// Hacemos una solicitud HTTP a la API de Giphy para obtener un GIF aleatorio
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// Encadenamos promesas para manejar la respuesta de la solicitud
peticion
  // Primero, convertimos la respuesta de la API en formato JSON
  .then(resp => resp.json())
  // Luego, extraemos la URL del GIF desde la respuesta JSON
  .then(({ data }) => {
    // Desestructuramos el objeto para obtener la URL del GIF original
    const { url } = data.images.original;

    // Creamos un elemento <img> para mostrar el GIF
    const img = document.createElement('img');
    // Establecemos la fuente del <img> al URL del GIF
    img.src = url;

    // Añadimos el <img> al cuerpo del documento para que se muestre en la página
    document.body.append(img);
  })
  // Manejamos cualquier error que pueda ocurrir durante la solicitud o el procesamiento
  .catch(console.warn);
