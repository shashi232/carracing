class Form{
    constructor() {}

    //to display the form
    display()
    {
        //create and position an h2 element for title
        var title= createElement('h2');
        title.html("CAR RACING GAME");
        title.position(130, 0);

        //create and position input and button
        var input= createInput("Write your name");
        input.position(130, 160);

        var button= createButton('Start playing');
        button.position(250, 200);

        //to greet the player
        var greeting= createElement('h3');
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name= input.value();
            playerCount +=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+ name);
            greeting.position(130,160);
        })
    }
}