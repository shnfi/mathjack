const apply_btn = document.querySelector(".apply_btn");
const pass_btn = document.querySelector(".pass_btn");

const win_circles = document.querySelectorAll(".circle");

var win_streak = 0;

function win() {
    win_streak++
    win_circles[win_streak - 1].style.backgroundColor = "lightGreen";

    if (win_streak == 3)
        alert("Y:ou won nigga!");
}

apply_btn.addEventListener("click", () => {
    if (ans == number.innerHTML)
        win();
    else
        console.log("U Lost!");
});

pass_btn.addEventListener("click", () => {});