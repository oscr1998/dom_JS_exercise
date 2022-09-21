console.log('Hello, you found me!')
const helpers = require("./helpers");
const mode = require("./mode");
const { konami } = require("./konami")

let dark = true;

function initBindings(){
    let modeBtn = document.getElementById('switch-mode');
    let deleteBtns = document.querySelectorAll('.delete-btn');
    let addItemBtn = document.getElementById('add-item');

    modeBtn.addEventListener('click', () => {
        dark = mode.switchMode(dark)
    })
    
    deleteBtns.forEach(btn => { btn.addEventListener('click', helpers.deleteItem)});
    addItemBtn.addEventListener('click', helpers.addItem);
    document.addEventListener('keydown', konami)
}

// H1 tag to change bg colour on mouse click, and return when mouse not over

var header = document.querySelector("header");
console.log(header)
var headingOne = document.getElementById('heading');
console.log(headingOne)

console.log("Test")

headingOne.addEventListener('click', () => {
    headingOne.innerText = "Test"
    headingOne.style.fontSize = '110px'
    header.style.backgroundColor = 'red'
})

headingOne.addEventListener('mouseout', () => {
    headingOne.innerText = "Test"
    headingOne.style.fontSize = '90px'
    header.style.backgroundColor = 'blue'
})

// H2 Greeting on hover

var headerTwo = document.querySelector('h2')

headerTwo.addEventListener('mouseover', () => {
    // headerTwo.innerText = "Greeting!"
    headerTwo.innerHTML = "Greetings!"
})

// New paragraph on key press

//document.addEventListener('keydown', child paragraph thing)
var div = document.querySelector('div');

document.addEventListener('keypress', (keyPress) => {
    const paragraph = document.createElement("p")
    paragraph.innerHTML = `${keyPress.key}`;
    div.appendChild(paragraph)
})

// window.addEventListener('keydown', function (e) {
//     document.querySelector('p').innerHTML = `You pressed ${e.key}`;
//   }, false);

initBindings();
helpers.darkMode();
