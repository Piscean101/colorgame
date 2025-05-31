import { createCard, addCard, handleStage } from "./assets.js";
import { handleStageCPU } from "./cpu.js";

const playerstages = document.querySelectorAll('.pstage'); const enemystages = document.querySelectorAll('.estage');

const stages = document.querySelectorAll('.stage');

const battle = document.getElementById('battle');

const draw = document.getElementById('draw');

const results = document.querySelector('.results');

const [resultbox1,resultbox2] = [document.getElementById('rb1'),document.getElementById('rb2')];

var [p1score,p2score] = [document.getElementById('p1score'),document.getElementById('p2score')];

battle.addEventListener("click", () => { handleBattle() });

draw.addEventListener("click", () => { handleDraw() });

function checkWin() {

    var winCon = 50;

    function playerWins() {

        alert('You win! Nice job!');

        setTimeout(() => { window.location.reload() }, 1000);
        
    }

    function cpuWins() {

        alert('You lose. Better luck next time.');

        setTimeout(() => { window.location.reload() }, 1000);

    }

    p1score.innerHTML >= winCon ? playerWins() : p1score.innerHTML >= winCon ? cpuWins() : null;

}

function cleanStage() {

    stages.forEach(e => e.replaceChildren()); 

    battle.disabled = false;

    draw.disabled = false;

    results.style.opacity = 0;

    document.querySelector('body').style.pointerEvents = 'auto';

    checkWin();
    
};

function colorEngine([...p1cards],[...p2cards]) {

    var colorList = new Set();

    function colorDiscover(list) {

        list.forEach(e => e.forEach(f => { f.classList.remove('facedown'); f.classList.add(f.id.split(',')[0]); console.log(f.classList); colorList.add(f.classList[1])}));

        console.log(colorList.values())

        list.forEach(e => {

            e.forEach(f => {
                console.log(f.classList[1]);
                f.classList[1] == 'Red' && colorList.has('Purple') ? f.innerHTML = 0 :
                f.classList[1] == 'Skyblue' && colorList.has('Red') ? f.innerHTML = 0 :
                f.classList[1] == 'Lime' && colorList.has('Skyblue') ? f.innerHTML = 0 :
                f.classList[1] == 'Gold' && colorList.has('Lime') ? f.innerHTML = 0 :
                f.classList[1] == 'Purple' && colorList.has('Gold') ? f.innerHTML = 0 : null
            })

        })

    }

    colorDiscover([...p1cards,...p2cards])

    return [p1cards,p2cards];

}

function calculateBattle() {

    var[p1,p2] = [0,0]; var[playerq,enemyq] = [[],[]];

    playerstages.forEach(e => e.children.length ? playerq.push(e.children[0]) : null);

    enemystages.forEach(e => e.children.length ? enemyq.push(e.children[0]) : null);

    colorEngine([playerq],[enemyq])[0].forEach(e => { e.forEach(f => p1 += Number(f.innerHTML)) });

    colorEngine([playerq],[enemyq])[1].forEach(e => { e.forEach(f => p2 += Number(f.innerHTML)) });

    resultbox1.innerHTML = `+ ${p1}`; resultbox2.innerHTML = `+ ${p2}`;

    p1 += Number(p1score.innerHTML); p2 += Number(p2score.innerHTML);

    p1score.innerHTML = p1; p2score.innerHTML = p2;

}

export async function nextRound() {

    setTimeout(() => { cleanStage(); addCard(); addCard('p2hand'); }, 3500);

    setTimeout(() => { handleStageCPU(); }, 4000)

}

export async function handleBattle() {

    battle.disabled = true; draw.disabled = true; document.querySelector('body').style.pointerEvents = 'none';

    results.style.opacity = 100;

    calculateBattle();

    nextRound();

}

export async function handleDraw() {

    try { playerstages.forEach(e => [e].forEach(f => { handleStage(f.children[0]) })) }

    catch {}

    finally { addCard(); }

    handleBattle();

}
