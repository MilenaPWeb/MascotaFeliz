// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
            EnviarContacto()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  function EnviarContacto() {
    let Nombre = document.querySelector("#txtnombrecont").value;
    let Apellido = document.querySelector("#txtapellidocont").value;
    let Celular = document.querySelector("#txttelcont").value;
    let Correo = document.querySelector("#txtcorreocont").value;
    let Comentario = document.querySelector("#txtmensajecont").value;
    
  console.log("Se esta registrando persona")
    let url = `http://localhost:3000/prospectos`;
    let datos = {
    
      Nombre: Nombre,
      Apellido: Apellido,
      Correo: Correo,
      Celular: Celular,     
      Comentario: Comentario
  
  
    };
  
    fetch(url,{
      method: "POST",
      body: JSON.stringify(datos),
      headers:{
        'content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje)
    })
  
  }
  