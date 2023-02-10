let homeEl = document.getElementById('home-el');
let guestEl = document.getElementById('guest-el');
let result1El = document.getElementById('result1-el');
let result2El = document.getElementById('result2-el');

let countHome = 0;
let countGuest = 0;


homeEl.textContent = countHome;
guestEl.textContent = countGuest;


// Home score increment function

function addOneToHome() {
    countHome += 1;
    homeEl.textContent = countHome;
}
function addTwoToHome() {
    countHome += 2;
    homeEl.textContent = countHome;
}
function addThreeToHome() {
    countHome += 3;
    homeEl.textContent = countHome;
}

// Guest score increment function

function addOneToGuest() {
    countGuest += 1;
    guestEl.textContent = countGuest;
}
function addTwoToGuest() {
    countGuest += 2;
    guestEl.textContent = countGuest;
}
function addThreeToGuest() {
    countGuest += 3;
    guestEl.textContent = countGuest;
}

// End game and Final Score

function newgame() {
    if(countGuest > countHome) {
        result1El.textContent = "Guest wins with " + countGuest + " Points";
        result2El.textContent = "Home loses with " + countHome + " Points";
    }else if (countGuest < countHome) {
        result1El.textContent = "Home wins with " + countHome + " Points";
        result2El.textContent = "Guest loses with " + countGuest + " Points";
    } else {
        result1El.textContent ="Home = " + countHome + " - " + "Guest = " + countGuest; 
        result2El.textContent = "This game ended in a tie";
    }
    countHome = 0;
    countGuest = 0;
    homeEl.textContent = countHome;
    guestEl.textContent = countGuest;
}