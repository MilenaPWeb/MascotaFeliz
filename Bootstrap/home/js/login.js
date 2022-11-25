function login(){
    let usuario = document.querySelector("#usuario").value;
    let contrasena = document.querySelector("#password").value;

    console.log(usuario);
    console.log(contrasena);
    let url = `http://localhost:3000/identificarUsuarios`;
    let datos = {
        Usuario:usuario,
        Contrasena:contrasena
    };
    console.log(datos)
    fetch(url, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(mensaje => {
            console.log(mensaje)
            if (mensaje.tk){
                if(mensaje.datos.Rol==="Cliente" ){
                location.replace("http://127.0.0.1:5500/Bootstrap/home/Cliente.html")
                              
                }
                if(mensaje.datos.Rol==="Vendedor" ){
                location.replace("http://127.0.0.1:5500/Bootstrap/home/vendedor.html")

                }

                if(mensaje.datos.Rol==="Administrador" ){
                location.replace("http://127.0.0.1:5500/Bootstrap/home/Administrador.html")  

                }
                
            }else{
                
                console.log("Error")
                location.replace("http://127.0.0.1:5500/Bootstrap/home/error.html")
            }
        })

}
