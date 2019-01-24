//Information typed into the field will be be stored in this variable
let field = document.getElementById("browserEvent")

//EventListener will use these variables to insert/mirror text from the field
let articleOne =document.getElementById("articleOne")
let articleTwo =document.getElementById("articleTwo")

//addEventListener will mirror the information that is stored in the variable field and insert to both articles
field.addEventListener("keyup", function (event) {
    articleOne.innerHTML = event.target.value
    articleTwo.innerHTML = event.target.value
})
