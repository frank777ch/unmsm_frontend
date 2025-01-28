fetch('https://unmsm.onrender.com/api/alumnos/filtrados')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tabla = document.getElementById('tabla-filtrados');
        data.forEach(alumno => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${alumno.Carrera}</td>
                <td>${alumno.Apellido}</td>
                <td>${alumno.Nombre}</td>
                <td>${alumno.edad}</td>
                <td>${alumno.color}</td>
                <td>${alumno.fecha_ingreso_U}</td>
            `;
            tabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error:', error));