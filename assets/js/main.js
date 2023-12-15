
let label = () => {
    let nettoLabel = document.querySelector("#netto").checked
    let bruttoLabel = document.querySelector("#brutto").checked
    let labelText = document.querySelector("#text")
    let labelPreis = document.querySelector("#labelPreis")

    if (nettoLabel) {
        labelPreis.innerHTML = `Bruttobetrag (Endpreis)`
        labelText.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro`
    } else if (bruttoLabel) {
        labelPreis.innerHTML = `Nettobetrag`
        labelText.innerHTML = `Bruttobetrag (Preis mit Mehrwertsteuer) in Euro`
    }
}

let calc = () => {
    let output1 = document.querySelector("#output1")
    let output2 = document.querySelector("#output2")
    let netto = document.querySelector("#netto").checked
    let brutto = document.querySelector("#brutto").checked
    let neunzehn = document.querySelector("#neunzehn").checked
    let sieben = document.querySelector("#sieben").checked
    let betrag = document.querySelector("#betrag").value

    let nettoZuBrutto19 = (betrag * 1.19).toFixed(2)
    let bruttoZuNetto19 = (betrag / 1.19).toFixed(2)
    let nettoZuBrutto7 = (betrag * 1.07).toFixed(2)
    let bruttoZuNetto7 = (betrag / 1.07).toFixed(2)
    
    let nettoZuBrutto19mwSt = (nettoZuBrutto19 - betrag).toFixed(2)
    let bruttoZuNetto19mwSt = (bruttoZuNetto19 * 0.19).toFixed(2)
    let nettoZuBrutto7mwSt = (nettoZuBrutto7 - betrag).toFixed(2)
    let bruttoZuNetto7mwSt = (bruttoZuNetto7 * 0.07).toFixed(2)


    if (netto && neunzehn) {
        output1.innerHTML = nettoZuBrutto19mwSt
        output2.innerHTML = nettoZuBrutto19
    } else if (netto && sieben) {
        output1.innerHTML = nettoZuBrutto7mwSt
        output2.innerHTML = nettoZuBrutto7
    } else if (brutto && neunzehn) {
        output1.innerHTML = bruttoZuNetto19mwSt
        output2.innerHTML = bruttoZuNetto19
    } else if (brutto && sieben) {
        output1.innerHTML = bruttoZuNetto7mwSt
        output2.innerHTML = bruttoZuNetto7
    }
}
