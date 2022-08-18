let button = document.querySelector("button")

let container = document.querySelector('.container')

let text = document.querySelector('h1')

let Throttle=(funs,wait)=>{
    let Time = true
return (...args)=>{
     if(Time){
         funs(...args)
         Time = false

         setTimeout(()=>{Time=true},wait)

     }


}

    
}
button.addEventListener("click",Throttle((e)=>{
    let color1 =Math.floor( Math.random()*256)
    let color2 = Math.floor( Math.random()*256)
    let color3 =Math.floor( Math.random()*256)
    container.style.backgroundColor = `rgb(${color1},${color2},${color3})`
    text.classList.add("show")
    setTimeout(()=>{text.classList.remove("show")},5000)
},1000))

