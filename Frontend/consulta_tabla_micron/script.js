document.addEventListener('DOMContentLoaded', async () => {
    const nameUserLogin = document.getElementById('nameUserLogin');
    const idFilterBtn = document.getElementById('idFilterBtn');
    const href_login_expertos = "../login_expertos/login_Expertos.html"

    async function nameUserLoginFunc() {
        if (sessionStorage.getItem('usuario')) {
            const dataUser = JSON.parse(sessionStorage.getItem('usuario'))
            nameUserLogin.innerHTML = dataUser.usuario;

            // Consulta
        } else {
            alert('Usted debe iniciar sesión.');
            window.location.href = href_login_expertos
        }
    }
    nameUserLoginFunc()
    const logoutFunc = document.getElementById('logoutFunc');
    logoutFunc.addEventListener('click', function () {
        if (sessionStorage.getItem('usuario')) {
            sessionStorage.removeItem('usuario');
            window.location.href = href_login_expertos
        } else {
            alert('Usted debe iniciar sesión.');
        }
    });


    const putData = function (data) {
        const tabla = document.getElementById("micronegocio");
        const tbody = document.getElementById("micronegocios");
        tbody.innerHTML = "";
        // Recorrer los datos JSON y crear filas de tabla
        data.forEach(item => {
            const fila = document.createElement("tr");
            // Crear celdas de tabla y llenarlas con datos
            const id = document.createElement("td");
            id.textContent = item.id;
            const usuario = document.createElement("td");
            usuario.textContent = item.usuario;
            const correo = document.createElement("td");
            correo.textContent = item.correo;
            const campo = document.createElement("td");
            campo.textContent = item.campo;
            const tiempo_en_mercado = document.createElement("td");
            tiempo_en_mercado.textContent = item.tiempo_en_mercado;
            const vacantes = document.createElement("td");
            vacantes.textContent = item.vacantes;
            // Agregar celdas a la fila
            fila.appendChild(id);
            fila.appendChild(usuario);
            fila.appendChild(correo);
            fila.appendChild(campo);
            fila.appendChild(tiempo_en_mercado);
            fila.appendChild(vacantes);
            // Agregar fila al cuerpo de la tabla
            tbody.appendChild(fila);
        });
    }

    const apiUrl = "http://db_micronegocio:3007/micronegocio";
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            putData(data);
        })
        .catch(error => console.error("Error al obtener los datos:", error));

    idFilterBtn.addEventListener('click', async (e) => {
        const idFilter = document.getElementById('idFilter').value;
        console.log({ idFilter })
        if (idFilter <= 0) {
            const idFilter = document.getElementById('idFilter').value = "";
        } else {
            const usuario = JSON.parse(sessionStorage.getItem('usuario'));
            fetch(`http://db_solicitud:3009/registrarVacante/${idFilter}/${usuario.id}`)
                .then(response => response.json())
                .then(data => {
                    console.log({ data })
                    alert("Se ha registrado exitosamente"); 
                    if (Array.isArray(data)) {
                        document.getElementById('tablaSolicitud').style.display = 'block';
                        // Llenar la tabla con la información de solicitud
                        graficarDatosTabla(data);
                        document.getElementById('idFilter').value = "";
                    }
                })
                .catch(error => console.error("Error al obtener los datos:", error));
        }
    });

});

function graficarDatosTabla(solicitudes) {
    const solicitudInfo = document.getElementById('solicitudInfo');
    solicitudInfo.innerHTML = '';
    for (const solicitud  of solicitudes) {
        const fila = document.createElement('tr');
        const nombreNegocio = document.createElement('td');
        nombreNegocio.textContent = solicitud.nombreNegocio;
        const correoNegocio = document.createElement('td');
        correoNegocio.textContent = solicitud.correoNegocio;
        const campoNegocio = document.createElement('td');
        campoNegocio.textContent = solicitud.campoNegocio;
        const nombreExperto = document.createElement('td');
        nombreExperto.textContent = solicitud.nombreExperto;
        const numeroExperto = document.createElement('td');
        numeroExperto.textContent = solicitud.numeroExperto;
        const correoExperto = document.createElement('td');
        correoExperto.textContent = solicitud.correoExperto;
        const cargoExperto = document.createElement('td');
        cargoExperto.textContent = solicitud.cargoExperto;

        fila.appendChild(nombreNegocio);
        fila.appendChild(correoNegocio);
        fila.appendChild(campoNegocio);
        fila.appendChild(nombreExperto);
        fila.appendChild(numeroExperto);
        fila.appendChild(correoExperto);
        fila.appendChild(cargoExperto);
        solicitudInfo.appendChild(fila);
    }           
}