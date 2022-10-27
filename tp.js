function resultadoprecio() {
    let cantidadt = parseInt(document.getElementById("cantidad").value);
    let categoria = document.getElementById("categoria").value;
    let resultado = 0;
    let ticket = 200;

    console.log(resultado);
    console.log(cantidadt);
    console.log(typeof(cantidadt));
    console.log(categoria);
    console.log(ticket);

    if(categoria == "Estudiante"){
        resultado = ticket * cantidadt;
        resultado = resultado - (resultado * (80 / 100));
        console.log(resultado);
    }
    else if(categoria == "Trainee"){
        resultado = ticket * cantidadt;
        resultado = resultado - (resultado * (50 / 100));
        console.log(resultado);
    }
    else if(categoria == "Junior"){
        resultado = ticket * cantidadt;
        resultado = resultado - (resultado * (15 / 100));
        console.log(resultado);
    }

    document.getElementById("resultado").innerHTML="Total a Pagar: $"+resultado+"";
}

function borrar(){
    document.getElementById("resultado").innerHTML="Total a Pagar: $";
    document.getElementById("cantidad").value="";
}