let a = document.querySelectorAll("a.header")
let parents = document.querySelectorAll('.text')

let isClosed = []
parents.forEach((element, index) => {
    isClosed[index] = true;
})

a.forEach((element, index) => {
    element.addEventListener("click", function (event) {
        event.preventDefault()
        if (isClosed[index]) {
            isClosed[index] = false
            parents[index].classList.add("choise")
            parents.forEach((element2, index2) => {
                if (index2 != index) {
                    parents[index2].classList.remove("choise")
                    isClosed[index2] = true
                }
            })
        }
        else {
            isClosed[index] = true
            parents[index].classList.remove("choise")
        }
        console.log(isClosed)
    })
})
