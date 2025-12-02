function cambiaColore(){
    var x = document.getElementById("titolo");
    var y = document.body;
    var colori = ["red", "blue", "green", "purple", "orange"];
    var coloreCasuale = colori[Math.floor(Math.random() * colori.length)];
    var coloreCasuale2 = colori[Math.floor(Math.random() * colori.length)];
    var coloreCasuale3 = colori[Math.floor(Math.random() * colori.length)];
    x.style.color = coloreCasuale;
    x.style.borderColor = coloreCasuale2;
    y.style.backgroundColor = coloreCasuale3;
}
function posizioneRandom(){
    var x = document.getElementById("home_button");
    x.style.top = Math.floor(Math.random() * (window.innerHeight - 50)) + "px";
    x.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
    

}
setInterval(cambiaColore, 100);