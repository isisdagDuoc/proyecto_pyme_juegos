$(document).ready(
function () {
    $("#formulario").submit(function (event) {
        console.log(event)
        console.log($("#nombre").val())

    event.preventDefault()

    $(".error-message").hide(); 
    $(".form-control").removeClass("is-invalid"); 

    let isValid = true;

    //valida que el input de nombre no quede vacio
    if ($("#nombre").val().trim() === "") {
        $("#nombre").addClass("is-invalid");
        $("#nombre").next(".error-message").text("El nombre es obligatorio.").show();
        isValid = false;
    }

       //valida que el input de usuario no quede vacio
    if ($("#usuario").val().trim() === "") {
        $("#usuario").addClass("is-invalid");
        $("#usuario").next(".error-message").text("El nombre de usuario es obligatorio.").show();
        isValid = false;
    }

    
       //valida que el input de correo no quede vacio
    if ($("#correo").val().trim() === "") {
        $("#correo").addClass("is-invalid");
        $("#correo").next(".error-message").text("El correo electronico es obligatorio.").show();
        isValid = false;
    }

        //valida que el input de contraseña no quede vacio
    if ($("#contraseña").val().trim() === "" || $("#repcontraseña").val().trim() === "" ) {
        $("#contraseña").addClass("is-invalid");
        $("#repcontraseña").addClass("is-invalid");
        $("#contraseña").next(".error-message").text("La contraseña es obligatoria.").show();
        isValid = false;
    }
    
       //valida que el input de fecha nacimiento no quede vacio
     if ($("#fecha_nac").val().trim() === "") {
        $("#fecha_nac").addClass("is-invalid");
        $("#fecha_nac").next(".error-message").text("La fecha de nacimiento es obligatoria.").show();
        isValid = false;
    }

        
       //valida que el input de dirección no quede vacio
    if ($("#direccion").val().trim() === "") {
        $("#direccion").addClass("is-invalid");
        $("#direccion").next(".error-message").text("La dirección es obligatoria.").show();
        isValid = false;
    }

    })

    $("#btnLimpiar").on("click", function () {
        // Limpiar campos
        $("#nombre").val("");
        $("#usuario").val("");
        $("#correo").val("");
        $("#contraseña").val("");
        $("#repcontraseña").val("");
        $("#fecha_nac").val("");
        $("#direccion").val("");
    
        // Quitar clases de error
        $("#nombre").removeClass("is-invalid");
        $("#usuario").removeClass("is-invalid");
        $("#correo").removeClass("is-invalid");
        $("#contraseña").removeClass("is-invalid");
        $("#repcontraseña").removeClass("is-invalid");
        $("#fecha_nac").removeClass("is-invalid");
        $("#direccion").removeClass("is-invalid");

        // Ocultar mensajes de error
        $("#nombre").next(".error-message").hide().text("");
        $("#usuario").next(".error-message").hide().text("");
        $("#correo").next(".error-message").hide().text("");
        $("#contraseña").next(".error-message").hide().text("");
        $("#repcontraseña").next(".error-message").hide().text("");
        $("#fecha_nac").next(".error-message").hide().text("");
        $("#direccion").next(".error-message").hide().text("");
    });
}) 




