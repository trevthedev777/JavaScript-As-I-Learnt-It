// Global Variables
const ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

// functions
adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerLife = currentPlayerHealth;
    // * The monster hits us
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE); 
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        // * reset the health bar from before the monster hit us
        currentPlayerHealth = initialPlayerLife;
        alert('Bonus Life Used');
        setPlayerHealth(initialPlayerLife);
    } else if (currentPlayerHealth <= 0 && !hasBonusLife) {
        alert('You Died');
    }

    // ! Battle Phase
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Win!');
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost!');;
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You Both DEAD!');
        reset();
    }
}

function attackMonster(attackMode) {
    let maxDamage;

    if (attackMode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (attackMode === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    
    endRound();
}   

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal more than your maximum health");
        healValue = chosenMaxLife - currentPlayerHealth
    } else {
        // * full heal value
        healValue = HEAL_VALUE;
    }

    // if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE)
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

// event listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
