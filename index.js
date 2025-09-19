
const container = document.querySelector("#container")
const btn = document.querySelector('#generate')

btn.addEventListener('click', ()=>{
    let numberOfSquare = parseInt(prompt("Enter the number of square per side:"),10)
    container.innerHTML = ""

    if(numberOfSquare > 100) {
        numberOfSquare = 100
        alert("Maximum square per side allowed is 100 ! I have set it to 100.")
    }
    
    for(let i = 0; i < numberOfSquare; i++) {
        for(let n = 0; n < numberOfSquare; n++) {
            const div = document.createElement("div")
            div.style.width = 960/numberOfSquare
            div.style.height = 960/numberOfSquare
            div.classList.add("square")
            container.appendChild(div)    
        }
    }
})

for(let i = 0; i < 16; i++) {
    for(let n = 0; n < 16; n++) {
        const div = document.createElement("div")
        div.style.width = 960/16
        div.style.height = 960/16
        div.classList.add("square")
        container.appendChild(div)    
    }
}


