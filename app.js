// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosDisponibles = [];



function agregarAmigo () {
    let ingreso = document.getElementById("amigo").value;
   
    if (ingreso === "") {
        alert ("Por Favor, ingresar un nombre");
        return;
    }
    
    if (amigos.includes(ingreso)) {
        alert ("El Nombre Ingresado ya está en la lista ");
        limpiar();
        return;
        
    }
    amigos.push(ingreso);
        
    limpiar();
    
    comprobarNumeroAmigos();

    mostrarLista();

    if (amigos.length > 0) {
        document.querySelector(".button-draw").disabled = false;
    }
    
}

function limpiar () {
    document.getElementById("amigo").value = "";

}

function comprobarNumeroAmigos () {
    let numeroAmigos= amigos.length
    let resto = numeroAmigos % 2
              
    if (resto !==0)
       return alert ("Ingrese un nombre más para que todos tengan un Amigo Secreto");
} 


function mostrarLista () {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for ( let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
        
    }
}

function empezarSorteo () {
     if (amigos.length === 0) {
        alert ("La lista está vacía")
        return
     }
        amigosDisponibles = [...amigos];
        
        
    }
        
function sortearAmigo () {
    
    if (amigosDisponibles.length === 0) {
        empezarSorteo()
      
        
    }

    let indiceSorteado = Math.floor(Math.random()*amigosDisponibles.length);
    let amigoSorteado = amigosDisponibles[indiceSorteado];

    document.getElementById("resultado").textContent = `El Amigo Sorteado es: ${amigoSorteado}`; 
        
    amigosDisponibles.splice(indiceSorteado,1);

    if (amigosDisponibles.length === 0) {
        alert(" Todos los amigos han sido sorteados");
    
     reiniciarJuego()
    }
    
      
    }
    
function reiniciarJuego () {
    amigos =[];
    amigosDisponibles =[];
    document.getElementById("resultado").textContent = "";
    document.getElementById("listaAmigos").innerHTML = "";
    
    limpiar();

    document.querySelector(".button-draw").setAttribute("disabled","true");

    
    
}
