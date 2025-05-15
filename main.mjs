import { Player } from "./assets/player.js";
import { handleBattle } from "./assets/combat.js";
import { addCard, addMany } from "./assets/assets.js";
import { handleStageCPU } from "./assets/cpu.js";

function startGame() {

    addMany(5,'p2');

    addMany(5,'p1');

    setTimeout(() => { handleStageCPU() }, 1000);

}

startGame();
