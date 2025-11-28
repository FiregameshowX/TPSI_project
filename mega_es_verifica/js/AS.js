document.addEventListener("DOMContentLoaded", () => {
    const NUM_FLAKES = 30; // quante immagini di neve
    const container = document.body;

    for (let i = 0; i < NUM_FLAKES; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const flake = document.createElement("img");
        flake.src = "imgs/neve.png";
        flake.style.position = "fixed";
        flake.style.top = "-30px"; // spawn 30px sopra la pagina
        flake.style.left = Math.random() * window.innerWidth + "px";
        flake.style.width = "20px"; // dimensione fiocco
        flake.style.pointerEvents = "none";
        container.appendChild(flake);

        let x = parseFloat(flake.style.left);
        let y = -30;
        const speedY = 1 + Math.random() * 2; // velocità verticale
        const speedX = (Math.random() - 0.5) * 1; // diagonale (destra o sinistra)

        function fall() {
            y += speedY;
            x += speedX;
            flake.style.top = y + "px";
            flake.style.left = x + "px";

            if (y < window.innerHeight) {
                requestAnimationFrame(fall);
            } else {
                flake.remove(); // rimuove quando esce dallo schermo
                createSnowflake(); // ricrea un nuovo fiocco
            }
        }

        fall();
    }
});


