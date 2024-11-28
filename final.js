
function capturarValor() {
    let valor = parseFloat(document.getElementById("num1").value);
    let valor1 = document.getElementById("sin").value;
    let valor2 = parseFloat(document.getElementById("num2").value);
    
 
if (valor1==="+"){
    
    document.getElementById("resultado").innerText = "o resultado é: " + ((valor) + (valor2));
    }

if (valor1==="-"){
    document.getElementById("resultado").innerText = "o resultado é: " + (valor-valor2);
    }

if (valor1==="*"){
    document.getElementById("resultado").innerText = "o resultado é: " + (valor*valor2);
    }

if (valor1==="/"){
    document.getElementById("resultado").innerText = "o resultado é: " + (valor/valor2);
    }

if (valor1==="IMC"){
    document.getElementById("resultado").innerText = "Seu IMC é igual a: " + (valor/(valor2**2));
    }

if (valor1==="%"){
    document.getElementById("resultado").innerText = valor+"% de "+(valor2)+" é igual a: " + ((valor2/100)*valor);
    }

if (valor1==="**"){
    document.getElementById("resultado").innerText = "o resultado é: " + (valor**valor2);
    }

if (valor1==="/*"){
    document.getElementById("resultado").innerText = "o resultado é: " + (valor**(1/valor2));
    }
}





