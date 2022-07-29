let button = document.getElementById("przycisk")

button.onclick = function () {
    
let imieINP = document.getElementById("name").value


let paragraf1 = document.getElementById("name-par")
paragraf1.textContent = (imieINP);

let surnameINP = document.getElementById("surname").value


let paragraf2 = document.getElementById("surname-par")
paragraf2.textContent = (surnameINP);

let phoneINP = document.getElementById("telephone").value


let paragraf3 = document.getElementById("phone-par")
paragraf3.textContent = (phoneINP);

}

