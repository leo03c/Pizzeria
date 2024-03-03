
const form = document.querySelector('#form')

const alerta = document.createElement('DIV')
alerta.classList.add('alerta', 'rounded')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const usuario = document.querySelector('.user')
    const passw = document.querySelector('.pass')
    const boton = document.querySelector('.bot')
    
    const al = document.querySelector('.alerta')
    if(al){
        al.remove()
    }
    if (usuario.value === ''||passw.value==='') {
        console.log('Este campo esta vacio')
        alerta.textContent = 'Ha ocurrido algún error'
        const al = document.querySelector('.exito')
    if(al){
        al.remove()
    }
        alerta.classList.add('error')


    }
    else{
        console.log('todo bien')
        alerta.textContent = 'Todo Correcto'
        const al = document.querySelector('.error')
    if(al){
        al.remove()
    }
        alerta.classList.add('exito')
    }

    form.appendChild(alerta)
    
    console.log(usuario.value)
})

