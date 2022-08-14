const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstpass = document.getElementById("firstPass")
let secondpass = document.getElementById("secondPass")
const generateEl = document.getElementById("generate-el")


generateEl.addEventListener("click", function(){
let firstass = ""
let secondass = ""
    do {
let i = Math.floor(Math.random()*characters.length)
    firstass += characters[i]
} while (firstass.length < 15);
firstpass.innerText = firstass

do {
let i = Math.floor(Math.random()*characters.length)
    secondass += characters[i]
} while (secondass.length < 15);
console.log(secondass)
secondpass.innerText = secondass

}
)
// two copy buttons
// secondpass.addEventListener("click", function(){
//     let copiedtext2 = secondpass.textContent
//     navigator.clipboard.writeText(copiedtext2.textContent);
//     alert("Copied the text: " + copiedtext2.textContent);
//     })
// secondpass.addEventListener("click", function(){
//     let copiedtext1 = JSON.parse(firstpass.textContent)
//     window.prompt("Copy to clipboard: Ctrl+C, Enter", copiedtext1);
//     })







