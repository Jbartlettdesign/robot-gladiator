// function to generate a random numeric value
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);
      
        return value;
  }
  // function to set name
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + name);
  return name;
};
  ;var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];





var endGame = function() {
    // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");
if(playAgainConfirm){
    // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
  };



  var shop = function() {
    shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL":
        case "refill":
          playerInfo.refillHealth();
          break;
        case "UPGRADE":
        case "upgrade":
          playerInfo.upgradeAttack();
          break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
  };

  var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    if (promptFight === "" || promptFight === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      return fightOrSkip();
    }
    // Enter the conditional recursive function call here!
  
    // if player picks "skip" confirm and then stop the loop
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        return true;
      }
    }
    if(!confirmSkip){
      return false;
    }
  }

var fight = function(enemy) {
    while(enemy.health > 0 && playerInfo.health > 0) {
    
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;}
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
  
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
       // award player money for winning
       playerInfo.money = playerInfo.money + 20;

       // leave while() loop since enemy is dead
       break;}
    else{window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
}
    // remove player's health by subtracting the amount set in the enemy.attack variable
    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    // if player choses to skip
  }
  };

  var startGame = function(){
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators!" + ( i + 1 ));
            
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            var damage = randomNumber(pickedEnemyObj.attack - 3, pickedEnemyObj.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
    
            fight(pickedEnemyObj);
// if we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            if(storeConfirm){
            shop();
        }
        }
        }           
        else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
            }
        }
endGame();
}

// start the game when the page loads
startGame();


