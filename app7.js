
class AlienShip  {
    constructor (name, hull, firePower, accuracy, isAlive, engage) {
        this.name = name,
        this.hull = hull,
        this.firePower = firePower, 
        this.accuracy = accuracy,
        this.isAlive = isAlive,
        this.engage = engage
    }
}

let alienFleet = [];

for(let i = 0 ; i < 6; i++)
  alienFleet[i] = new AlienShip (`AlienShip ${i + 1}`, (Math.floor(Math.random() * 4)+ 3), Math.floor(Math.random() * 3) + 2,
                                Math.floor(Math.random() * 0.2) + 0.6, true,
                                    function alienAttack(USS_Schwarzenegger)  {
                                    let chance = Math.random();
                                    if (chance <= this.accuracy) {
                                        USS_Schwarzenegger.hull -= this.firePower
                                        alert(AlienShip.name + 'AlienShip dealt' + this.firePower + ' damage')
                                        return true;
                                    } else {
                                        alert('AlienShip Missed')
                                    }
                                    
                                    }
                                    )
 

// alienFleet.forEach((alienFleet, index) => {
//     console.log(alienFleet, index)
// })

let USS_Schwarzenegger = {
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    isAlive: true,
    engage: function(AlienShip)  {
        
        let chance = Math.random();
        if (chance <= this.accuracy) {
            alienFleet[0].hull -= USS_Schwarzenegger.firePower;
            alert(`[Alien ship took damage]  [Remaining hull points: ${alienFleet[0].hull}]`)

        }
        if(alienFleet[0].hull < 0){
        alert(`[${alienFleet[0].name}] has been destroyed`)
        alienFleet[0].isAlive == false;
        alienFleet.shift()
        
        }else {
            alert('USS_Schwarzenegger launched Nuclear Missiles')            
        }
    }       
}
const start = prompt('Earth is under attack.  Engage the alien invaders', 'Attack/Retreat')
let update = prompt (`SPACE BATTLE [USS_Schwarzenegger hull: ${USS_Schwarzenegger.hull}] [Enemy Ship Count: ${alienFleet.length}]`, 'Attack/Retreat')



alienFleet.forEach(alienFleet => {
    USS_Schwarzenegger.engage()
    }
)

let update2 = prompt (`SPACE BATTLE [USS_Schwarzenegger hull: ${USS_Schwarzenegger.hull}] [Enemy Ship Count: ${alienFleet.length}]`, 'Attack/Retreat')


alienFleet.forEach(alienFleet => {
    USS_Schwarzenegger.engage()
    }
)



let game = {
    gameStatus: true,
    checkWin: function() {
        if(USS_Schwarzenegger.hull <= 0) {
            USS_Schwarzenegger.isAlive === false,
            prompt('you lost')
        }
        if(alienFleet[0].hull <= 0){
            alienFleet[0].isAlive === false,
            alienFleet[0]++
            prompt('we win')
        }
    }
}



let alienDamage = USS_Schwarzenegger.hull -= alienFleet.firePower

let alieCounterAttack = alienFleet[0] + alienDamage + alert (`Alien ship dealt damage to USS_Schwarzenegger: ${alienFleet[0].firePower} `)
                              
enemyAttack = (alieCounterAttack, alienFleet) =>{
        alieCounterAttack + alienFleet
        let checkWin =(alienFleet) => {
            if(alienFleet.hull <= 0){
                alert('Congratulations We Won!')
            }else {
                alert('We lost, Earth is Doomed')
            }
        }
        checkWin()
}
let update3 = prompt(`Congratulations! We Won!  [The remaining Alien Ships got scared and retreated: ${alienFleet.length}]`, 'Return back to Earth')

enemyAttack();
checkWin();



