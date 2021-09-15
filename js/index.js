const btn = document.querySelector('#botao');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    limpaRetorno();
    calculaDelta();
});

function calculaDelta(){

    let valorA = document.querySelector('#valorA').value
    let valorB = document.querySelector('#valorB').value
    let valorC = document.querySelector('#valorC').value

    if (valorA == "" || valorB == "" || valorC == "") {
        alert("Os campos não podem ficar vazios")
        return
    }

    let incognitaB = valorB ** 2
    let incognitaC = valorA * valorC
    let quociente = 2 * valorA
    let delta = incognitaB - 4 * incognitaC

    console.log("delta " + delta);   

    if (delta < 0) {
        // a = -1 b = 1 c = -1
        document.querySelector('#deltaMenorQueZero').innerHTML = `<p>O valor de delta é ${delta}<br>não existem raízes reais<br></p>`    
        $("#elemento1").addClass("msg-retorno");     
       
    } else if (delta == 0) {
        // a = 1 b = -2 c = 1
        let x1 =  (- (valorB) + delta) / quociente       
      
        document.querySelector('#deltaIgualAZero').innerHTML = `
        <p>O valor de delta é ${delta}<br>existem duas raízes reais e iguais</p>
        <p>O valor de X<sub>1</sub> é ${x1 }</p>
        <p>O valor de X<sub>2</sub> é ${x1 }</p>
        `
        $("#elemento2").addClass("msg-retorno");  

    } else {
        // a = -1 b = 2 c = 3
        let x1 = ((-valorB) + delta**0.5) / quociente
        let x2 = ((-valorB) - delta**0.5) / quociente       

        document.querySelector('#deltaMaiorQueZero').innerHTML = `
        <p>O valor de delta é ${delta}<br>existem duas raízes reais e diferentes</p>        
        <p>O valor de X<sub>1</sub> é ${x1}</p>
        <p>O valor de X<sub>2</sub> é ${x2}</p>  
        `
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

    document.querySelector('#deltaMenorQueZero').innerHTML = ""   
    document.querySelector('#deltaIgualAZero').innerHTML = ""
    document.querySelector('#deltaMaiorQueZero').innerHTML = ""

    
}