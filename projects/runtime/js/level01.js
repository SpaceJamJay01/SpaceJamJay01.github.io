var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var enemy =  game.createGameItem('enemy',25);
function createEnemy(x,y){
    var redSquare = draw.rect(50,50,'red');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -1;
enemy.rotationalVelocity = 100;
enemy.onPlayerCollision = function() {
    game.changeIntegrity(-100);
    enemy.fadeOut();
};
enemy.onProjectileCollision = function(){
    game.increaseScore(100);
    enemy.fadeOut();
}
}
createEnemy(400,groundY-10);
createEnemy(800,groundY-100);
createEnemy(1200,groundY-50);
        
        function createSawBlade(x,y) {
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
         var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        }  
        createSawBlade(400,400);
        createSawBlade(500,400);
        createSawBlade(275,400);
        for(var i = 0; i < levelData.gameItems; i++){
            createSawBlade(levelData.gameItems[i].x,levelData.gameItems[i].y);
        }
    
    function createReward(x,y){
    var reward = game.createGameItem('reward',25);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
     var rewardImage = draw.bitmap('img/reward.png');
     rewardImage.x = -50;
     rewardImage.y = -74.5;
    reward.addChild(rewardImage);
    reward.velocityX = -2;
reward.onPlayerCollision = function() {
    game.increaseScore(250);
    reward.fadeOut();
};
    };
    createReward(500,350);
};
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
};