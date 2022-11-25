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
          Validarmascotas()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function Validarmascotas() {

  let Nombre = document.querySelectorAll("#txtnombre").value;
  let Foto = document.querySelector("#txtimagen").value;
  let Estado = document.querySelector("#txtestado").value;
  let Especie = document.querySelector("#txtespecie").value;
  let Comentario = document.querySelector("#txtcomentario").value;

  console.log("Exportando datos de mascota")
  let url = `http://localhost:3000/mascotas`;
  let datos = {

    Nombre: Nombre,
    Foto: Foto,
    Estado: Estado,
    Especie: Especie,
    Comentario: Comentario


  };

  fetch(url, {
    method: "GET",
    body: JSON.stringify(datos),
    headers: {
      'content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(mensaje => {
      console.log(mensaje)
    })
}
