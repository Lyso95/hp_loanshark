// controller

function getValues(){
    //get values from page
    let kBetrag = document.getElementById("kBetrag").value;
    let mRaten = document.getElementById("mRaten").value;
    let zSatz = document.getElementById("kRate").value;

    //parse and call function if valid
    kredit = parseInt(kBetrag);
    monat = parseInt(mRaten);
    zins = parseInt(zSatz);
    //ist
    if(Number.isInteger(kredit) && Number.isInteger(monat) && Number.isInteger(zins)) {
        //call Calculate
        let kreData = calculate(kredit, monat, zins);
        //call display
        displayData(kreData);
    } else {
        alert("Bitte gib hier nur Zahlen ein!");
    }
}

//object erstellen
//monatliche Rate berechnen
//monatliche Zinsen berechnen
//Gesamtgebühren pro Monat berechnen
//Schuldenstand berechnen
//Monatszins = 100 * ( 12√ 1 + Jahreszins / 100 - 1)
//Jahreszins = 100 * [ ( 1 + Monatszins / 100 )12 - 1 ]
function calculate(){
        //Math.pow(index, potenz) 2, 2 = 4
}

// --- TODO: Ausgabe ---
//results = Table
//kSum => kBetrag (Kreditbetrag)
//gAufwand = Gesamtaufwand
