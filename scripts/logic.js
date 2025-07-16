const apply_btn = document.querySelector(".apply_btn");
const pass_btn = document.querySelector(".pass_btn");

const win_circles = document.querySelectorAll(".circle");

var win_streak = 0;

function next_round() {
	cards_on_hand.length = 0;
	ans = 0;

	for (let i = 0; i < cards_arr.length; i++) {
		if (cards_arr[i].classList[2] == "on") {
			cards_arr[i].remove();
		}
		
		cards_arr[i].style.translate = "0 0";
	}

	randomize();
	deal(false);
}

function win() {
    win_streak++
    win_circles[win_streak - 1].style.backgroundColor = "lightGreen";

    if (win_streak == 3) {
		apply_btn.disabled = true;
		pass_btn.disabled = true;

		setTimeout(() => {
		    alert("You won nigga!");
		}, 1000);
	}

	next_round();
}

apply_btn.addEventListener("click", () => {
    if (ans == number.innerHTML)
        win();
    else
		alert("U Lost!");
});

pass_btn.addEventListener("click", () => {
	if (document.querySelectorAll(".card").length > 2) {
		randomize();

		const x = document.querySelectorAll(".card");

		x[Math.floor(Math.random() * x.length)].remove();
		x[Math.floor(Math.random() * x.length)].remove();
	}
	else 
		alert("U Lost!");
});
