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

    p1score.innerHTML >= 50 ? alert('You win! Wanna play again?') : p1score.innerHTML >= 50 ? alert('You lose! Better luck next time') : null;

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

        list.forEach(e => e.forEach(f => colorList.add(f.style.backgroundColor)));

        list.forEach(e => {

            e.forEach(f => {
                f.style.backgroundColor == 'red' && colorList.has('purple') ? f.innerHTML = 0 :
                f.style.backgroundColor == 'skyblue' && colorList.has('red') ? f.innerHTML = 0 :
                f.style.backgroundColor == 'lime' && colorList.has('skyblue') ? f.innerHTML = 0 :
                f.style.backgroundColor == 'gold' && colorList.has('lime') ? f.innerHTML = 0 :
                f.style.backgroundColor == 'purple' && colorList.has('gold') ? f.innerHTML = 0 : null
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
