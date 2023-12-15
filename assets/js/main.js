
let calc = () => {
    let netto = document.querySelector("#netto").checked
    let brutto = document.querySelector("#brutto").checked
    let neunzehn = document.querySelector("#neunzehn").checked
    let sieben = document.querySelector("#sieben").checked
    let betrag = document.querySelector("#betrag").value
    let labelText = document.querySelector("#text")
    let labelPreis = document.querySelector("#labelPreis")
    let output1 = document.querySelector("#output1")
    let output2 = document.querySelector("#output2")

    let nettoZuBrutto19 = (betrag * 1.19).toFixed(2)
    let bruttoZuNetto19 = (betrag / 1.19).toFixed(2)
    let nettoZuBrutto7 = (betrag * 1.07).toFixed(2)
    let bruttoZuNetto7 = (betrag / 1.07).toFixed(2)

    let nettoZuBrutto19mwSt = (nettoZuBrutto19 - netto).toFixed(2)
    let bruttoZuNetto19mwSt = (bruttoZuNetto19 * 0.19).toFixed(2)
    let nettoZuBrutto7mwSt = (nettoZuBrutto7 - netto).toFixed(2)
    let bruttoZuNetto7mwSt = (bruttoZuNetto7 * 0.07).toFixed(2)
    
switch(labelPreis) {
    case netto:
        labelPreis.innerHTML = `Nettobetrag`
        labelText.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro`
        break;
    case brutto:
        
        break;
}

if (netto && neunzehn) {
    labelPreis.innerHTML = `Nettobetrag`
    labelText.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro`
    output1.innerHTML = bruttoZuNetto19mwSt
    output2.innerHTML = bruttoZuNetto19
} else if (netto && sieben) {
    labelPreis.innerHTML = `Nettobetrag`
    labelText.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro`
    output1.innerHTML = bruttoZuNetto7mwSt
    output2.innerHTML = bruttoZuNetto7
} else if (brutto && neunzehn) {
    labelPreis.innerHTML = `Bruttobetrag (Endpreis)`
    labelText.innerHTML = `Bruttobetrag (Preis mit Mehrwertsteuer) in Euro`
    output1.innerHTML = nettoZuBrutto19mwSt
    output2.innerHTML = nettoZuBrutto19
} else if (brutto && sieben) {
    labelPreis.innerHTML = `Bruttobetrag (Endpreis)`
    labelText.innerHTML = `Bruttobetrag (Preis mit Mehrwertsteuer) in Euro`
    output1.innerHTML = nettoZuBrutto7mwSt
    output2.innerHTML = nettoZuBrutto7
}
}




// Bruttobetrag (Preis mit Mehrwertsteuer) in Euro