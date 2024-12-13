// const getImgPromesa = () => {
//   return new Promise((resolve) => {
//     resolve("https://www.google.com");
//   })

// }

// getImgPromesa().then(console.log); //https://www.google.com

//que es el async y await
//async es una palabra clave que se usa para declarar una funcion asincrona

const getImage = async () => {
  try {

    // Definimos la clave de API para acceder al servicio de Giphy
    const API_KEY = "BYx84Yi4ruyfrHxGNdJ50rCpKTNL82Ce";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");

    img.src = url;

    document.body.append(img);
  } catch (err) {
    //manejqar el error
    console.error(err);
  }
};

getImage();
