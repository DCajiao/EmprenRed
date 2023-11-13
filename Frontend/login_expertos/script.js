document.addEventListener('DOMContentLoaded', async () => {
    const loginForm = document.getElementById('loginForm');
    const consultLearners = "../consulta_tabla_micron/consulta_tabla_micron.html"
    
    async function cargardatoslogin(data) {
        if (sessionStorage.getItem('usuario')) {
            alert('El usuario ya tiene una sesión abierta');
        } else {
            sessionStorage.setItem('usuario', JSON.stringify(data))
        }
        window.location.href = './consulta_tabla_micron/consulta_tabla_micron.html'
    }
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;
        fetch(`http://localhost:3008/experto/${usuario}/${password}`)
            .then(response =>
                response.json()).then(data => {
                    if (data !== false) {
                        console.log(data);
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
