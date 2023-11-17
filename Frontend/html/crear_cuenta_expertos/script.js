document.addEventListener('DOMContentLoaded', async () => {
    const href_login_expertos = "../login_expertos/login_Expertos.html"
    const consultLearners = "../consulta_tabla_expert/consulta_tabla_ex.html"
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
        const nombre_completo = document.getElementById('nombre_completo').value;
        const numero_telefonico = document.getElementById('numero_telefonico').value;
        const correo = document.getElementById('correo').value;
        const cargo = document.getElementById('cargo').value;
        const tiempo_experiencia = document.getElementById('tiempo_experiencia').value;
        const response = await fetch('http://20.42.62.120:3008/experto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: usuario,
                password: password,
                nombre_completo: nombre_completo,
                numero_telefonico: numero_telefonico,
                correo: correo,
                cargo:cargo ,
                tiempo_experiencia: tiempo_experiencia
            })
        });
        if (response.ok) {
            alert("Experto registrado");
            window.location.href = href_login_expertos;
        }
    });
    
});
