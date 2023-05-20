let boton=document.getElementById("enviar");
boton.addEventListener("click", (e)=>{
    e.preventDefault()
    let nombre=document.getElementById("nombre").value;
    let edad= document.getElementById("edad").value;
    let disca=document.getElementById("selector").value;
    
    document.getElementById("cuerpo").innerHTML += `<tr>
    <td>${nombre}</td>
    <td>${edad}</td>
    <td>${disca}</td>
</tr>`

})