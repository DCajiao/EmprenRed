document.addEventListener('DOMContentLoaded', async () => {
    const nameUserLogin = document.getElementById('nameUserLogin');
    const href_login_expertos = "../login_expertos/login_Expertos.html"
    async function nameUserLoginFunc() {
        if (sessionStorage.getItem('usuario')) {
            const dataUser = JSON.parse(sessionStorage.getItem('usuario'))
            nameUserLogin.innerHTML = dataUser.usuario;
        } else {
            alert('Usted debe iniciar sesión.');
            window.location.href = href_login_expertos
        }
    }
    nameUserLoginFunc()
    const logoutFunc = document.getElementById('logoutFunc');
    logoutFunc.addEventListener('click', function() {
        if (sessionStorage.getItem('usuario')) {
            sessionStorage.removeItem('usuario');
            window.location.href = href_login_expertos
        } else {
            alert('Usted debe iniciar sesión.');
        }
    });
    const apiUrl = "http://db_experto:3008/experto";
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const tabla = document.getElementById("expert");
            const tbody = document.getElementById("expertos");
            data.forEach(item => {
                const fila = document.createElement("tr");
                const nombre_completo = document.createElement("td");
                nombre_completo.textContent = item.nombre_completo; 
                const numero_telefonico = document.createElement("td");
                numero_telefonico.textContent = item.numero_telefonico;
                const correo = document.createElement("td");
                correo.textContent = item.correo;
                const cargo = document.createElement("td");
                cargo.textContent = item.cargo;
                const tiempo_experiencia = document.createElement("td");
                tiempo_experiencia.textContent = item.tiempo_experiencia;
                fila.appendChild(nombre_completo);
                fila.appendChild(numero_telefonico);
                fila.appendChild(correo);
                fila.appendChild(cargo);
                fila.appendChild(tiempo_experiencia);
                tbody.appendChild(fila);
            });
        })
        .catch(error => console.error("Error al obtener los datos:", error));
});
