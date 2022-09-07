function ingresarDatos(){

    let ajax=new XMLHttpRequest();
    let method="POST";
    let URL="../php/ingresarJugador.php?nombre=" + document.getElementById("nombreJugador").value;
    ajax.open(method,URL);
    console.log(URL);
    ajax.send();
    ajax.addEventListener("load",mostrarDatos);

    function mostrarDatos(){
        //let parseado=JSON.parse(ajax.responseText);
        console.log(ajax.responseText);

      }

}