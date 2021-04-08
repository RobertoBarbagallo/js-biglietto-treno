var kilometriPercorsi = parseInt(prompt("Quanti kiometri vuoi percorrere?"));

var età = parseInt(prompt ("Quanti anni hai?"));

if (Number.isNaN(kilometriPercorsi) || Number.isNaN(età)){
    document.getElementById("target").innerHTML= "Hai immasso valori non corretti (lettere o simboli)";
}
else if (kilometriPercorsi === 0 || età === 0){
    document.getElementById("target").innerHTML= "I valori immessi non possono essere uguali a Zero";
}

else{
    if (età < 18){
        document.getElementById("target").innerHTML=(kilometriPercorsi * 0,21) - ((kilometriPercorsi * 0,21) /100 * 20).toFixed(2) + " Euro"; 
    } else if (età > 65){
        document.getElementById("target").innerHTML= (kilometriPercorsi * 0,21) - ((kilometriPercorsi * 0,21) /100 * 40).toFixed(2) + " Euro"; 
    }
    else{
        document.getElementById("target").innerHTML=(kilometriPercorsi * 0,21).toFixed(2) + " Euro";
    }

}

