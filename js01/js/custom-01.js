/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/
console.log("Custom-01 sprendimai:");
console.log("");
/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
console.log("Užduotis 01:");


let firstName2 = "Ričardas";
let lastName2 = "Stakė";
const birthYear = 1990;
let currentYear = new Date().getFullYear()

console.log("Aš esu " + firstName2 + " " + lastName2 + ". " + "Man yra " + (currentYear - birthYear) + " metai." );



/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
console.log("");
console.log("Užduotis 02:");

let num1 = Math.random() * (4 - 0 + 1) + 0;
let num2 = Math.random() * (4 - 0 + 1) + 0;

console.log("Num1: " + num1);
console.log("Num2: " + num2);

if (num1 == 0 && num2 == 0) {
    console.log("Dalyba negalima");
}
else if (num1 >= num2) {
    console.log(num1 + " / " + num2 + " = " + (num1 / num2).toFixed(2));
}
else {
    console.log(num2 + " / " + num1 + " = " + (num2 / num1).toFixed(2));
}


/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
console.log("");
console.log("Užduotis 03:");

let num3 = Math.round(Math.random() * 25);
let num4 = Math.round(Math.random() * 25);
let num5 = Math.round(Math.random() * 25);

// let num3 = 1;
// let num4 = 2;
// let num5 = 2;

console.log(num3 + ", " + num4 + ", " + num5)
if (num3 == num4 && num4 == num5) {
    console.log("Visos reikšmės vienodos");
}
else if (num3 == Math.min(num3, num4, num5)) {
    console.log("1-A");
    if (num5 == Math.max(num4, num5)) {
        console.log("1-B");
        console.log(num4);
    }
    else if (num4 == Math.max(num4, num5)) {
        console.log("1-C");
        console.log(num5);
    }
}
else if (num4 == Math.min(num4, num5)) {
    console.log("2-A");
    if (num3 == Math.max(num3, num5)) {
        console.log("2-B");
        console.log(num5);
    }
    else {
        console.log("2-C");
        console.log(num3);
    }
}
else {
    if (num3 == Math.max(num3, num4)) {
        console.log("3-A");
        console.log(num4);
    }
    else if (num4 == Math.max(num3, num4)) {
        console.log("3-B");
        console.log(num3);
    }
}

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
console.log("");
console.log("Užduotis 04:");

let kr1 =  Math.floor(Math.random() * (10 - 1 + 1) + 1);
let kr2 =  Math.floor(Math.random() * (10 - 1 + 1) + 1);
let kr3 =  Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log("kr1: " + kr1);
console.log("kr2: " + kr2);
console.log("kr3: " + kr3);

if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
    console.log("Trikampį suformuoti galima :)")
}
else {
    console.log("Trikampio suformuoti negalima :/")
}


/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
console.log("");
console.log("Užduotis 05:");

let num6 = Math.round(Math.random() * 2);
let num7 = Math.round(Math.random() * 2);
let num8 = Math.round(Math.random() * 2);
let num9 = Math.round(Math.random() * 2);
console.log(num6 + ", " + num7 + ", " + num8 + ", " + num9);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;


// num6 skaičiavimas
if (num6 == 0) {
    nuliai++;
}
else if (num6 == 1 ) {
    vienetai++;
}
else {
    dvejetai++;
}


// num7 skaičiavimas
if (num7 == 0) {
    nuliai++;
}
else if (num7 == 1 ) {
    vienetai++;
}
else {
    dvejetai++;
}

// num8 skaičiavimas
if (num8 == 0) {
    nuliai++;
}
else if (num8 == 1 ) {
    vienetai++;
}
else {
    dvejetai++;
}

// num9 skaičiavimas
if (num9 == 0) {
    nuliai++;
}
else if (num9 == 1 ) {
    vienetai++;
}
else {
    dvejetai++;
}

console.log("Nuliai: " + nuliai);
console.log("Vientai: " + vienetai);
console.log("Dvejetai: " + dvejetai);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
console.log("");
console.log("Užduotis 06:");


let num10 = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
let num11 = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
let num12 = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));

console.log(num10 + ", " + num11 + ", " + num12);
// num10
if (num10 < 0) {
    console.log("[" + num10 + "]")
}
else if (num10 == 0) {
    console.log("(" + num10 + ")")
}
else {
    console.log("{" + num10 + "}")
}

// num11
if (num10 < 0) {
    console.log("[" + num11 + "]")
}
else if (num10 == 0) {
    console.log("(" + num11 + ")")
}
else {
    console.log("{" + num11 + "}")
}

