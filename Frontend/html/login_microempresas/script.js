document.addEventListener('DOMContentLoaded', async () => {
    const loginForm = document.getElementById('loginForm');
    const consultLearners = "../consulta_tabla_expert/consulta_tabla_ex.html"
    async function cargardatoslogin(data) {
        if (sessionStorage.getItem('usuario')) {
            alert('El usuario ya tiene una sesión abierta');

        } else {
            sessionStorage.setItem('usuario', JSON.stringify(data))
        }
        window.location.href = consultLearners
    }
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;
        fetch(`http://20.42.62.120:3007/micronegocio/${usuario}/${password}`)
            .then(response =>
                response.json()).then(data => {
                    if (data !== false) {
                        cargardatoslogin(data);
                    } else {
                        alert("El usuario o contraseña son incorrectos o no existe.")
                    }
                });
    });
    async function nameUserLoginFunc() {
        if (sessionStorage.getItem('usuario')) {
            alert("Ya tiene una sesión abierta");
            window.location.href = consultLearners
        }
    }
    nameUserLoginFunc()
});
