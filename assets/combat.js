import { createCard, addCard } from "./assets.js";
import { handleStageCPU } from "./cpu.js";

const playerstages = document.querySelectorAll('.pstage'); const enemystages = document.querySelectorAll('.estage');

const stages = document.querySelectorAll('.stage');

const battle = document.getElementById('battle');

const draw = document.getElementById('draw');

const results = document.querySelector('.results');

const [resultbox1,resultbox2] = [document.getElementById('rb1'),document.getElementById('rb2')];

var [p1score,p2score] = [document.getElementById('p1score'),document.getElementById('p2score')];

battle.addEventListener("click", () => { handleBattle() });

function cleanStage() { stages.forEach(e => e.replaceChildren()); battle.disabled = false; draw.disabled = false; results.style.opacity = 0 }

function calculateBattle() {

    var[p1,p2] = [0,0];

    playerstages.forEach(e => e.children.length ? p1 += Math.abs(e.children[0].innerHTML) : null);

    enemystages.forEach(e => e.children.length ? p2 += Math.abs(e.children[0].innerHTML) : null);

    resultbox1.innerHTML = `+ ${p1}`; resultbox2.innerHTML = `+ ${p2}`;

    p1 += Number(p1score.innerHTML); p2 += Number(p2score.innerHTML);

    p1score.innerHTML = p1; p2score.innerHTML = p2;

}

export async function nextRound() {

    setTimeout(() => { cleanStage(); addCard(); addCard('p2hand'); }, 3500);

    setTimeout(() => { handleStageCPU(); }, 4000)

}

export async function handleBattle() {

    battle.disabled = true; draw.disabled = true;

    results.style.opacity = 100;

    calculateBattle();

    nextRound();

}