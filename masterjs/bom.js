var caja = document.getElementById("micaja");
caja.innerHTML;

caja.style.background = "red";
caja.style.width = "20%";
console.log(caja);


//elementos por su etiqueta

let todoslosdivs = document.getElementsByTagName("div")
todoslosdivs[2].style.background = "orange"
console.log(todoslosdivs);

function estilos(estilos, color) {
    estilos.style.background = color;
    estilos.style.width = "20%";

}

function mostrartexto(todos) {
    return todos.innerHTML;
}
estilos(todoslosdivs[2], "green")
console.log(mostrartexto(todoslosdivs[2]));
/* todoslosdivs.forEach(valor, indice => { */
let valor;
for (valor in todoslosdivs) {
    if (typeof todoslosdivs[valor].textContent == 'string')
        let parrafo = document.createElement("p");
    let texto = document.createTextNode(todoslosdivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo)

};