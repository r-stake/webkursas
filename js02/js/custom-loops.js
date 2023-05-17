console.log("");
console.log("-------------------------------------------------------------------------------------------------------------------");
console.log("Custom-loops sprendimai:");
console.log("-------------------------------------------------------------------------------------------------------------------");
console.log("");

/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
console.log("Užduotis 01:");

for (i = 0; i < 10; i++) {
    console.log("Labas");
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
console.log("");
console.log("Užduotis 02:");


for (i = 0; i <= 9; i++) {
    console.log(i);
}

/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
console.log("");
console.log("Užduotis 03:");

let augalai = ["beržas", "sultenė", "morka", "pomidoras", "neumžmirštuolė", "asiūklis", "kaktusas", "žirnelis", "citrinmedis", "žolė"];

console.log(augalai);

/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
console.log("");
console.log("Užduotis 04:");

for (let i = 0; i < augalai.length; i++) {
    console.log(augalai[i]);
}

/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
console.log("");
console.log("Užduotis 05:");

for (let i = augalai.length - 1; i >= 0; i--) {
    console.log(augalai[i]);
}

/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
console.log("");
console.log("Užduotis 06:");

for (i = 10; i <= 50; i+=2) {
    console.log(i);
}

/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
console.log("");
console.log("Užduotis 07:");

for (i = 10; i <= 50; i+=2) {
    if (i % 10 == 0) {
        continue;   
    }
    else {
        console.log(i)
    }
}

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

console.log("");
console.log("Užduotis 08:");

let kiekKartuPorinis = 0;
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        kiekKartuPorinis++;
    }
}

console.log(kiekKartuPorinis);

/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

let trumpesniNeiPenki = 0;
let ilgesniNeiSeptyni = 0;

for (let i = 0; i < augalai.length; i++) {
    if (augalai[i].length < 5) {
        trumpesniNeiPenki++;
    }
    else if (augalai[i].length > 7) {
        ilgesniNeiSeptyni++
    }
}

console.log("Žodžai trumpesni nei 5 simboliai: " + trumpesniNeiPenki);
console.log("Žodžai ilgesni nei 7 simboliai: " + ilgesniNeiSeptyni);

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/