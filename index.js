
const container = document.querySelector("#container")

for(let i = 0; i < 16; i++) {
    for(let n = 0; n < 16; n++) {
        const div = document.createElement("div")
        div.classList.add("square")
        container.appendChild(div)    
    }
}


