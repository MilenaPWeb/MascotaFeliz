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
            registrarproducto()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  function registrarproducto() {
    let Tipo = document.querySelector("#txttipo").value;
    let Nombre =document.querySelector("#txtnombre").value;
    let Descripcion = document.querySelector("#txtdescripcion").value;
    let Precio = document.querySelector("#txtprecio").value;

  
   console.log("Se esta registrando producto")
      let url = `http://localhost:3000/productos-servicios`;
      let datos = {
      
      Tipo: Tipo,
      Nombre: Nombre,
      Descripcion: Descripcion,
      Precio: Precio
    
     
     
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
  