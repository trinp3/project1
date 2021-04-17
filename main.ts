scene.setBackgroundColor(9)
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
for (let index = 0; index <= 2; index++) {
    list_grapes[index].setPosition(80, 6)
    list_grapes[index].setStayInScreen(true)
    list_grapes[index].vy = 50
}
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
Acorn.setPosition(randint(1, 159), randint(1, 6))
Acorn.vy = 50
Acorn.setStayInScreen(true)
Acorn.setBounceOnWall(true)
forever(function () {
    for (let index = 0; index <= 2; index++) {
        if (Basket.overlapsWith(list_grapes[index])) {
            info.changeScoreBy(5)
            list_grapes[index].setPosition(randint(1, 159), randint(1, 6))
            info.startCountdown(5)
        } else {
            list_grapes[index].setBounceOnWall(true)
        }
    }
    if (Acorn.overlapsWith(Basket)) {
        Basket.destroy()
        game.over(false)
    }
})
