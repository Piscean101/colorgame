import { Player } from "./assets/player.js";
import { handleBattle } from "./assets/combat.js";
import { addCard, addMany } from "./assets/assets.js";
import { handleStageCPU } from "./assets/cpu.js";

async function lockOrientation(orientation) {
    try {
        await document.body.requestFullscreen();
        await screen.orientation.lock(orientation);
        console.log("Screen orientation locked to " + orientation);
    } catch (error) {
        console.error("Failed to lock screen orientation:", error);
    }
}

// lockOrientation('portrait-primary');

function startGame() {

    addMany(5,'p2');

    addMany(5,'p1');

    setTimeout(() => { handleStageCPU() }, 1000);

}

startGame();
