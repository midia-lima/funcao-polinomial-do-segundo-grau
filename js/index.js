const btn = document.querySelector("#botao");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  limpaRetorno();
  calcularRaizesQuadraticas();
});

function calcularRaizesQuadraticas() {
  let valorA = document.querySelector("#valorA").value;
  let valorB = document.querySelector("#valorB").value;
  let valorC = document.querySelector("#valorC").value;

  if (valorA === 0) {
    throw new Error(
      "O coeficiente 'a' não pode ser zero em uma equação quadrática."
    );
  }

  const delta = valorB ** 2 - 4 * valorA * valorC;

  if (delta < 0) {
    document.querySelector(
      "#deltaMenorQueZero"
    ).innerHTML = `<p>O valor de delta é ${delta}<br>não existem raízes reais<br></p>`;
    $("#elemento1").addClass("msg-retorno");
  } else if (delta === 0) {
    const x1 = -valorB / (2 * valorA);

    document.querySelector("#deltaIgualAZero").innerHTML = `
        <p>O valor de delta é ${delta}<br>existem duas raízes reais e iguais</p>
        <p>O valor de X<sub>1</sub> é ${x1}</p>
        <p>O valor de X<sub>2</sub> é ${x1}</p>
        `;
    $("#elemento2").addClass("msg-retorno");
  } else {
    const raizDelta = Math.sqrt(delta);

    const x1 = (-valorB + raizDelta) / (2 * valorA);
    const x2 = (-valorB - raizDelta) / (2 * valorA);

    document.querySelector("#deltaMaiorQueZero").innerHTML = `
        <p>O valor de delta é ${delta}<br>existem duas raízes reais e diferentes</p>        
        <p>O valor de X<sub>1</sub> é ${x1}</p>
        <p>O valor de X<sub>2</sub> é ${x2}</p>  
        `;
    $("#elemento3").addClass("msg-retorno");
  }
}

function limpaRetorno() {
  var element1 = document.getElementById("elemento1");
  element1.classList.remove("msg-retorno");

  var element2 = document.getElementById("elemento2");
  element2.classList.remove("msg-retorno");

  var element3 = document.getElementById("elemento3");
  element3.classList.remove("msg-retorno");

  document.querySelector("#deltaMenorQueZero").innerHTML = "";
  document.querySelector("#deltaIgualAZero").innerHTML = "";
  document.querySelector("#deltaMaiorQueZero").innerHTML = "";
}
