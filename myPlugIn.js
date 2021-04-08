var kilometriPercorsi = parseInt(prompt("Quanti kilometri vuoi percorrere?"));

var eta = parseInt(prompt ("Quanti anni hai?"));
var tariffaBiglietto = (kilometriPercorsi * 0.21);
var sconto20 = tariffaBiglietto * 20 / 100;
var sconto40 = tariffaBiglietto * 40 / 100;

if (Number.isNaN(kilometriPercorsi) || Number.isNaN(eta)){
    document.getElementById("target").innerHTML= "Hai immasso valori non corretti (lettere o simboli)";
}
else if (kilometriPercorsi === 0 || eta === 0){
    document.getElementById("target").innerHTML= "I valori immessi non possono essere uguali a Zero";
}

else{
    if (eta < 18){
        document.getElementById("target").innerHTML=
        (tariffaBiglietto - sconto20).toFixed(2) + " Euro"; 
    } else if (eta > 65){
        document.getElementById("target").innerHTML= (tariffaBiglietto - sconto40).toFixed(2)  + " Euro"; 
    }
    else{
        document.getElementById("target").innerHTML= tariffaBiglietto.toFixed(2) + " Euro";
    }

}

