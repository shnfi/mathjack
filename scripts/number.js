const number = document.querySelector(".number");

function randomize() {
    const rnd = Math.floor(Math.random() * 15 + 1);
    number.innerHTML = rnd;
}

randomize();