// let userName = "John";
// let userAge = 20;
// let userCity = "Bergen";

// Lag en if - else if - else statement som sjekker følgende og console logger:
// 1: Om bruker er over 18 år- "Du er over 18, velkommen inn" ,
// 2: Om bruker er under eller lik 18 år ELLER er fra Oslo - "Du er ikke gammel nok, og du er fra feil by",
// 3: Om bruker heter John OG er fra Bergen - "Velkommen inn, John fra Bergen!"


let userName = "John";
let userAge = 20;
let userCity = "Bergen";

if (userAge > 18) {
    console.log("Du er over 18, velkommen inn");
} else if (userAge <= 18 || userCity == "Oslo") {
    console.log ("Du er ikke gammel nok, og du er fra feil by");
} else if (userName == "John" && userCity == "Bergen") {
    console.log("Velkommen inn, John fra Bergen!");
} else {
    console.log("Ingen informasjon gitt");
}

// Oppgave 2 (valgfri):
// Lag en kalkulator med en switch statement som kan regne ut +, -, / og * på to tall
// Husk å console logge for å sjekke at den regner ut riktig!

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        default:
            console.log("Error: Invalid operator");
    }
}

calculate(5, 3, "+"); // 8
calculate(5, 3, "-"); // 2
calculate(5, 3, "*"); // 15
calculate(5, 3, "/"); // 1.6666666666666667
calculate(5, 3, "^"); // Error: Invalid operator
