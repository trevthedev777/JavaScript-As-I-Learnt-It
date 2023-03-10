// Global Variables
const ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 10;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_GAME_OVER = ' GAME_OVER';


let battleLog = [];
let lastLoggedEntry;1

function getMaxLifeValues() {
    const enteredValue = prompt('Maximum life for you and the monster', '100');

    const parsedValue = parseInt(enteredValue);
    // ! if the user input is NaN then default value is set
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw {message: 'Invalid user input, not a number'};
    } 

    return parsedValue;
}

let chosenMaxLife;

try {
    // If this fails
    chosenMaxLife = getMaxLifeValues();
} catch (error) {
    // then do this 
    console.log(error);
    chosenMaxLife = 100;
    alert('You entered something wrong');
}


let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

// functions
adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {

    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
        };;


    if (ev  === LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntry.target = 'MONSTER';
    } else if (ev === LOG_EVENT_MONSTER_ATTACK){
        logEntry.target = 'PLAYER';
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry.target = 'PLAYER'
    }
    
    battleLog.push(logEntry);
}

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

    //  * create Battle log
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth
        );

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
        //  * create Battle log
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'Player Won', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost!');;
        //  * create Battle log
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'Monster Won', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You Both DEAD!');
        //  * create Battle log
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'Game Drawn', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
        reset();
    }
    
}

function attackMonster(attackMode) {
    // ! Ternarys
    const maxDamage = attackMode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = attackMode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    
    // ! Regular if statements
    // if (attackMode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (attackMode === MODE_STRONG_ATTACK){
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }

    const damage = dealMonsterDamage(maxDamage);
    //  * create Battle log
    writeToLog(
        logEvent, 
        damage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );
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

    //  * create Battle log
    writeToLog(
        LOG_EVENT_PLAYER_HEAL, 
        healValue, 
        currentMonsterHealth, 
        currentPlayerHealth
    );
    endRound();
}

function printLogHandler() {
    // ! This is a FOR LOOP
    for (let i = 0; i < battleLog.length; i++) {
        console.log('-------')
    }

    // ! This is also a FOR LOOP
    // for (let i = 0; i< battleLog.length; i++){
    //     console.log(battleLog[i])
    // }

    // ! This is a FOR OF loop
    let i = 0;
    for (const logEntry of battleLog) {
        if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i){
            console.log(`#${i}`);
        // ! This is a FOR IN Loop
        for (const key in logEntry) {
            // console.log(key);
            console.log(`${key} => ${logEntry[key]}`);
        }
        lastLoggedEntry = i;
        break; // breaks the loops right here
    }
        i++;
    }

    console.log(battleLog);
}

// event listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);