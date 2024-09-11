let button = document.getElementsByTagName("button")[0]
let main = document.getElementsByTagName("main")[0]
let fechar = document.getElementById("fechar")
let img = document.getElementById("container-image")

button.addEventListener("click", function(){

    if(img.classList == "desativar-mode"){
        img.classList = "ativar-mode"
        button.style.visibility="hidden"
    }
})

fechar.addEventListener("click", function(){

    if(img.classList == "ativar-mode"){
        img.classList.remove("ativar-mode")
        img.classList.add("desativar-mode")
        button.style.visibility="visible"
    }
})