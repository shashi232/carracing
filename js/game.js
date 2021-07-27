class Game{
    constructor(){}

    //read the gamestate from the DB
    getState()
    {
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value", function(data){
          gameState= data.val();  
        })
    }

    //to update the gamestate in DB to a value passed to it inside ()
    update(state)
    {
       database.ref('/').update({
            gameState: state
       })
    }

    //it will start the game and display on the screen
    start()
    {
        if(gameState===0)
        {
            player= new Player();
            player.getCount();

            form= new Form();
            form.display();
        }
    }
}