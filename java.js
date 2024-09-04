document.addEventListener("DOMContentLoaded", function() {
    fetch('https://dragonball-api.com/api/characters')
        .then(response => {
            if (response.ok) {
                return response.json(); // Convierte la respuesta en JSON solo si fue exitosa
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            console.log(data);

            info = document.getElementById("información") 
            var adiciones = ""
            for(i=0; i<data.items.length; i++){
                let id = data.items[i].id
                adiciones += `<img id="img_${id}" class="imagen" src="${data.items[i].image}"></img>`+`<p id="p_${id}">` + `<span>`+ "Nombre: " +`</span>` + data.items[i].name + `<br>`+
                `<span>`+ "KI: " +`</span>` + data.items[i].ki + `<br>`+
                `<span>`+ "KI Máximo: " +`</span>` + data.items[i].maxKi + `<br>`+
                `<span>`+ "Raza: " +`</span>` + data.items[i].race + `<br>`+
                `<span>`+ "Género: " +`</span>` + data.items[i].gender + `<br>`+
                `<span>`+ "Descripción: " +`</span>` + data.items[i].description + `<br>`+
                `<span>`+ "Afiliación: " +`</span>` + data.items[i].affiliation + `<br>`+`</p>`
            };
            info.innerHTML = adiciones})})

            document.addEventListener("DOMContentLoaded", function() {
                const buscador = document.getElementById('buscador');
                const info = document.getElementById("información");
                let personajes = []; // Array para almacenar los personajes
            
                // Función para renderizar los personajes en el HTML
                function renderPersonajes(data) {
                    let adiciones = "";
                    data.forEach(item => {
                        adiciones += `
                            <div class="producto">
                                <img class="imagen" src="${item.image}" alt="${item.name}">
                                <p>
                                    <span>Nombre: </span>${item.name}<br>
                                    <span>KI: </span>${item.ki}<br>
                                    <span>KI Máximo: </span>${item.maxKi}<br>
                                    <span>Raza: </span>${item.race}<br>
                                    <span>Género: </span>${item.gender}<br>
                                    <span>Descripción: </span>${item.description}<br>
                                    <span>Afiliación: </span>${item.affiliation}<br>
                                </p>
                            </div>
                        `;
                    });
                    info.innerHTML = adiciones;
                }
            
    // Función para filtrar los personajes según la búsqueda
    function filtrarPersonajes() {
        const textoMinuscula = buscador.value.toLowerCase();
        const personajesFiltrados = personajes.filter(item => 
            item.name.toLowerCase().includes(textoMinuscula) || 
            item.description.toLowerCase().includes(textoMinuscula)
        );
        renderPersonajes(personajesFiltrados);
    }
            
    // Carga los datos desde la API
        fetch('https://dragonball-api.com/api/characters')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            
            .then(data => {
                personajes = data.items; 
                    renderPersonajes(personajes); 
            
    // Evento de escucha 
        buscador.addEventListener('input', filtrarPersonajes);
            })

        .catch(error => console.error('Error al obtener los datos:', error));
            });