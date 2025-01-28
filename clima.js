async function obtenerClima() {
    const climaDiv = document.getElementById('clima');

    try {
        const response = await fetch('https://unmsm.onrender.com/api/clima');
        const data = await response.json();

        if (data) {
            climaDiv.innerHTML = `
                <h2>Clima Actual</h2>
                <p>Ciudad: ${data.name}</p>
                <p>Temperatura: ${data.main.temp} °C</p>
                <p>Sensación Térmica: ${data.main.feels_like} °C</p>
                <p>Clima: ${data.weather[0].description}</p>
            `;
        } else {
            climaDiv.innerHTML = `<p>No se pudo obtener el clima.</p>`;
        }
    } catch (error) {
        console.error('Error al obtener el clima:', error);
        climaDiv.innerHTML = `<p>Error al obtener los datos del clima.</p>`;
    }
}

obtenerClima();

setInterval(obtenerClima, 60000);