// num12
if (num10 < 0) {
    console.log("[" + num12 + "]")
}
else if (num10 == 0) {
    console.log("(" + num12 + ")")
}
else {
    console.log("{" + num12 + "}")
}

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
console.log("");
console.log("Užduotis 07:");

let kiekis = Math.floor(Math.random() * (3000 - 5 + 1) + 5);
console.log(kiekis);

if (kiekis <= 1000) {
    console.log("Kaina: " + kiekis);
}
else if (kiekis > 1000 && kiekis <= 2000) {
    console.log("Kaina: " + (kiekis - (kiekis * 0.03)));
}
else if (kiekis > 2000) {
    console.log("Kaina: " + (kiekis - (kiekis * 0.04)));
}

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
console.log("");
console.log("Užduotis 08:");

let num13 = Math.round(Math.random() * 100);
let num14 = Math.round(Math.random() * 100);
let num15 = Math.round(Math.random() * 100);

let suma1 = 0;
let skaicius = 0;

console.log(num13 + ", " + num14 + ", " + num15);

console.log("Vidurkis: " + Math.round((num13 + num14 + num15) / 3));

if (num13 >= 10 && num13 <= 90) {
    suma1 += num13;
    skaicius++;
}
if (num14 >= 10 && num14 <= 90) {
    suma1 += num14;
    skaicius++;
}
if (num15 >= 10 && num15 <= 90) {
    suma1 += num15;
    skaicius++;
}
console.log("Skaičius: " + skaicius);
console.log("Suma atmetus netinkamas reikšmes: " + suma1);
console.log("Vidurkis atmetus netinkamas reikšmes: " + Math.round((suma1 / skaicius)));

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
console.log("");
console.log("Užduotis 09:");

let valandos1 = Math.round(Math.random() * 2);
let valandos2 = Math.round(Math.random() * 3);
let minutes1 = Math.round(Math.random() * 5);
let minutes2 = Math.round(Math.random() * 9);
let sekundes1 = Math.round(Math.random() * 5);
let sekundes2 = Math.round(Math.random() * 9);

// let valandos1 = 2
// let valandos2 = 3
// let minutes1 = 5
// let minutes2 = 9
// let sekundes1 = 5
// let sekundes2 = 9

let papildomosSekundes = Math.round(Math.random() * 300);
// let papildomosSekundes = 300;
console.log("Papildomos sekundes :" + papildomosSekundes);
// Pirminis laikas
console.log("Laikas: " + valandos1 + valandos2 + ":" + minutes1 + minutes2 + ":" + sekundes1 + sekundes2);


let pridedamosMinutes = Math.floor(papildomosSekundes / 60);
let pridedamosSekundes = 0;
let pridedamosMinutesDesimtys = 0;
console.log("");

if (papildomosSekundes >= 60) {
    papildomosMinutes = Math.floor(papildomosSekundes / 60);
    pridedamosSekundes = papildomosSekundes % 60;
}
else {
    pridedamosSekundes = papildomosSekundes;
}

console.log("Pridedamos minutės: " + pridedamosMinutes);
console.log("Likusios sekundės: " + pridedamosSekundes);
console.log("");

if (pridedamosSekundes >= 10) {
   pridedamosMinutesDesimtys = Math.floor(pridedamosSekundes / 10);
    pridedamosSekundes = Math.floor(pridedamosSekundes % 10);
}

console.log("Pridedamos minutės: " + pridedamosMinutes);
console.log("Pridedamos sekundės (dešimtys): " + pridedamosMinutesDesimtys);
console.log("Pridedamos sekundės: " + pridedamosSekundes);

sekundes2 += pridedamosSekundes;
if (sekundes2 >= 10) {
    sekundes2 = sekundes2 % 10;
    sekundes1 += 1;
}
sekundes1 += pridedamosMinutesDesimtys;
if (sekundes1 >= 6) {
    sekundes1 = sekundes1 % 6;
    minutes2 += 1;
}
minutes2 = minutes2 + pridedamosMinutes;
if (minutes2 >= 10) {
    minutes2 = minutes2 % 10;
    minutes1 += 1;
}
if (minutes1 >= 6) {
    minutes1 = minutes1 % 6;
    valandos2 += 1;
}
if (valandos2 >= 4) {
    valandos2 = valandos2 % 4;
    valandos1 += 1;
}
if (valandos1 >= 3) {
    valandos1 = valandos1 % 3;
}

console.log("Laikas: " + valandos1 + valandos2 + ":" + minutes1 + minutes2 + ":" + sekundes1 + sekundes2);

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
