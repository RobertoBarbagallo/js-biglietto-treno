var kilometriPercorsi = parseInt(prompt("Quanti kiometri vuoi percorrere?"));

var età = parseInt(prompt ("Quanti anni hai?"));
var tariffaBiglietto = (kilometriPercorsi * 0.21);
var sconto20 = tariffaBiglietto * 20 / 100;
var sconto40 = tariffaBiglietto * 40 / 100;

if (Number.isNaN(kilometriPercorsi) || Number.isNaN(età)){
    document.getElementById("target").innerHTML= "Hai immasso valori non corretti (lettere o simboli)";
}
else if (kilometriPercorsi === 0 || età === 0){
    document.getElementById("target").innerHTML= "I valori immessi non possono essere uguali a Zero";
}

else{
    if (età < 18){
        document.getElementById("target").innerHTML=(kilometriPercorsi * 0,21) - (tariffaBiglietto - sconto20).toFixed(2) + " Euro"; 
    } else if (età > 65){
        document.getElementById("target").innerHTML= (kilometriPercorsi * 0,21) - (tariffaBiglietto - sconto40) + " Euro"; 
    }
    else{
        document.getElementById("target").innerHTML=(kilometriPercorsi * 0,21).toFixed(2) + " Euro";
    }

}

