const cars =[];
cars[0] = " camry ";
cars[1] = " lexus ";
cars[2] = " toyota ";
document.getElementById("array").innerHTML = cars;

/*convert array to string*/
const fruits = ["Banana", "Orange", "grapes"];
document.getElementById("string").innerHTML= fruits.toString();
/* lenght of an array */
const fruit = ["Banana", "Orange", "Grapes", "Lemon", "Apple"];
document.getElementById("arraylenght").innerHTML = fruit instanceof Array;
/*Accessing array elements */
document.getElementById("access").innerHTML= fruit[0];
const vegetables = ["pumkin", "green", "waterleaf", "bitter leaf"];
document.getElementById("last").innerHTML = vegetables[vegetables.length-1];
/*looping array elements*/
const animals = ["Cat", "Dog", "Goat", "Cow"];
let len = animals.length;
let text = "<ul>"
for(let i = 0; i < len; i++){
    text += "<li>" + animals[i] + "</li>"
}
text+= "</ul>"
document.getElementById("loop").innerHTML= text;
/* Adding array elements*/
const protein = ["Fish", "Egg", "beans"];
document.getElementById("addItem").innerHTML= protein;
function addElement(){
    protein[protein.length] = "Milk";
    document.getElementById("addItem").innerHTML= protein;
}

const myGirls = ["Favour", "Mmesoma", "Rose"];
const myBoys = ["Somto", "Chiamso", "Ifes"];
const myChildren = myGirls.concat(myBoys);
document.getElementById("concat").innerHTML = myChildren;

const boys = ["Fide", "Isaac", "Sam"];
document.getElementById("boys").innerHTML= boys;
boys.splice(2,0, "Oma","Kosara")
document.getElementById("update").innerHTML = boys;

/*Array sort*/
const myFruits = ["Orange", "Banana", "Mango", "Apple"];
document.getElementById("fruits").innerHTML = myFruits;
myFruits.sort();
myFruits.reverse();
document.getElementById("sort").innerHTML = myFruits;

const points = [40,100,1,5,25,10];
document.getElementById("number").innerHTML = points;
points.sort(function(a,b){return a - b});
points.reverse(function(a,b){return a - b});
document.getElementById("sortno").innerHTML = points;