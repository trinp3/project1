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
let Grapes = sprites.create(img`
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
    `, SpriteKind.Food)
Grapes.setPosition(80, 6)
Grapes.setStayInScreen(true)
Grapes.vy = 50
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
    if (Basket.overlapsWith(Grapes)) {
        info.changeScoreBy(5)
        Grapes.setPosition(randint(1, 159), randint(1, 6))
        info.startCountdown(5)
    } else {
        Grapes.setBounceOnWall(true)
    }
    if (Acorn.overlapsWith(Basket)) {
        Basket.destroy()
        game.over(false)
    }
})
