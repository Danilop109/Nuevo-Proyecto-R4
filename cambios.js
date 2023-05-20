let boton=document.getElementById("enviar");
boton.addEventListener("click", (e)=>{
    e.preventDefault()
    let nombre=document.getElementById("nombre").value;
    let edad= document.getElementById("edad").value;
    let disca=document.getElementById("selector").value;
    let cuerpo=document.getElementById("cuerpo");
    
    let simulado= `<tr>
    <td>${nombre}</td>
    <td>${edad}</td>
    <td>${disca}</td>
</tr>`
cuerpo.innerHTML += simulado

document.getElementById("nombre").value= "";
document.getElementById("edad").value= "";
document.getElementById("selector").value= "";

})