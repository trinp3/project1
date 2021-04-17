#sets the background color to light blue
scene.set_background_color(9)
#creates the player as the image of a basket and allows it to be moved by the left and right arrow keys
Basket = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(Basket, 100, 0)
#creates list of grapes images 
list_grapes = [sprites.create(img("""
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
        """),
        SpriteKind.food),
    sprites.create(img("""
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
        """),
        SpriteKind.food),
    sprites.create(img("""
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
        """),
        SpriteKind.food)]
#sets the starting position of the lists of grapes, makes sure they stay within the playing screen, and sets speed
for index in range(3):
    list_grapes[index].set_position(80, 6)
    list_grapes[index].set_stay_in_screen(True)
    list_grapes[index].vy = 50
#creates the acorn image which will be the players enemy
Acorn = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
#Sets acorns position, speed, makes sure it stays in screen and bounces off the walls
Acorn.set_position(randint(1, 159), randint(1, 6))
Acorn.vy = 50
Acorn.set_stay_in_screen(True)
Acorn.set_bounce_on_wall(True)
#the actions under this forever will happen continuously until it is game over
def on_forever():
# when the player touches/catches the one of the grapes in the basket they will gain 5 points and grapes will be reset in a new random position
    for index2 in range(3):
        if Basket.overlaps_with(list_grapes[index2]):
            info.change_score_by(5)
            list_grapes[index2].set_position(randint(1, 159), randint(1, 6))
            #the player has 4 seconds to catch any one of the grapes or game over
            info.start_countdown(4)
        else:
            #if the player does not catch the grape then it will continue to bounce off walls
            list_grapes[index2].set_bounce_on_wall(True)
    #when the player catches the acorn it destroys the basket and it is game over 
    if Acorn.overlaps_with(Basket):
        Basket.destroy()
        game.over(False)
forever(on_forever)
