async function obtenerClima() {
    const climaTbody = document.getElementById('clima-datos');

    try {
        const response = await fetch('https://<TU_DOMINIO_BACKEND>.onrender.com/api/clima');
        const data = await response.json();

        if (data) {
            climaTbody.innerHTML = `
                <tr>
                    <td>${data.name}</td>
                    <td>${data.main.temp} °C</td>
                    <td>${data.main.feels_like} °C</td>
                    <td>${data.weather[0].description}</td>
                </tr>
            `;
        } else {
            climaTbody.innerHTML = `<tr><td colspan="4">No se pudo obtener el clima.</td></tr>`;
        }
    } catch (error) {
        console.error('Error al obtener el clima:', error);
        climaTbody.innerHTML = `<tr><td colspan="4">Error al obtener los datos del clima.</td></tr>`;
    }
}

obtenerClima();

setInterval(obtenerClima, 60000);