//  sets the background color to light blue
scene.setBackgroundColor(9)
//  creates the player as the image of a basket and allows it to be moved by the left and right arrow keys
let Basket = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 4 e e 4 e e 4 e e 4 e e . . 
            . . e . . . . . . . . . . 4 . . 
            . . 4 . . . . . . . . . . e . . 
            . . e e e 4 4 4 e e e 4 4 4 . . 
            . . e e e 4 4 4 e e e 4 4 4 . . 
            . . e e e 4 4 4 e e e 4 4 4 . . 
            . . 4 4 4 e e e 4 4 4 e e e . . 
            . . 4 4 4 e e e 4 4 4 e e e . . 
            . . 4 4 4 e e e 4 4 4 e e e . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
controller.moveSprite(Basket, 100, 0)
//  creates list of grapes images
let list_grapes = [sprites.create(img`
            . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 e . . . . . . . . 
                . . . . . . 4 e . . . . . . . . 
                . . . . . . e 4 . . . . . . . . 
                . . . . c c c e . . . . . . . . 
                . . . . a a c c c c . . . . . . 
                . . . . a a c c c c c . . . . . 
                . . . . . c a a c c c . . . . . 
                . . . . c c a a c c . . . . . . 
                . . . . c a c c c c . . . . . . 
                . . . . . a a c c . . . . . . . 
                . . . . c c a a c c . . . . . . 
                . . . . c c c a a c . . . . . . 
                . . . . . c a c . . . . . . . . 
                . . . . . . . . . . . . . . . .
        `, SpriteKind.Food), sprites.create(img`
            . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 e . . . . . . . . 
                . . . . . . 4 e . . . . . . . . 
                . . . . . . e 4 . . . . . . . . 
                . . . . 2 2 2 e . . . . . . . . 
                . . . . 2 2 2 2 2 2 . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . 2 2 2 2 2 2 . . . . . 
                . . . . 2 2 2 2 2 2 . . . . . . 
                . . . . 2 2 2 2 2 2 . . . . . . 
                . . . . . 2 2 2 2 . . . . . . . 
                . . . . 2 2 2 2 2 2 . . . . . . 
                . . . . 2 2 2 2 2 2 . . . . . . 
                . . . . . 2 2 2 . . . . . . . . 
                . . . . . . . . . . . . . . . .
        `, SpriteKind.Food), sprites.create(img`
            . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 e . . . . . . . . 
                . . . . . . 4 e . . . . . . . . 
                . . . . . . e 4 . . . . . . . . 
                . . . . 7 7 7 e . . . . . . . . 
                . . . . 7 7 7 7 7 7 . . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . 7 7 7 7 7 7 . . . . . . 
                . . . . 7 7 7 7 7 7 . . . . . . 
                . . . . . 7 7 7 7 . . . . . . . 
                . . . . 7 7 7 7 7 7 . . . . . . 
                . . . . 7 7 7 7 7 7 . . . . . . 
                . . . . . 7 7 7 . . . . . . . . 
                . . . . . . . . . . . . . . . .
        `, SpriteKind.Food)]
//  sets the starting position of the lists of grapes, makes sure they stay within the playing screen, and sets speed
for (let index = 0; index < 3; index++) {
    list_grapes[index].setPosition(80, 6)
    list_grapes[index].setStayInScreen(true)
    list_grapes[index].vy = 50
}
//  creates the acorn image which will be the players enemy
let Acorn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . 4 e 4 e 4 . . . . . . 
            . . . . . e 4 e 4 e . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
//  Sets acorns position, speed, makes sure it stays in screen and bounces off the walls
Acorn.setPosition(randint(1, 159), randint(1, 6))
Acorn.vy = 50
Acorn.setStayInScreen(true)
Acorn.setBounceOnWall(true)
//  the actions under this forever will happen continuously until it is game over
forever(function on_forever() {
    //  when the player touches/catches the one of the grapes in the basket they will gain 5 points and grapes will be reset in a new random position
    for (let index2 = 0; index2 < 3; index2++) {
        if (Basket.overlapsWith(list_grapes[index2])) {
            info.changeScoreBy(5)
            list_grapes[index2].setPosition(randint(1, 159), randint(1, 6))
            //  the player has 4 seconds to catch any one of the grapes or game over
            info.startCountdown(4)
        } else {
            //  if the player does not catch the grape then it will continue to bounce off walls
            list_grapes[index2].setBounceOnWall(true)
        }
        
    }
    //  when the player catches the acorn it destroys the basket and it is game over
    if (Acorn.overlapsWith(Basket)) {
        Basket.destroy()
        game.over(false)
    }
    
})
