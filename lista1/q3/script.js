let celsius = document.querySelector("#celsius");
let fahr = document.querySelector("#temp-fahrenheit");
let kelv = document.querySelector("#temp-kelvin");
let CtoK = (c) => c + 273.15;
let CtoF = (c) => (c * 9) / 5 + 32;
let mensagem = document.querySelector(".mensagem");
let invalido = (c) => {
  if (isNaN(c) || c < -273.15) return true;
  else return false;
};

celsius.addEventListener("keyup", function () {
  let tempC = parseFloat(celsius.value);
  if (invalido(tempC)) {
    fahr.textContent = `-`;
    kelv.textContent = `-`;
    mensagem.textContent = "digite um valor valido";
  } else {
    fahr.textContent = `em fahrenheit: ${CtoF(tempC)}`;
    kelv.textContent = `em kelvin: ${CtoK(tempC)}`;
    mensagem.textContent = "";
  }
});
