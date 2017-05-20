var game = new Phaser.Game(640, 480, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});
var toybox;
var settings = {
    gravity: 900,
    demoMode: true,
    plugins: ["alien","button","jelly","fly","fan", "bubble","backdrop","gem"]
}

function preload() {
    toybox = new Toybox(game, settings);
    toybox.preload();
}

function create() {
  toybox.create();
  toybox.add.backdrop({
      preset : "spring"
  });
  toybox.add.alien();
  toybox.add.button({
      startingX : 100,
      onPress : makeARandomEnemy,
      color: "orange"
      
      
  });
    
    toybox.game.time.events.loop(10000, makeARandomEnemy, toybox);
    toybox.game.time.events.loop(2000, makeARandomGem, toybox);
    
    
    
    toybox.add.button({
      startingX : 400,
      onPress : makeABubble,
      color: "red"
      
  });
  
    toybox.add.fan({
      startingX : 320
  })
};

      
function makeARandomGem(){
    toybox.add.gem({
        startingX: Phaser.Math.between(0, game.width),
        startingY: Phaser.Math.between(0, game.height)
        
    })
}      
  
  

function makeABubble(){
    toybox.add.bubble({
        startingX : 300,
        startingY : game.world.height,
        dY : -90
        
    })
}
    
    


function makeARandomEnemy(){
    var random = Phaser.Math.between(1,2);
    if(random ==1){
        var jelly = toybox.add.jelly({
            startingx : 400,
        color: "purple"
        });
        jelly.speed = 400
    }
    if(random == 2){
        var fly = toybox.add.fly({
        startingx : 400,
            color: "yellow"
        
            
        });
    fly.speed = 100
    }
    
    
}





function update() {
    toybox.update();
}