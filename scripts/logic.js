const apply_btn = document.querySelector(".apply_btn");
const pass_btn = document.querySelector(".pass_btn");

const win_circles = document.querySelectorAll(".circle");

var win_streak = 0;

function next_round() {
	cards_on_hand.length = 0;
	ans = 0;

	randomize();
	deal(false);

	for (let i = 0; i < cards_arr.length; i++) {
		if (cards_arr[i].classList[2] == "on") {
			cards_arr[i].classList.toggle("on");
			cards_arr[i].classList.toggle("off");
		}
		
		cards_arr[i].style.translate = "0 0";
	}
}

function win() {
    win_streak++
    win_circles[win_streak - 1].style.backgroundColor = "lightGreen";

    if (win_streak == 3) {
		setTimeout(() => {
		    alert("You won nigga!");
		}, 1500);
	}

	next_round();
}

apply_btn.addEventListener("click", () => {
    if (ans == number.innerHTML)
        win();
    else
        console.log("U Lost!");
});

pass_btn.addEventListener("click", () => {});
