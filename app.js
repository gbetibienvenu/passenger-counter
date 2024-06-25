// document.getElementById("count-el").innerText = 5
// let count = 5
// count = count + 1
// console.Log(count)

// function increment(){
//     console.log("The button was click")
// }
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36


// sum = lap1 + lap2 + lap3
// console.log(sum)


// let lapCompeted = 0
// function countdown() {
//     lapCompeted +=1
// }
// countdown()
// countdown()
// countdown()
// countdown()
// console.log(lapCompeted)
// let countEl = document.getElementById("count-el") 
// let count = 0
// console.log(countEl)

// function increment () {
//     count = count + 1
//     countEl.innerText = count
//     // console.log(count)
// }
// function save(){
//     console.log(count)
// }
// save()


// // Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")

// // Create two variables (name & greeting) that contains your name
// // and the greeting we want to render on the page
// let name = "Bienvenu Gbeti "
// let greeting = "Hello welcome to my page here!"
// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerHTML = name + "," +  greeting + "!"

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment(){
    count += 1
    countEl.textContent = count 
 }

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0  // Reset the count to zero
    countEl.textContent = count  // Update the displayed count
    console.log(count)
}





