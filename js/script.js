

document.getElementById('player').addEventListener('click', addPoints);
let points = 0;
function addPoints(){
    let comp1 = document.getElementById('level').classList.contains('level2')
    if (comp1 == false) {
        points++;
        document.getElementById('points').innerHTML = `Points : ${points}/30`;
        let randNum = Math.round(Math.random()*385);
        let randNum2 = Math.round(Math.random()*385);
        document.getElementById('player').style.marginTop = randNum + 'px';
        document.getElementById('player').style.marginLeft = randNum2 + 'px';
        // -----WIN-----
        if(points >= 30){
            clearInterval(intervalOne);
            document.getElementById('points').innerHTML = `You have reached ${points} points`;
            document.getElementById('player').removeEventListener('click', addPoints);
            document.getElementById('modal-w').classList.add('modal-w');
        } 
    }
}


// document.getElementById('player').addEventListener('click', playerRed);
// function playerRed (){
    //     let numberRandom = Math.round(Math.random());
    //     if ( numberRandom == 0) {
        //         document.getElementById('player').classList.add('evil-player')
//     }
// }s


function normalPlayer(){
    let classEvil = document.getElementById('player').classList.contains('evil-player');
    if ( classEvil == true) {
        document.getElementById('player').classList.remove('evil-player');
    }
}
setInterval(normalPlayer, 5000);

document.getElementById('player').addEventListener('click', playerSmall);
function playerSmall (){
    let numberRandom = Math.round(Math.random()*(3 - 1) + 1);
    if ( numberRandom == 2 ) {
        document.getElementById('player').classList.toggle('player2')
        document.getElementById('world').classList.toggle('fas2')
    }
}

// -------------------------------------------------------------------------


function loseLive (){
    let evilCheck = document.getElementById('player').classList.contains('evil-player')
    let evilCheck2 = document.getElementById('player').classList.remove('prueba')
    let evilCheck3 = document.getElementById('player').classList.contains('prueba')
    
    if (evilCheck3 == false && evilCheck == true) {
        alert('You lost a life')
    }
}
document.getElementById('player').addEventListener('click', loseLive);


// -------------------------------------------------------------------------


// console.log('Hola')
// let evilPlayer = document.getElementById('player');

// function lostClick (){
    //     evilPlayer
    //     if (evilplayer ) {
        
        //     }
        // }
        
        
        
        // -------------------------------------- LEVEL 2 ----------------------------------------
        
        function moveRandom (){
            let level2check = document.getElementById('level').classList.contains('level2');
            if (level2check == true) {
                let randNum = Math.round(Math.random()*385);
                let randNum2 = Math.round(Math.random()*385);
                let moveTop = document.getElementById('player').style.marginTop = randNum + 'px';
                let moveLeft = document.getElementById('player').style.marginLeft = randNum2 + 'px';
                
            }
        }
        let moveRandom1= setInterval(moveRandom, 1000);
        
        
        let nextLevel2 = document.getElementById('nextlvl').addEventListener('click', level2);
        function level2 (){
    intervalOne = setInterval(timeOne,1000);
    time = 31;
    points = 0;
    document.getElementById('level').classList.add('level2')
    document.getElementById('level').innerHTML = 'Lvl : 2'
    document.getElementById('modal-w').classList.remove('modal-w')
    document.getElementById('points').innerHTML = `Points : ${points}/25`;
    // let myInterval = setInterval(timeOut2, 1000);
}

document.getElementById('player').addEventListener('click', addPoints2);
function addPoints2 (){
    let prueba2 = document.getElementById('level').classList.contains('level2')
    if (prueba2 == true) {
        points++;
        document.getElementById('points').innerHTML = `Points : ${points}/25`;
        let randNum = Math.round(Math.random()*385);
        let randNum2 = Math.round(Math.random()*385);
        document.getElementById('player').style.marginTop = randNum + 'px';
        document.getElementById('player').style.marginLeft = randNum2 + 'px';
        if(points == 25){
            clearInterval(intervalOne);
            document.getElementById('points').innerHTML = `You have reached ${points} points`;
            document.getElementById('player').removeEventListener('click', addPoints);
            document.getElementById('ultimate-level').classList.add('ultimate-level');
            document.getElementById('modal-w').classList.add('modal-w');
            document.getElementById('vote').classList.add('btn-hidden');
            document.getElementById('nextlvl').classList.add('btn-hidden');
        }
    }
}



// ------------------------LEVEL 3----------------------------------

document.getElementById('ultimate-level').addEventListener('click', level3);
function level3 (){
    let checklvl3 = document.getElementById('level').classList.contains('level2')
    if (checklvl3 == true) {
        document.getElementById('level').classList.remove('level2');
        document.getElementById('level').classList.add('level3');
        document.getElementById('modal-w').classList.remove('modal-w');
        document.getElementById('villain').classList.add('villain');
        document.getElementById('evil2').classList.add('villain');
        document.getElementById('evil3').classList.add('villain');
        document.getElementById('level').innerHTML = 'Lvl : 3'
        intervalOne = setInterval(timeOne,1000);
        time = 26;
        points = 0;
        document.getElementById('points').innerHTML = `Points : ${points}/15`;
        // let myInterval = setInterval(timeOut3, 1000);

    }
}


