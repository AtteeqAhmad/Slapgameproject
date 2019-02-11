
let items = {
    sword: {
        name: 'sword',
        modifier: 3,
        description: 'cut'
    },
    hammer: {
        name: 'hammer',
        modifier: 5,
        description: 'bang'
    },
    cheese: {
        name: 'cheese',
        modifier: 35,
        description: 'yumenergy'
    },
}

function giveItem(item) {
    //target.items.push(items[item].modifier)
    target.modifier += items[item].modifier;
}

let target = {
    name: "Tom",
    health: 100,
    hit: 0,
    items: [],
    modifier: 0
}

function slap() {
    target.health -= 1 + target.modifier;
    target.hit++;
    update();
}

function punch() {
    target.health -= 3 + target.modifier;
    target.hit++;
    update();
}

function kick() {
    target.health -= 5 + target.modifier;
    target.hit++;
    update();
}

function power() {
    target.health += 10 + target.modifier;
    target.hit = 0;
    update();
}

function update() {
    document.getElementById('health').innerText = target.health.toString();
    document.getElementById('hit').innerText = target.hit.toString();
}
