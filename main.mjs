import { Player } from "./assets/player.js";
import { handleBattle } from "./assets/combat.js";
import { addCard, addMany } from "./assets/assets.js";
import { handleStageCPU } from "./assets/cpu.js";

// try { screen.orientation.lock("portrait"); }

// catch { console.log('orientation lock not supported') }

async function lockOrientation(orientation) {
    try {
        await document.documentElement.requestFullscreen();
        await screen.orientation.lock(orientation);
        console.log("Screen orientation locked to " + orientation);
    } catch (error) {
        console.error("Failed to lock screen orientation:", error);
    }
}

function startGame() {

    addMany(5,'p2');

    addMany(5,'p1');

    setTimeout(() => { handleStageCPU() }, 1000);

}

startGame();

// window.addEventListener('load', () => {
//     async function lockOrientation(orientation) {
//     try {
//         await window.screen.orientation.lock(orientation);
//         console.log("Screen orientation locked to " + orientation);
//     } catch (error) {
//         console.error("Failed to lock screen orientation:", error);
//     }
// }
// lockOrientation('portrait')
// if (screen.orientation && screen.orientation.lock('portrait-primary')) {
//   screen.orientation.lock('portrait-primary')
//     .then(() => {
//       console.log('Screen orientation locked to portrait.');
//     })
//     .catch(error => {
//       console.warn('Failed to lock screen orientation:', error);
//     });
// } else {
//   console.warn('Screen orientation lock is not supported on this device.');
// }
// })

screen.orientation.lock('portrait-primary').catch(e => { console.log('Screen orientation lock not supported by this device') });
