
let items = {
    sword: {
        name: 'sword',
        modifier: 35,
        description: 'cut'
    },
    hammer: {
        name: 'hammer',
        modifier: 25,
        description: 'bang'
    },
    cheese: {
        name: 'cheese',
        modifier: 50,
        description: 'yumenergy'
    },
}

function giveItems(item) {
    target.items.push(items[item].modifier)
}

}

let target = {
    name: "Tom",
    health: 100,
    hit: 0,
    items: []

}

function slap() {
    target.health -= 1;
    target.hit++;
    update();
}

function punch() {
    target.health -= 5;
    target.hit++;
    update();
}

function kick() {
    target.health -= 15;
    target.hit++;
    update();
}


function update() {
    document.getElementById('health').innerText = target.health.toString();
    document.getElementById('hit').innerText = target.hit.toString();
}
