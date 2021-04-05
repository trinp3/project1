sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    Grapes.setPosition(0, randint(0, 50))
})
let Grapes: Sprite = null
scene.setBackgroundColor(7)
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
Grapes = sprites.create(img`
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
Grapes.vy = 50
