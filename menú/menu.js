const botones = document.getElementsByClassName("button");

if (botones && botones.length > 0) {
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", () => {
            botones[i].classList.toggle("rejected");
        });
    }
}