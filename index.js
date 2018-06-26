const button1 = document.querySelector('button')
const button2 = document.querySelector('#r')
const statement1 = document.querySelector('h1')
const statement2 = document.querySelector('#mc')
var one_clicked = false
var two_clicked = false

function check(){
    const heading = document.querySelector('h3')
    const first = document.myform.firstname.value
    const last = document.myform.lastname.value
    heading.textContent = 'Hello ' + first +' '+ last + '!!!'
    const output = document.querySelector('#userOutput')
    const camel = first.toLowerCase() + last.charAt(0).toUpperCase() + last.substr(1, last.length).toLowerCase()
    const rev = reverseString(last).toLowerCase() + reverseString(first).toLowerCase()
    output.textContent = 'Your camelCase is ' + camel + ' and your reverse is ' + rev;
}

function reverseString(str) {
    var split = str.split("");
    var rev = split.reverse();
    var join = rev.join("");
    return join;
}

function cc() {
    if (one_clicked) {
        statement1.textContent = 'chrismess'
        button1.textContent = 'camelCase'
        one_clicked = false
    } else {
        statement1.textContent = 'chrisMess'
        button1.textContent = 'unCamelCase'
        one_clicked = true
    }
 }

 function reverse() {
    if (two_clicked) {
        statement2.textContent = 'chrismess'
        button2.textContent = 'reverse'
        two_clicked = false
    } else {
        statement2.textContent = 'ssemsirhc'
        button2.textContent = 'unreverse'
        two_clicked = true
    }
 }
 

button1.addEventListener('click', cc)
button2.addEventListener('click', reverse)