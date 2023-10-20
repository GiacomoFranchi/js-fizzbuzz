let msg ="";

const row = document.querySelector('.row')
let gridString= "";


for (let i = 1; i <= 100 ; i++){
    if ((i % 3) === 0 && (i % 5) === 0){
        msg = "FizzBuzz"
    } else if ((i % 3) === 0){
        msg = "Fizz"
    } else if ((i % 5) === 0){
        msg = "Buzz"
    } else {
        msg = i
    }
    gridString += `<div class="square">${msg}</div> `
}

row.innerHTML = gridString;