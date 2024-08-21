const btn = document.querySelector("#botao");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  calcularRaizesQuadraticas();
  limpaRetorno();


});

function calcularRaizesQuadraticas() {
  let valorA = document.querySelector("#valorA").value;
  let valorB = document.querySelector("#valorB").value;
  let valorC = document.querySelector("#valorC").value;

  if (valorA == "" || valorB == "" || valorC == "") {
    alert("Os campos não podem ficar vazios")
    return
  }

  if (valorA === 0) {
    throw new Error(
      "O coeficiente 'a' não pode ser zero em uma equação quadrática."
    );
  }

  const delta = valorB ** 2 - 4 * valorA * valorC;

  if (delta < 0) {
    document.querySelector(
      "#mensagem-resultado"
    ).innerHTML = `<p> a = ${valorA}, b = ${valorB}, c = ${valorC} <br> o valor de delta é ${delta}<br>não existem raízes reais<br></p>`;

  } else if (delta === 0) {
    const x1 = -valorB / (2 * valorA);

    document.querySelector("#mensagem-resultado").innerHTML = ` a = ${valorA}, b = ${valorB}, c = ${valorC} <br>
      <p>o valor de delta é ${delta}<br>existem duas raízes reais e iguais</p>
      <p>o valor de X<sub>1</sub> é ${x1}</p>
      <p>o valor de X<sub>2</sub> é ${x1}</p>`;


  } else {
    const raizDelta = Math.sqrt(delta);

    const x1 = (-valorB + raizDelta) / (2 * valorA);
    const x2 = (-valorB - raizDelta) / (2 * valorA);

    document.querySelector("#mensagem-resultado").innerHTML = ` a = ${valorA}, b = ${valorB}, c = ${valorC} <br>
      <p>o valor de delta é ${delta}<br>existem duas raízes reais e diferentes</p>        
      <p>o valor de X<sub>1</sub> é ${x1}</p>
      <p>o valor de X<sub>2</sub> é ${x2}</p>
    `;
  }
}

function limpaRetorno() {

  document.getElementById('valorA').value = '';
  document.getElementById('valorB').value = ''
  document.getElementById('valorC').value = '';

}
