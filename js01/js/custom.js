let num = 6 + 4;
let vcs = "Labas";
let relationship = (vcs == num);
console.log(num + ", " + vcs + ", " + typeof(vcs) + ", " + relationship);
console.log(`${num}, ${vcs}, ${typeof(vcs)}, ${relationship}`);
console.log("skaicius: " + num)
console.log(`Skaicius: ${num}`)

let firstName = "Ričardas";
let lastName = "Stakė";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Komentaras

let tekstas = "Pirmas";

console.log(tekstas.length);

console.log(tekstas.toUpperCase());

console.log(tekstas.toLowerCase());

console.log(tekstas.charAt(1));

console.log(tekstas.indexOf("m"));

tekstas = "Čia gali būti Jūsų reklama";

console.log(tekstas.replace("gali būti", "yra"));

console.log(tekstas.substring(4,14));
console.log(tekstas.substring(14));

console.log(tekstas.substr(4,9));

let x = 6.34;
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));

let y = 5.8;
let z = 9;

console.log(Math.max(x, y, z));
console.log(Math.min(x, y, z));

let i = Math.round(Math.random() * 30); // nuo 0 iki 30
console.log("Random: " + i);


// Math.random() * (max - min + 1) + min
// Sugeneruos atsitiktinį skaičių nuo 10 iki 50
let a = Math.floor(Math.random() * (50 - 10 + 1) + 10); // nuo 10 iki 50
console.log(a);

let number = 1;
console.log(number);
console.log(number + 1);

while (number <= 10) {
    console.log(number);
    number++;
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let suma = 0;

for (let i = 0; i < 5; i++) {
    suma += i;
}
console.log(suma);

// i    = 0, 1, 2, 3, 4, 5.
// suma = 0, 1, 3, 6, 10, 10.

let sum = 0;
let skaiciai = [10, 20, 30, 40, 50, 60, 70, 80];
for (let i = 0; i < skaiciai.length; i++) {
    sum += skaiciai[i];
}
console.log(sum);

// i = 0, 1, 2, 3, 4, 5, 6, 7
// reiksme = 10, 20, 30, 40, 50, 60, 70, 80
// sum = 10, 30, 60, 100, 150, 210, 280, 360

// alert("Labas rytas!");

// confirm("Spresim užduotis?");

// prompt("Koks tavo vardas?");

// let turimVarda = false;

// while (turimVarda == false) {
//     let userVardas = prompt("Koks tavo vardas?");
// if(userVardas) {
//     if(confirm(`Ar tikrai tavo vardas ${userVardas}?`)) {
//         alert(`Labas, ${userVardas}!`);
//         turimVarda = true;
//     } else {
//         alert("Bandyk dar kart.");
//     }
// } else {
//     alert("bakdyk dar kart.");
// }

// }

let studentai = ["Lukas", "Kęstutis", "Silvija", "Uršulė", "Laurynas"];
console.log(studentai);

studentai.pop();
console.log(studentai);

studentai.push("Artūras");
console.log(studentai);

let pirmasMasyvas = ["Šeši", 5, "Žuvis", "Trylika"];
let antrasMasyvas = ["Raudonas", "Mėlynas", "Geltonas", "Žalias"];
let masyvuMasyvas = [pirmasMasyvas, antrasMasyvas];

console.log(masyvuMasyvas);

console.log(masyvuMasyvas[0][3]);
