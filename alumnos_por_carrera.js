
fetch('https://unmsm.onrender.com/api/alumnos/por-carrera')
    .then(response => response.json())
    .then(data => {
        const tabla = document.getElementById('tabla-carreras');
        data.forEach(carrera => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${carrera.Carrera}</td>
                <td>${carrera.Num_Alumnos}</td>
            `;
            tabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error:', error));
