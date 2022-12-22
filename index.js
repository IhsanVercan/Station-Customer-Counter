let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countDash = count + " - "
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0
}



































//ctrl + k+c = comment all chosen lines.!!!!!!!!!!!!!!!!!!!!!!!!

//document.getElementById("count").innerText = 5
      

//let myAge = 25;
//console.log(myAge);



// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// let myAge = 25
// let humanDogRatio = 7
// let myDogsAge = myAge * humanDogRatio
// console.log(myDogsAge);
//let myAge = 25;
//console.log(myAge);
// function increment() {
//     console.log("The button was clicked")
// }
// SASS 
// Web Pack
// Tailwind
// TypeScript
// Redux
// Next,js
// Agile/Scrum
//ctrl + k+c = comment all chosen lines