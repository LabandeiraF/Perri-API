const URL_API = 'https://api.thedogapi.com/v1/images/search?limit=3'
const API_KEY = 'live_mtkDwchBcP1onS3gBQOgRS6mTb7QC1Ha4VX8vBPF4wNF6yrTpeoSHBAiEMeWkARy'

fetch(URL_API,{headers: {
    'x-api-key': API_KEY
  }})
.then(response => response.json())
.then(data =>{
    const img = document.querySelector('img')

    img.src = data[0].url;
})

function cargarNuevaFoto() {
    fetch(URL_API)
    .then(response => response.json())
    .then(data =>{
        const img = document.querySelector('img')
        img.src = data[0].url;
    })
    .catch(error => {
        console.error('Error al cargar la foto del perro:', error);
    });
}

const botonNuevoPerro = document.getElementById('nueva_foto');
botonNuevoPerro.addEventListener('click', cargarNuevaFoto);