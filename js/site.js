// controller

function getValues(){
    let kMenge = document.getElementById("kMenge").value;
    let mRaten = document.getElementById("mRaten").value;
    let kRate = document.getElementById("kRate").value;

    kreAmmount = parseInt(kMenge);
    monRate = parseInt(mRaten);
    kreRate = parseInt(kRate);

    if(Number.isInteger(kreAmmount) && Number.isInteger(monRate) && Number.isInteger(kRate)) {
        //call Calculate
        let kreData = calculate(kreAmmount, monRate, kreRate);
        //call display
        displayData(kreData);
    } else {
        alert("Bitte gib hier nur Zahlen ein!");
    }
}

function calculate(kreAmmount, monRate, kreRate){
    let p
}