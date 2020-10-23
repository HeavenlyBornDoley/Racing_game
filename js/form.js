class Form{
    constructor(){

    }

    display(){
        var title = createElement('H2')
        title.html("Car Racing Game")
        title.position(130,0)
        var input = createInput("Name")
        var button = createButton('Play')
        var greetings = createElement('H3')
        input.position(130,160)
        button.position(250,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var Name = input.value()
            playerCount = playerCount + 1
            player.update(Name)
            player.updateCount(playerCount)
            greetings.html("Hello " +  Name)
            greetings.position(130,160)
 })
    }

}