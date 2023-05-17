console.log("");
console.log("-------------------------------------------------------------------------------------------------------------------");
console.log("Custom-02 sprendimai:");
console.log("-------------------------------------------------------------------------------------------------------------------");
console.log("");

/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/

console.log("Užduotis 01:");

let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}

/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/
console.log("");
console.log("Užduotis 02:");

for (i = 10; i > 0; i--) {
    console.log(i);
}


/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/
console.log("");
console.log("Užduotis 03:");

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;


while (numMenuo <= kiekMenSpausdinti) {
    console.log(numAvys ** numMenuo)
    numMenuo++;
}


/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/
console.log("");
console.log("Užduotis 04:");

numMenuo = 1;
for (; numMenuo <= kiekMenSpausdinti; numMenuo++) {
    console.log(numAvys ** numMenuo)
}



/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/
console.log("");
console.log("Užduotis 05:");

let currentGen = 1;
let totalGen = 19;
let totalMW = 0;

while (currentGen <= totalGen - 15) {
    totalMW += 62;
    console.log("Generatorius #" + currentGen + " įjungtas, pridėjo 62 MW, viso generuojama " + totalMW + "MW!");
    currentGen++;
}

for (; currentGen <= totalGen; currentGen++) {
    totalMW += 124;
    console.log("Generatorius #" + currentGen + " įjungtas, pridėjo 124 MW, viso generuojama " + totalMW + "MW!");
}



/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/

console.log("");
console.log("Užduotis 06:");
totalMW = 0;
for (i = 1; i < 19; i++) {
    if (i % 2 == 1) {
        console.log("Generatorius #" + i + " išjungtas.");
    }
    else {
        if (i <= 4) {
            totalMW += 62;
            console.log("Generatorius #" + i + " įjungtas, pridėjo 62 MW, viso generuojama " + totalMW);
        }
        else {
            totalMW += 124;
            console.log("Generatorius #" + i + " įjungtas, pridėjo 124 MW, viso generuojama " + totalMW);
        }
    }
}



/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/
console.log("");
console.log("Užduotis 07:");

let numNew=10;
while (numNew >= 2) {

console.log(numNew);

numNew -= 2;
}



/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/
console.log("");
console.log("Užduotis 08:");

function maxOf2(n1, n2) {
    if(n1 > n2) {
        return n1;
    }
    else if(n2 > n1) {
        return n2;        
    }
    else {
        return n1;
    }
}

console.log("Higher number: " + maxOf2(7, 7));


/*
Užduotis 9
Šiuo metu Lietuvoje yra 26 laipsniai pagal Farenheitą,
naudodamiesi JavaScript apskaičiuokite kokia temperatūra yra pagal Celsijų.

Būtinos sąlygos:
- Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsnių pagal Celsijų"
- Negalima rašyti jokio papildomo teksto
- Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
- Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
- Rezultatą išvesti konsolėje

Rezultatas:
Lietuvoje šiuo metu -3.3 laipsnių pagal Celsijų
*/
console.log("");
console.log("Užduotis 09:");

let temperaturaF = 26;
let temperaturaC = (temperaturaF - 32) * (5/9);
let oruZinute = ("Lietuvoje šiuo metu " + temperaturaC.toFixed(1) + " laipsnių pagal Celsijų");

console.log(oruZinute);


/*
Užduotis 10
Turime masyvą, kuriame yra trumpos tekstinės eilutės (pateikta apačioje). Mūsų užduotis:
1. Sukurti funkciją, kuri rastų ilgiausią žodį tekstinėje eilutėje
2. Panaudojant šią funkciją išvesti kiekvienos eilutės ilgiausią žodį (rezultatas turi būti viena tekstinė eilutė)
3. Išvedant žodžius panaudoti tarpą tarp žodžių
4. Išvedimas turi būti dinamiškas (pasikeitus masyve esančių eilučių skaičiui - vis tiek gautume kiekvienos eilutės ilgiausią žodį)
5. Rezultatą išvesti konsolėje

// Masyvas
let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];
*/
console.log("");
console.log("Užduotis 10:");

let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu", "yabadab adoooss sssssssss"];

let testString = "Mano megstamiausia sriuba - pomidoru"; // test



// Ilgiausio žodžio paieška

function velnioUsai(parametras) {

    let charCount = 0;
    let charCountHighest = 0;
    let currentWord = 0;
    let longestWord = 0;
    let longestWords = [];

    for (n = 0; n < posts.length; n++) {
        for (i = 0; i < posts[n].length; i++) { // tikriname po raidę
            if (posts[n].charAt(i) !== " " || posts[n].charAt(i) == (posts[n].length - 1)) {
                if (currentWord == 0) {
                    currentWord = posts[n].charAt(i);
                    console.log("Current word is: " + currentWord)
                    charCount++;
                }
                else {
                    currentWord += posts[n].charAt(i);
                    console.log("Current word is: " + currentWord)
                    console.log("success")
                    charCount++;
                }
            }
            else {
                if (charCount > charCountHighest) {
                    console.log("Final word is: " + currentWord)
                    charCountHighest = charCount;
                    charCount = 0;
                    longestWord = currentWord;
                    console.log("------------------------ Kol kas ilgiausias žodis : " + n + "-ame indekse ----------------------------- " + "''" + longestWord + "''")
                    currentWord = 0;
                    
                }
                else {
                    console.log("Final word is: " + currentWord)
                    charCount = 0;
                    currentWord = 0;
                    console.log("Žodžio pabaiga")
                }
            }
        }
        longestWords.push(longestWord);
        console.log("Įrašomas žodis į masyvą: ---------------------------" + "''" + longestWord + "''")
        charCountHighest = 0;
        charCount = 0;
        currentWord = 0;
    }
    console.log("Longest word has: " + charCountHighest + " characters");
    console.log("Longest word is: " + longestWord);
    console.log(longestWords);

    // let zinute = longestWords.join(" ");
    // // for (i = 0; i < longestWords.length; i++) {
    // //     zinute += longestWords[i] + " ";
    // // }
    // console.log(zinute);
    
}

velnioUsai(posts);





/*
Užduotis 11
Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius (būtinai vienos spalvos), kurių bendra kaina neviršytų 1600 €. Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.

Masyvas su objektais:

let pcs = [
{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
];

Būtinos sąlygos:
- Panaudokite bent po vieną ciklą ir sąlyginį sakinį,
- Rezultatas išvedamas konsolėje,
- Line break naudokite "\n".

Rezultatas turėtų atrodyti taip:

Galimi variantai:

Modelis: hp monstras
Kaina: 1600
Spalvos: juoda

Modelis: dell apskritimas
Kaina: 1394
Spalvos: balta

Modelis: acer peizažas
Kaina: 1240
Spalvos: balta ir juoda
*/
