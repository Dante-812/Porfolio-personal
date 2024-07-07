// Función de LOADING . . .
let cuaternario = "#ff2975";
let raisinBlack = "#1b1e25ff";

const process = document.querySelector("#process");
const punto1 = document.querySelector("#punto1");
const punto2 = document.querySelector("#punto2");
const punto3 = document.querySelector("#punto3");

const tresPuntos = () => {
  punto1.style.color = raisinBlack;
  punto2.style.color = raisinBlack;
  punto3.style.color = raisinBlack;
  setTimeout(() => {
    // punto1.style.color = "#ffbd00ff";
    process.style.color = cuaternario;
    punto1.style.color = cuaternario;
  }, 1000);
  setTimeout(() => {
    // punto2.style.color = "#ffbd00ff";
    punto2.style.color = cuaternario;
  }, 2000);
  setTimeout(() => {
    // punto3.style.color = "#ffbd00ff";
    punto3.style.color = cuaternario;
  }, 3000);
  setTimeout(() => {
    punto1.style.color = raisinBlack;
    punto2.style.color = raisinBlack;
    punto3.style.color = raisinBlack;
  }, 4000);
  setTimeout(() => {
    tresPuntos();
  }, 4500);
};

tresPuntos();