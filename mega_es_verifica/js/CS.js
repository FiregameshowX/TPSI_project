let booleano = true;
let clicks = 0;
let timers = []; // array per salvare gli intervalli

function cambiaColore(){
    var x = document.getElementById("titolo");
    var bottone = document.getElementById("home_button");
    var y = document.body;
    var colori = ["red", "blue", "green", "purple", "orange"];
    var coloreCasuale = colori[Math.floor(Math.random() * colori.length)];
    var coloreCasuale2 = colori[Math.floor(Math.random() * colori.length)];
    var coloreCasuale3 = colori[Math.floor(Math.random() * colori.length)];
    if(x) {
        x.style.color = coloreCasuale;
        x.style.borderColor = coloreCasuale2;
    }
    y.style.backgroundColor = coloreCasuale3;
    if(bottone) bottone.style.color = coloreCasuale;
}

function posizioneRandom(){
    var x = document.getElementById("home_button");
    if(x){
        x.style.position = "absolute";
        x.style.top = Math.floor(Math.random() * (window.innerHeight - 50)) + "px";
        x.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
    }
}

function randomSizeText(){
    var x = document.getElementById("testo1");
    if(x){
        var size = Math.floor(Math.random() * 30) + 10; // 10–40px
        x.style.fontSize = size + "px";
        x.style.color = (x.style.color === "white") ? "black" : "white";
    }
}

function spazioZero(){
    var spazio = document.getElementById("spazioZero");
    if(spazio) spazio.style.opacity = "1";
    testo1 = document.getElementById("testo1");
    if(testo1) testo1.style.display = "none";
    var titolo = document.getElementById("titolo");
    if(titolo) titolo.style.display = "none";
    var bottone = document.getElementById("home_button");
    if(bottone) bottone.style.display = "none";
    document.body.style.backgroundColor = "white";
}

// Avvio animazioni
if (booleano) {
    timers.push(setInterval(cambiaColore, 100));
    timers.push(setInterval(posizioneRandom, 1000));
    timers.push(setInterval(randomSizeText, 500));
}

// Gestione clic
document.addEventListener('click', function(){
    clicks += 1;
    if (clicks >= 5) {
        booleano = false;
        // fermo gli intervalli
        timers.forEach(clearInterval);
        spazioZero();
    }
});
// Recupero gli elementi
const inputZero = document.getElementById("inputZero");
const bottoneZero = document.getElementById("bottoneZero");

// Listener sul bottone
bottoneZero.addEventListener("click", function(){
    const valore = inputZero.value.trim().toLowerCase();
    if (valore === "cruelty squad") {
        window.location.href = "index.html";
    } 
    if (valore === "") {
        link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        window.open(link, '_blank');   
    }

});
