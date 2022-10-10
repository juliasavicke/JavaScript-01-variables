const aukstis = document.getElementById("aukstis");
const plotis = document.getElementById("plotis");
const gylis = document.getElementById("gylis");
const skaiciuoti = document.getElementById("skaiciuoti");
const veiksmas = document.getElementById("veiksmas");
const apskaiciuota = document.getElementById("apskaiciuota");
const langoAukstis = document.getElementById("langoAukstis");
const langoPlotis = document.getElementById("langoPlotis");
const languKiekis = document.getElementById("languKiekis");

let atsakymas;
let pilnasVeiksmas;
let languPlotas;

function skaiciuotiFn() {
  if (veiksmas.value === "sienuPlotas") {
    if (languKiekis.valueAsNumber > 0 && langoAukstis.valueAsNumber > 0 && langoPlotis.valueAsNumber > 0) {
      languPlotas =
        languKiekis.valueAsNumber *
        (langoAukstis.valueAsNumber * langoPlotis.valueAsNumber);
      atsakymas =
        gylis.valueAsNumber * 2 +
        plotis.valueAsNumber * 2 * aukstis.valueAsNumber -
        languPlotas;
      pilnasVeiksmas = "sienu plotas";
    } else {
      languPlotas = "nenurodytas";
      atsakymas =
        gylis.valueAsNumber * 2 +
        plotis.valueAsNumber * 2 * aukstis.valueAsNumber;
      pilnasVeiksmas = "sienu plotas";
    }
  } else if (veiksmas.value === "grinduPlotas") {
    atsakymas = gylis.valueAsNumber * plotis.valueAsNumber;
    pilnasVeiksmas = "grintu plotas";
  } else if (veiksmas.value === "perimetras") {
    atsakymas = gylis.valueAsNumber * 2 + plotis.valueAsNumber * 2;
    pilnasVeiksmas = perimetras;
  }

  console.log(atsakymas);
  let pilnasAtsakymas = `Jusu kambario ${pilnasVeiksmas} yra ${atsakymas}, kai aukstis: ${aukstis.value}, plotis: ${plotis.value}, gylis: ${gylis.value}. Bendras langu plotas: ${languPlotas}`;
  apskaiciuota.textContent = pilnasAtsakymas;

  apskaiciuota.style.color = 'blue';
}

skaiciuoti.onclick = skaiciuotiFn;