document.getElementById('player').addEventListener('click', addPoints3);
function addPoints3 (){
    let prueba2 = document.getElementById('level').classList.contains('level3')
    if (prueba2 == true) {
        points++;
        document.getElementById('points').innerHTML = `Points : ${points}/10`;
        let randNum = Math.round(Math.random()*385);
        let randNum2 = Math.round(Math.random()*385);
        document.getElementById('player').style.marginTop = randNum + 'px';
        document.getElementById('player').style.marginLeft = randNum2 + 'px';
        if(points == 10){
            // clearInterval(intervalOne);
            document.getElementById('points').innerHTML = `You have reached ${points} points`;
            document.getElementById('player').removeEventListener('click', addPoints);
            document.getElementById('ultimate-level').classList.add('ultimate-level');
            // document.getElementById('modal-w').classList.add('modal-w');
            clearInterval(intervalOne);
            document.getElementById('modal-finish').classList.add('modal-finish')
            document.getElementById('vote').classList.add('btn-hidden');
            document.getElementById('nextlvl').classList.add('btn-hidden');
        }
    }
}

// ---------------------------------WIN ------------------------------------



function moveRandom2 (){
    let level3check = document.getElementById('level').classList.contains('level3');
    if (level3check == true) {
        let randNum = Math.round(Math.random()*385);
        let randNum2 = Math.round(Math.random()*385);
        let moveTop = document.getElementById('player').style.marginTop = randNum + 'px';
        let moveLeft = document.getElementById('player').style.marginLeft = randNum2 + 'px';
        
    }
}
setInterval(moveRandom2, 1000);


// ---------------------------- EVILS ---------------------------------


function moveRandom3 (){
    let level3check = document.getElementById('level').classList.contains('level3');
    if (level3check == true) {
        let randNum = Math.round(Math.random()*385);
        let randNum2 = Math.round(Math.random()*385);
        let randNum3 = Math.round(Math.random()*385);
        let randNum4 = Math.round(Math.random()*385);
        let randNum5 = Math.round(Math.random()*385);
        let randNum6 = Math.round(Math.random()*385);
        document.getElementById('villain').style.marginTop = randNum + 'px';
        document.getElementById('villain').style.marginLeft = randNum2 + 'px';
        document.getElementById('evil2').style.marginTop = randNum3 + 'px';
        document.getElementById('evil2').style.marginLeft = randNum4 + 'px';
        document.getElementById('evil3').style.marginTop = randNum5 + 'px';
        document.getElementById('evil3').style.marginLeft = randNum6 + 'px';
        
    }
}
setInterval(moveRandom3, 900);






// -------------------------LIVES ------------------------------------



let lives = 3;
document.getElementById('villain').addEventListener('mouseover', evil1)
function evil1() {
    lives--;
    if (lives == 2) {
        console.log(`Tienes ${lives} vidas`)
        alert(`You have ${lives} lives left`);
    }
    if (lives == 1) {
        console.log(`Tienes ${lives} vidas`)
        alert(`You have ${lives} live left`);
    }
    if (lives == 0) {
        console.log(`Tienes ${lives} vidas`)
    }
    if (lives <= 0) {
        console.log(`Tienes ${lives}`)
        document.getElementById('modal-l').classList.add('modal-l')
    }
}
document.getElementById('evil2').addEventListener('mouseover', evil2)
function evil2() {
    lives--;
    if (lives == 2) {
        console.log(`Tienes ${lives} vidas`)
        alert(`You have ${lives} lives left`);
    }
    if (lives == 1) {
        console.log(`Tienes ${lives} vidas`)
        alert(`You have ${lives} live left`);
    }
    if (lives == 0) {
        console.log(`Tienes ${lives} vidas`)
    }
    if (lives <= 0) {
        console.log(`Tienes ${lives}`)
        document.getElementById('modal-l').classList.add('modal-l')
    }
}

document.getElementById('evil3').addEventListener('mouseover', evil3)
function evil3() {
    lives--;
    if (lives == 2) {
        console.log(`Tienes ${lives} vidas`)
        alert(`You have ${lives} lives left`);
    }
    if (lives == 1) {
        console.log(`Tienes ${lives} vidas`)
        alert(`You have ${lives} live left`);
    }
    if (lives == 0) {
        console.log(`Tienes ${lives} vidas`)
    }
    if (lives <= 0) {
        console.log(`Tienes ${lives}`)
        document.getElementById('modal-l').classList.add('modal-l')
    }
}




function restLive1 (){
    lives;
    if (lives <= 2){
        document.getElementById('live1').classList.add('hidden');
    }
    lives;
    if (lives <= 1){
        document.getElementById('live2').classList.add('hidden');
    }
    lives;
    if (lives <= 0){
        document.getElementById('live3').classList.add('hidden');
    }
}
setInterval(restLive1, 1000)

// -----------------------------TIMES-------------------------------

let time = 31;
function timeOne() {
    time--;
    document.getElementById('time').innerHTML = `Time : ${time}s`;
}
let intervalOne = setInterval(timeOne,1000);


function timeOut() {
    if (time == 0){
        clearInterval(intervalOne);
        document.getElementById('time').innerHTML = `Time is over`;
        document.getElementById('modal-time').classList.add('modal-time');
    }  
}
setInterval(timeOut,1000);
                        


// -----------------START--------------
function start() {
    let starter = document.getElementById('modal-start').classList.contains('modal-start');
    if (starter == true) {
        time = 31;
    }
                            
}
setInterval(start, 1)


document.getElementById('start-game').addEventListener('click', startGame)
function startGame (){
    document.getElementById('modal-start').classList.remove('modal-start');
}



document.getElementById('instructions').addEventListener('click', openInstructions)
function openInstructions (){
    document.getElementById('modal-instructions').classList.add('modal-instructions');
}



document.getElementById('close-instructions').addEventListener('click', closeInstructions)
function closeInstructions (){
    document.getElementById('modal-instructions').classList.remove('modal-instructions');
}

