let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let heroCount = 0
let guestCount = 0


function addOne(e){
    let addId = e.id
    if(addId === "h1"){
        heroCount += 1
        homeScore.textContent = heroCount
        
    } else if(addId === "g1"){
        guestCount += 1
        guestScore.textContent = guestCount
        
    } 
}

function addTwo(e){
    let addId = e.id
    if(addId === "h2"){
        heroCount += 2
        homeScore.textContent = heroCount
        
    } else if(addId === "g2"){
        guestCount += 2
        guestScore.textContent = guestCount
        
    } 
}

function addThree(e){
    let addId = e.id
    if(addId === "h3"){
        heroCount += 3
        homeScore.textContent = heroCount
        
    } else if(addId === "g3"){
        guestCount += 3
        guestScore.textContent = guestCount        
    } 
}

function reset(){
    heroCount = 0
    guestCount = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}