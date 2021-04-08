var kilometriPercorsi = parseInt(prompt("Quanti kiometri vuoi percorrere?"));

var età = parseInt(prompt ("Quanti anni hai?"));

if (Number.isNaN(kilometriPercorsi) || Number.isNaN(età)){
    document.getElementById("target").innerHTML= "Hai immasso valori non coerenti"
}


else{
    if (età < 18){
        document.getElementById("target").innerHTML=(kilometriPercorsi * 0,21) - ((kilometriPercorsi * 0,21) /100 * 20) + " Euro"; 
    } else if (età > 65){
        document.getElementById("target").innerHTML= (kilometriPercorsi * 0,21) - ((kilometriPercorsi * 0,21) /100 * 40) + " Euro"; 
    }
    else{
        document.getElementById("target").innerHTML=(kilometriPercorsi * 0,21) + " Euro";
    }

}

