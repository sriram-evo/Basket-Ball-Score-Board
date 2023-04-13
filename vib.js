let had1 = document.getElementById("hadd1")
let had2 = document.getElementById("hadd2")
let had3 = document.getElementById("hadd3")
let gad1 = document.getElementById("gadd1")
let gad2 = document.getElementById("gadd2")
let gad3 = document.getElementById("gadd3")
let hs = document.getElementById("home-score")
let gs = document.getElementById("guest-score")
let hcount = 0
let gcount = 0

function hadd1(){
    hs.textContent = hcount = hcount+1
}
function hadd2(){
    hs.textContent = hcount = hcount+2
}
function hadd3(){
    hs.textContent = hcount = hcount+3
}

function gadd1(){
    gs.textContent = gcount = gcount+1
}
function gadd2(){
    gs.textContent = gcount = gcount+2
}
function gadd3(){
    gs.textContent = gcount = gcount+3
}

function flush(){
    hs.textContent = 0
    gs.textContent = 0
    hcount= 0
    gcount= 0
}

