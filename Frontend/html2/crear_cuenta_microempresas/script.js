document.addEventListener('DOMContentLoaded', async () => {
    const href_login_microempresas = "../login_microempresas/login_MicroEmpresas.html"
    const consultLearners = "../consulta_tabla_micron/consulta_tabla_micron.html"
    async function nameUserLoginFunc() {
        if (sessionStorage.getItem('usuario')) {
            alert("Ya tiene una sesión abierta");
            window.location.href = consultLearners
        }
    };
    nameUserLoginFunc()
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;
        const correo = document.getElementById('correo').value;
        const campo = document.getElementById('campo').value;
        const tiempo_en_mercado = document.getElementById('tiempo_en_mercado').value;
        const vacantes = document.getElementById('vacantes').value;
        const response = await fetch('http://localhost:3007/micronegocio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: usuario,
                password: password,
                correo: correo,
                campo: campo,
                tiempo_en_mercado: tiempo_en_mercado,
                vacantes: vacantes
            })
        });
        if (response.ok) {
            alert("Microempresa registrada");
            window.location.href = href_login_microempresas;
        }
    });
});
