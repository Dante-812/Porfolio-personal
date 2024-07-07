const formulario = document.querySelector(".formu-presu");



const datos = {
    empresa:'',
    tipologia:'',
    front:'',
    back:'',
    tipo:'',
    web:'',
    descripcion:''
}
const empresa = document.querySelector('#empresa');
const web = document.querySelector('#web');
const descripcion = document.querySelector('#descripcion');



empresa.addEventListener('input',leerTexto)
web.addEventListener('input',leerTexto)
descripcion.addEventListener('input',leerTexto)

function leerTexto (e){
    datos[e.target.id] = e.target.value;
    console.log(e)
}


formulario.addEventListener('submit',function(e){
    e.preventDefault();

    // Comprobar que no haya campos de datos vacios
    const {empresa,
    front,
    back,
    tipo,
    web,
    descripcion} = datos;



    // Si un campo esta vacio, mostrar error
if(empresa === "" || web === "" || descripcion === ""){
    // const hayError= true;
    // mostrarError("Todos los campos son obligatorios");
    mensajeEnviar("Todos los campos son obligatorios", 'error')
    return;
}
    // Si todo esta correcto enviar y mostrar mensaje de enviado
    // const hayError= false;
    // mostrarMensaje("Mensaje enviado correctamente")
    mensajeEnviar("Mensaje enviado correctamente", 'ok')
})

const mensajeEnviar = (mensaje, clase) =>{
    const mostrar = document.createElement('p')
    mostrar.textContent = mensaje;
    mostrar.classList.add(clase);
    formulario.appendChild(mostrar);
    setTimeout(()=>{
        mostrar.remove()
        },2000)
    }