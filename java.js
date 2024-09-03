document.addEventListener("DOMContentLoaded", function() {
    for(i=1; i<=6; i++){
        fetch('https://dragonball-api.com/api/characters?page='+i)
        .then(response => {
            if (response.ok) {
                return response.json(); // Convierte la respuesta en JSON solo si fue exitosa
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            console.log(data);
            const items = data.items.sort((a, b) => a.name.localeCompare(b.name));

            // Obtén el elemento donde añadirás la información
            const info = document.getElementById("información");

            // Usa un string para acumular el HTML a insertar
            let adiciones = "";

            // Itera sobre los elementos en 'items'
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const id = item.id;
                
                adiciones += `
                    <div>
                        <img id="img_${id}" class="imagen" src="${item.image}" alt="${item.name}">
                        <p id="p_${id}">
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
            }
            info.innerHTML += adiciones})
    }
})

