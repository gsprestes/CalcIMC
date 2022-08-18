const resultado = document.querySelector("#imcResult");
const peso = document.querySelector("#weight");
const altura = document.querySelector("#height");


function changeWeight() {

    let spanWeight = document.getElementById("spanWeight");
    spanWeight.innerHTML = peso.value;
}

function changeHeight () {

    let spanHeight = document.getElementById ("spanHeight");
    spanHeight.innerHTML= altura.value;
}

const imcCalc = () => {

    if (peso.value === 0 && altura.value === 0) {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
        let classification = '';

        if (imc < 18.5) {
            classification = "Abaixo do Peso";
        } else if (imc < 25) {
            classification = "Peso normal";
        } else if (imc < 30) {
            classification = "Acima do peso";
        } else if (imc < 35) {
            classification = "Obesidade Grau I";
        } else if (imc < 41) {
            classification = "Obesidade Grau II";
        } else {
            classification = "Obesidade Grau III";
        }

        resultado.innerHTML = `${imc} (${classification})`;
        
    } else {
        resultado.innerHTML = "Adicione altura e peso.";
    }
}