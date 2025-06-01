import { addCard } from "./assets.js";

export async function handleStageCPU() {
    
    var cpuhand = document.getElementById('p2hand');
    
    var cardCount = Math.ceil(Math.random()*2);
    
    function handleDecision() {
        
        var [decision,odds] = ['',Math.random()];
        
        cpuhand.children.length >= 6 ? decision = 'play' : decision = 'draw';
        
        decision == 'draw' && odds > 0.5 ? decision = 'draw' : decision = 'play';

        cpuhand.children.length <= 2 ? decision = 'draw' : decision = 'play';
        
        return decision;
        
    }

    if (handleDecision() == 'draw') { addCard('p2hand') } else {

        while (cardCount > 0) {
    
            var stages = [document.querySelectorAll('.estage')];
    
            var selection = cpuhand.children[Math.floor(Math.random()*cpuhand.children.length)];
    
            !stages[0][0].hasChildNodes() ? stages[0][0].appendChild(selection) : !stages[0][1].hasChildNodes() ? stages[0][1].appendChild(selection) : null;
    
            cardCount--;
    
        }

    }
    
}

