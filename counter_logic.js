let home_scoreEl = document.getElementById("home_score")
let guest_scoreEl = document.getElementById("guest_score")



let home_socre = 0
let guest_score = 0

function addToHometScore(points){
    home_socre += points

    home_scoreEl.textContent = home_socre
}



function addToGuestScore(points){

    guest_score += points

    guest_scoreEl.textContent = guest_score

}

function resetGame(){
    home_socre = 0
    guest_score = 0

    home_scoreEl.textContent = home_socre
    guest_scoreEl.textContent = guest_score
}