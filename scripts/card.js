const cards_arr = document.querySelectorAll(".card");

const possible_cards = [
    "clubs",
    "diamonds",
    "hearts",
    "spades"
];

var cards_on_hand = [];

var ans = 0;

function deal(first_round) {
    for (let i = 0; i < cards_arr.length; i++) {
        /* adding the event listener to each card using this loop, for better performance and lower memory user */

        if (cards_arr[i].classList[2] == "on") {
            cards_arr[i].classList.toggle("on");
            cards_arr[i].classList.toggle("off");;
        }
        else {
            cards_arr[i].classList.add(i);
            cards_arr[i].classList.add("off");
        }

        /* adding the event listener for subtraction and addition for applying */

        if (first_round) {
            cards_arr[i].addEventListener("click", () => {
                if (cards_arr[i].classList[2] == "off") {
                    cards_arr[i].classList.toggle("off");
                    cards_arr[i].classList.toggle("on");
    
                    cards_arr[i].style.translate = "0 -3rem";
    
                    ans += cards_on_hand[cards_arr[i].classList[1]];
                }
                else if (cards_arr[i].classList[2] == "on") {
                    cards_arr[i].classList.toggle("on");
                    cards_arr[i].classList.toggle("off");
    
                    cards_arr[i].style.translate = "0 0";
    
                    ans -= cards_on_hand[cards_arr[i].classList[1]];
                }
    
                console.log(`class list of clicked card: ${cards_arr[i].classList}`); // debug line, remove me later
                console.log(`ans = ${ans}`); // debug line, remove me later
                console.log("--------------------------"); // debug line, remove me later
            })
        }

        const num = Math.floor(Math.random() * 10 + 1);
        cards_arr[i].style.backgroundImage = `url(assets/${num}_of_${possible_cards[Math.floor(Math.random() * possible_cards.length)]}.png)`;
        cards_on_hand.push(num);
    }

    console.log(cards_on_hand); // debug line, remove me later
}

deal(true);