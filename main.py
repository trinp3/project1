def on_a_pressed():
    global list_grapes
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
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

list_grapes: List[Sprite] = []
scene.set_background_color(9)
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
Grapes = sprites.create(img("""
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
    SpriteKind.food)
Grapes.set_position(80, 6)
Grapes.set_stay_in_screen(True)
Grapes.vy = 50
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
Acorn.set_position(randint(1, 159), randint(1, 6))
Acorn.vy = 50
Acorn.set_stay_in_screen(True)
Acorn.set_bounce_on_wall(True)

def on_forever():
    if Basket.overlaps_with(Grapes):
        info.change_score_by(5)
        Grapes.set_position(randint(1, 159), randint(1, 6))
        info.start_countdown(5)
    else:
        Grapes.set_bounce_on_wall(True)
    if Acorn.overlaps_with(Basket):
        Basket.destroy()
        game.over(False)
forever(on_forever)
