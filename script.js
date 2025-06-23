
let homeTotal = 0
let guestTotal = 0


function addPoints(team,points){
    if (team == 'home'){
        homeTotal += points
        document.getElementById('total_home').innerText = homeTotal
    }
    else if (team == 'guest'){
        guestTotal += points
        document.getElementById('total_guest').innerText = guestTotal
    }

}

function reset(team){
    if (team == 'home'){
        homeTotal = 0
        document.getElementById('total_home').innerText = homeTotal
    }
    else if (team == 'guest'){
        guestTotal = 0
        document.getElementById('total_guest').innerText = guestTotal
    }

}