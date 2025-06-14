import { help } from './help.js';

const helpButton = document.getElementById('help');

helpButton.addEventListener('click', () => { alert(help) })

export class Card {
    static cardId = 0;
    constructor(color,power) {
        this.color = color;
        this.power = power;
        Card.cardId++;
        this.id = [this.color,Card.cardId];
        this.inHand = true;
    }

}

function createCard(color) {

    var power = Math.ceil(Math.random()*5);

    var card = new Card(color || randomColor(),power);

    return card;

}

function wildCard() {

    let result;

    let chances = Math.random()*10;

    chances <= 0.2 ? result = 'Black' : result = null;

    return result;

}

export function handleStage(card,target='.pstage') {

    if (card.classList.contains('inHand')) {

        var stages = [document.querySelectorAll(target)];

        const battle = document.getElementById('battle');

        battle.disabled = false;

        !stages[0][0].hasChildNodes() ? stages[0][0].appendChild(card) : !stages[0][1].hasChildNodes() ? stages[0][1].appendChild(card) : null;

        card.classList.remove('inHand');

    } else if (!card.classList.contains('facedown')) {

        var hand = document.getElementById('p1hand');

        hand.appendChild(card);

        card.classList.add('inHand');

    }

}

export function randomColor() {

    var colors = ['Purple','Gold','Skyblue','Lime','Red'];

    return colors[Math.floor(Math.random()*colors.length)];

}

export async function addCard(playerHand = 'p1hand') {

    var hand = document.getElementById(playerHand); 

    if (hand.children.length < 7) {

        var newCard = createCard();
        
        var cardBody = document.createElement("div");
        
        if (wildCard() == 'Black') {

            newCard = createCard('Black');

            newCard.power += 5;

        }
    
        cardBody.addEventListener("click", (e) => { handleStage(e.target)});
    
        cardBody.addEventListener("mouseover", (e) => { e.target.style.cursor = 'pointer'});
    
        cardBody.innerHTML = newCard.power;
    
        playerHand == 'p1hand' ? cardBody.style.backgroundColor = newCard.color : null;

        cardBody.id = newCard.id;
    
        cardBody.classList.add('card');
    
        playerHand == 'p1hand' ? cardBody.classList.add('inHand') : cardBody.classList.add('facedown');
    
        hand.appendChild(cardBody);

    } else { return }
    
}

export function addMany(n,player) {

    if (typeof n != 'number') { return }

    while (n > 0) {

        player == 'p1' ? addCard() : player == 'p2' ? addCard('p2hand') : null;

        n--;

    }
    
}
