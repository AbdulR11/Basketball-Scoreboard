let homeScore = 0 
let guestScore = 0 

let homeBtn = document.getElementById("count-h")
let guestBtn = document.getElementById("count-g")
let resetBtn = document.getElementById("reset")

clrRed = "4px solid #ee6055"
clr = "4px solid transparent"


function updateScore(team, points)
{
    incrementPoints(team, points)
    highlightLeader()
}

function incrementPoints(team, points)
{
    if(team == "home")
    {
        homeScore += points
        homeBtn.textContent = homeScore
    }
    
    else 
    {
        guestScore += points
        guestBtn.textContent = guestScore    
    }
}


function highlightLeader()
{
    if(homeScore == guestScore)
    {
        homeBtn.style.border = clrRed
        guestBtn.style.border = clrRed
    }
    else if(homeScore > guestScore)
    {
        homeBtn.style.border = clrRed
        guestBtn.style.border = clr
    }
    else
    {
        guestBtn.style.border = clrRed
        homeBtn.style.border = clr
    }
}



function reset()
{
     homeBtn.textContent = 0
     guestBtn.textContent = 0
     homeBtn.style.border = clr
     guestBtn.style.border = clr
}

