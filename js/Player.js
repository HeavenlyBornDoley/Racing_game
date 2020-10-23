class Player{
    constructor(){

    }

    getCount(){
        var getCountref = database.ref('playerCount')
            getCountref.on("value",function(data){
                playerCount = data.val()
            })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    update(Name){
        var playerIndex = "player" + playerCount
        database.ref(playerIndex).set({name:Name})
    }

}