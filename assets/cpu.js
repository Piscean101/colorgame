import { handleStage } from "./assets.js";

export async function handleStageCPU() {

    var cardCount = Math.ceil(Math.random()*2);

    while (cardCount > 0) {

        var cpuhand = document.getElementById('p2hand');

        var stages = [document.querySelectorAll('.estage')];

        var selection = cpuhand.children[Math.floor(Math.random()*cpuhand.children.length)];

        !stages[0][0].hasChildNodes() ? stages[0][0].appendChild(selection) : !stages[0][1].hasChildNodes() ? stages[0][1].appendChild(selection) : null;

        cardCount--;

    }

}

