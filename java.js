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

