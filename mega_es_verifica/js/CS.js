function cambiaColore(){
    var x = document.getElementById("titolo");
    var colori = ["red", "blue", "green", "purple", "orange"];
    var coloreCasuale = colori[Math.floor(Math.random() * colori.length)];
    x.style.color = coloreCasuale;
}
setInterval(cambiaColore, 1000);