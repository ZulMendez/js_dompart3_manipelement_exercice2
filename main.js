// Partie 1

// 1
let ajouteTexte = document.querySelectorAll('h1')[0].innerText= 'Les attributs class et id';
console.log(ajouteTexte);

// 2
let ajoute2 = document.querySelectorAll('h2')[0].innerText = 'Exercice 2 partie A';
console.log(ajoute2);

// 3
let ajoute3 = document.querySelectorAll('h2')[1].innerText = 'Exercice 2 partie B';
console.log(ajoute3);

// 4
let ajoute4 = document.querySelectorAll('p')[0].innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>"
console.log(ajoute4);

// 5
let ajoute5 = document.querySelectorAll('p')[1].innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"
console.log(ajoute5);

console.log("___________________________________________________________________________________________");
// Partie 2.1
// 6
let attrib = document.querySelector('h1');
let ajouteA = attrib.setAttribute('id', 'bigTitle');
console.log(attrib);

// 7
let attrib2 = document.querySelectorAll('div')[0];
let ajouteA2 = attrib2.setAttribute('class', 'container');
console.log(attrib2);

// 8
let attrib3 = document.querySelectorAll('h2');
let tab = Array.from(attrib3);

tab.forEach(element => {
    console.log(element.setAttribute('class', 'title'));
});
console.log(tab);

// 9
let attrib4 = document.querySelectorAll('p');
let tab2 = Array.from(attrib4);

tab2.forEach(element => {
    console.log(element.setAttribute('class', 'text'));
});
console.log(tab2);

console.log("___________________________________________________________________________________________");

// Partie 2.2
// 10
let premSect = document.querySelectorAll('section')[0];
let ajA = premSect.setAttribute('class', 'margin-bottom border-black padding');
console.log(premSect);

// 11
let deuxSect = document.querySelectorAll('section')[1];
let ajA2 = deuxSect.setAttribute('class', 'margin-top border-black padding');
console.log(deuxSect);

// 12
let div = document.querySelectorAll('div')[1];
// let ajA3 = div.setAttribute('style', 'bg-red');
div.style.backgroundColor = 'blue';
div.style.border = '10px solid yellow'
div.style.height = '20px';
div.style.width = '20px';
console.log(div);