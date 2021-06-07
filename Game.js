class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  
  }


  play(){
    form.hide();
    textSize(30)
    text("Let the Games Begin!",100,100)
    player.getPlayerInfo();
    if (allPlayers !== undefined){
      var displayPosition = 150;
      displayPosition += 20;
      textSize(15)
      text(allPlayers[plr].name+" "+ allPlayers[plr].distance,130,displayPosition)
    }
    if (keyIsDown(UP_ARROW) && player.Index !== null){
      player.distance+= 50
      player.update();
    }
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
