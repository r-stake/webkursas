console.log("");
console.log("-------------------------------------------------------------------------------------------------------------------");
console.log("Custom-strings sprendimai:");
console.log("-------------------------------------------------------------------------------------------------------------------");
console.log("");
/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
*/
console.log("Užduotis 01:");
let aktoriausVardas = "Alan";
let aktoriausPavarde = "Rickman";

if (aktoriausVardas.length < aktoriausPavarde.length) {
    console.log (aktoriausVardas);
}
else {
    console.log(aktoriausPavarde);
}

/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/
console.log("");
console.log("Užduotis 02:");

console.log(aktoriausVardas.toUpperCase() + " " + aktoriausPavarde.toLowerCase());

/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
console.log("");
console.log("Užduotis 03:");

let jungtinisStringas = aktoriausVardas.charAt(0);
jungtinisStringas += aktoriausPavarde.charAt(0);
console.log(jungtinisStringas);

/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
console.log("");
console.log("Užduotis 04:");
jungtinisStringas = 0;
for (i = 0; i < aktoriausVardas.length; i++) {
    if (i >= aktoriausVardas.length - 3) {
        if (jungtinisStringas == 0) {
            jungtinisStringas = aktoriausVardas.charAt(i);
            console.log("1-A: " + jungtinisStringas);
        }
        else {
            jungtinisStringas += aktoriausVardas.charAt(i);
            console.log("1-B: " + jungtinisStringas);
        }
    }
}
for (i = 0; i < aktoriausPavarde.length; i++) {
    if (i >= aktoriausPavarde.length - 3) {
        if (jungtinisStringas == 0) {
            jungtinisStringas = aktoriausPavarde.charAt(i);
            console.log("1-A: " + jungtinisStringas);
        }
        else {
            jungtinisStringas += aktoriausPavarde.charAt(i);
            console.log("1-B: " + jungtinisStringas);
        }
    }
}
console.log("Trys paskutinės vardo ir pavardės raidės: " + jungtinisStringas);

/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/

let american = "An American in Paris";

// console.log(american.replace(/a/gi, "*"));

american = american.replace(/a/gi, "*")
console.log(american);

/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/



/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/



/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/



/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/

 

/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/