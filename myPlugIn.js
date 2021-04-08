var kilometriPercorsi = prompt("Quanti kiometri vuoi percorrere?");

var età = prompt ("Quanti anni hai?")

if (età < 18){
    document.getElementById("target").innerHTML= (kilometriPercorsi * 0,21) - ((kilometriPercorsi * 0,21) /100 * 20); 
} else if (età > 65){
    document.getElementById("target").innerHTML= (kilometriPercorsi * 0,21) - ((kilometriPercorsi * 0,21) /100 * 40); 
}
else{
    document.getElementById("target").innerHTML= (kilometriPercorsi * 0,21);
}