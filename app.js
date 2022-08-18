let input = document.querySelector("#debounce")

let contant = document.querySelector("#contant")

let Debounce=(func,wait)=>{
    let Timeout

    return (...args)=>{
        if(Timeout) {clearTimeout(Timeout)

        Time = setTimeout(()=>func(...args),wait)}
    }

}

input.addEventListener("keydown",Debounce( (e) =>{
contant.value = e.target.value},1000)

)











