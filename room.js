const aukstis = document.getElementById('aukstis')
const plotis = document.getElementById('plotis')
const gylis = document.getElementById('gylis')
const skaiciuoti = document.getElementById('skaiciuoti')
const veiksmas = document.getElementById('veiksmas')
const apskaiciuota = document.getElementById('apskaiciuota')

let atsakymas;
let pilnasVeiksmas;

function skaiciuotiFn() {
    
if (veiksmas.value === 'sienuPlotas') {

    atsakymas = (gylis.valueAsNumber * 2) + (plotis.valueAsNumber * 2) *aukstis.valueAsNumber;
    pilnasVeiksmas = 'sienu plotas';


}
else if (veiksmas.value === 'grinduPlotas') {
    atsakymas = gylis.valueAsNumber * plotis.valueAsNumber;
    pilnasVeiksmas = 'grintu plotas'
}
else if (veiksmas.value === 'perimetras') {
    atsakymas = (gylis.valueAsNumber*2) + (plotis.valueAsNumber*2)
    pilnasVeiksmas = perimetras
}
    
console.log(atsakymas);
let pilnasAtsakymas = `Jusu kambario ${pilnasVeiksmas} yra ${atsakymas}, kai aukstis: ${aukstis.value}, plotis: ${plotis.value}, gylis: ${gylis.value}.` 
apskaiciuota.textContent = pilnasAtsakymas;
}

skaiciuoti.onclick = skaiciuotiFn;