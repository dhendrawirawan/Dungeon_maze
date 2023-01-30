namespace SpriteKind {
    export const Sword = SpriteKind.create()
    export const EnemyBoss = SpriteKind.create()
    export const Shield = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyBoss, function (sprite, otherSprite) {
    if (SwordUp == 1) {
        BossSize += 1
        myEnemyBoss.changeScale(0.01, ScaleAnchor.Middle)
        myEnemyBoss.x += randint(-10, 10)
        myEnemyBoss.y += randint(-10, 10)
        if (BossSize > 50) {
            myEnemyBoss.destroy(effects.fire, 5000)
        }
    } else if (PlayerInvincible == 1) {
    	
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . f f e 4 1 f d d f 1 4 e f . . 
            f d f f e 4 d d d d 4 e f e . . 
            f b f e f 2 2 2 2 e d d 4 e . . 
            f b f 4 f 2 2 2 2 e d d e . . . 
            f c f . f 4 4 5 5 f e e . . . . 
            . f f . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f f . 
            . . e f e 4 d d d d 4 e f f d f 
            . . e 4 d d e 2 2 2 2 f e f b f 
            . . . e d d e 2 2 2 2 f 4 f b f 
            . . . . e e f 5 5 4 4 f . f c f 
            . . . . . f f f f f f f . f f . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        3000,
        false
        )
        info.changeLifeBy(-1)
        PlayerInvincible = 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GotShield == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . f f e 4 1 f d d f 1 4 e f . . 
            f 7 f f e 4 d d d d 4 e f e . . 
            f 7 f e f 2 2 2 2 e d d 4 e . . 
            f 7 f 4 f 2 2 2 2 e d d e . . . 
            f 7 f . f 4 4 5 5 f e e . . . . 
            . f f . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f 7 7 7 7 f 4 4 4 e e f . . . 
            . f 7 4 4 7 f 2 2 2 2 f 4 e . . 
            . f 7 4 4 7 f 2 2 2 2 f d 4 . . 
            . . f 7 7 f 4 5 5 4 4 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e f f f f f f f 2 e f f . 
            . f f f f 7 7 7 7 7 f f f f f . 
            . . f f 7 e e 4 e e 7 f e f . . 
            . . f f 7 e 4 4 4 e 7 f e f . . 
            . . e f 7 e e 4 e e 7 f f . . . 
            . . f f 7 e e 4 e e 7 f e f . . 
            . . f f f 7 e e e 7 f f 4 e . . 
            . . f b f f 7 7 7 f f f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e f f f f f f f 2 e f f . 
            . f f f f 7 7 7 7 7 f f f f f . 
            . . f f 7 e e 4 e e 7 f e f . . 
            . . f f 7 e 4 4 4 e 7 f e f . . 
            . . e f 7 e e 4 e e 7 f f . . . 
            . . f f 7 e e 4 e e 7 f e f . . 
            . . f f f 7 e e e 7 f f 4 e . . 
            . . f b f f 7 7 7 f f f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `],
        100,
        true
        )
        ShieldUp = 1
        mySprite.startEffect(effects.halo, 1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile2, function (sprite, location) {
    BossProjectileOn = 1
    myEnemyBoss.follow(mySprite, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles25, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GotSword == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            .....ffff...............
            ...fff22fff.............
            ..fff2222fff............
            .fffeeeeeefff...........
            .ffe222222eef...........
            .fe2ffffff2ef...........
            .ffffeeeeffff...........
            ffefbf44fbfeff..........
            fee41fddf14eef..........
            .ffffdddddeef...........
            fddddf444eef............
            fbbbbf2222f4e...........
            fbbbbf2222fd4...........
            .fccf45544f44...........
            ..ffffffff..............
            ....ff..ff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff..........
            .ffefbf44fbfeff.........
            .fee41fddf14eef.........
            fdfeeddddd4eff..........
            fbffee444edd4e..........
            fbf4f2222edde...........
            fcf.f22cccee............
            .ff.f44cdc4f............
            ....fffddcff............
            .....fddcff.............
            ....cddc................
            ....cdc.................
            ....cc..................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            .......ff...............
            .....ff22ff.............
            ...fff2222fff...........
            ..fff222222fff..........
            ..fff222222fff..........
            ..feeeeeeeeeeff.........
            .ffe22222222eff.........
            .fffffeeeefffff.........
            fdfefbf44fbfeff.........
            fbfe41fddf14ef..........
            fbffe4dddd4efe..........
            fcfef22222f4e...........
            .ff4f44554f4e...........
            ....ffffffdde...........
            .....ffffedde...........
            ..........ee............
            .........ccc............
            ........cc1cc...........
            .........c1c............
            .........c1c............
            .........c1c............
            .........c1c............
            `,img`
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf44fbfeff....cddc.
            .ffefbf44fbfeff...cddc..
            .fee4dddddd4eef.ccddc...
            fdfeeddddd4eeffecddc....
            fbffee4444ee4fddccc.....
            fbf4f222222f1edde.......
            fcf.f222222f44ee........
            .ff.f445544f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        50,
        true
        )
        SwordUp = 1
        mySprite.startEffect(effects.halo, 1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    MyEnemy.follow(mySprite, 25)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (ShieldUp == 1) {
        otherSprite.destroy(effects.ashes, 500)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 2 2 2 2 f 4 e . . 
            . f b b b b f 2 2 2 2 f d 4 . . 
            . . f c c f 4 5 5 4 4 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . f f e 4 1 f d d f 1 4 e f . . 
            f d f f e 4 d d d d 4 e f e . . 
            f b f e f 2 2 2 2 e d d 4 e . . 
            f b f 4 f 2 2 2 2 e d d e . . . 
            f c f . f 4 4 5 5 f e e . . . . 
            . f f . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f f f f d d d 4 e f . . . 
            . . f d d d d f 2 2 2 f e f . . 
            . . f b b b b f 2 2 2 f 4 e . . 
            . . f b b b b f 5 4 4 f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f f . 
            . . e f e 4 d d d d 4 e f f d f 
            . . e 4 d d e 2 2 2 2 f e f b f 
            . . . e d d e 2 2 2 2 f 4 f b f 
            . . . . e e f 5 5 4 4 f . f c f 
            . . . . . f f f f f f f . f f . 
            . . . . . . . . . f f f . . . . 
            `],
        500,
        false
        )
        info.changeLifeBy(-1)
        otherSprite.destroy(effects.disintegrate, 500)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    true
    )
    SwordUp = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundEast, function (sprite, location) {
    myEnemy2.follow(mySprite, 50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    ProjectileOn = 1
    animation.runImageAnimation(
    myEnemy3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c c . . . . 
        . . c c b b 3 b 3 3 b b c c . . 
        . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
        c d d b 3 3 b 3 3 b 3 3 b d d c 
        f c c c d d c d d c d d c c c f 
        f b 3 c c c b c c b c c c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c c c c c c b c c 3 c 
        c 3 c c c c c c c c c c c c 3 c 
        . f b b c c c c c c c c b b f . 
        . . f b b c c c c c c b b f . . 
        . . c c c f f f f f f c c c . . 
        . c 3 f f f f f f f f f f 3 c . 
        c 3 f f f f f f f f f f f f 3 c 
        f 3 c c f f f f f f f f c c 3 f 
        f b 3 c b b f b b f b b c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c c c c c c b c c 3 c 
        c 3 c c c c c c c c c c c c 3 c 
        . f b b c c c c c c c c b b f . 
        . . f b b c 8 9 9 8 c b b f . . 
        . . c c c f 9 3 1 9 f c c c . . 
        . c 3 f f f 9 3 3 9 f f f 3 c . 
        c 3 f f f f 8 9 9 8 f f f f 3 c 
        f 3 c c f f f f f f f f c c 3 f 
        f b 3 c b b f b b f b b c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c c c c c c b c c 3 c 
        c 3 c c c c 1 1 1 1 c c c c 3 c 
        . f b b c 1 9 9 9 9 1 c b b f . 
        . . f b 1 9 8 9 9 8 9 1 b f . . 
        . . c c 1 9 9 3 1 9 9 1 c c . . 
        . c 3 f 1 9 9 3 3 9 9 1 f 3 c . 
        c 3 f f 1 9 8 9 9 8 9 1 f f 3 c 
        f 3 c c f 1 9 9 9 9 1 f c c 3 f 
        f b 3 c b b 1 1 1 1 b b c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c 5 5 5 5 c b c c 3 c 
        c 3 c c c 5 1 1 1 1 5 c c c 3 c 
        . f b b 5 1 9 9 9 9 1 5 b b f . 
        . . f 5 1 9 8 9 9 8 9 1 5 f . . 
        . . c 5 1 9 9 3 1 9 9 1 5 c . . 
        . c 3 5 1 9 9 3 3 9 9 1 5 3 c . 
        c 3 f 5 1 9 8 9 9 8 9 1 5 f 3 c 
        f 3 c c 5 1 9 9 9 9 1 5 c c 3 f 
        f b 3 c b 5 1 1 1 1 5 b c 3 b f 
        . c b b 3 3 5 5 5 5 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `],
    500,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    true
    )
    ShieldUp = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shield, function (sprite, otherSprite) {
    myShield.destroy(effects.none, 500)
    GotShield = 1
    ShieldUp = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sword, function (sprite, otherSprite) {
    mySword.destroy(effects.none, 500)
    GotSword = 1
    SwordUp = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (SwordUp == 1) {
        otherSprite.destroy(effects.ashes, 500)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 2 2 2 2 f 4 e . . 
            . f b b b b f 2 2 2 2 f d 4 . . 
            . . f c c f 4 5 5 4 4 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . f f e 4 1 f d d f 1 4 e f . . 
            f d f f e 4 d d d d 4 e f e . . 
            f b f e f 2 2 2 2 e d d 4 e . . 
            f b f 4 f 2 2 2 2 e d d e . . . 
            f c f . f 4 4 5 5 f e e . . . . 
            . f f . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f f f f d d d 4 e f . . . 
            . . f d d d d f 2 2 2 f e f . . 
            . . f b b b b f 2 2 2 f 4 e . . 
            . . f b b b b f 5 4 4 f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f f . 
            . . e f e 4 d d d d 4 e f f d f 
            . . e 4 d d e 2 2 2 2 f e f b f 
            . . . e d d e 2 2 2 2 f 4 f b f 
            . . . . e e f 5 5 4 4 f . f c f 
            . . . . . f f f f f f f . f f . 
            . . . . . . . . . f f f . . . . 
            `],
        500,
        false
        )
        info.changeLifeBy(-1)
        otherSprite.destroy(effects.disintegrate, 500)
    }
})
let BossFire: Sprite = null
let EnemyFire: Sprite = null
let ProjectileOn = 0
let BossProjectileOn = 0
let ShieldUp = 0
let PlayerInvincible = 0
let SwordUp = 0
let myShield: Sprite = null
let BossSize = 0
let myEnemyBoss: Sprite = null
let myEnemy3: Sprite = null
let mySword: Sprite = null
let myEnemy2: Sprite = null
let MyEnemy: Sprite = null
let GotShield = 0
let GotSword = 0
let mySprite: Sprite = null
music.play(music.createSong(hex`0078000408120200001c00010a006400f401640000040000000000000000000000000005000004220200000400011e04000800012208000c00012410001400011e14001800012218001c00012420002400011e24002800012228002c0001242c003000012930003400012738003c0001243c004000012540004400012444004800012048005800011d5c006000011b60006400011d64006800012068007c00011d80008400011e84008800012288008c00012490009400011e94009800012298009c000124a000a400011ea400a8000122a800ac000124ac00b0000129b000b4000127b800bc000124bc00c0000125c000c4000129c400c8000125c800d800011ddc00e000011be000e400011de400e8000120e800fc00011d00010401011b04010801011d08010c01011e10011401012014011801012218011c01012420012401012524012801012428013c01011d40014401011b44014801011d48014c01011e50015401012054015801012258015c01012460016401012564016801012768017c01012980018401011b84018801011d88018c01011e90019401012094019801012298019c010124a001a4010125a401a8010124a801bc01011dc001c401011bc401c8010119c801cc01011dcc01d001011bd001d401011ed401d801011dd801dc010120dc01e001011ee001e4010122e401e8010120e801ec010124ec01f0010122f001f4010125f401f8010124f801fa010129fa01fc01012afe010002012700020c02012910021c02012920022202012924022602012928022a0201292c022e02012930023202012909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800160200000100010e10001100010e20002100010e30003100010e40004100010e48004900010f50005100010e58005900010f60006100010e68006900010f70007100010e78007900010f80008100010e90009100010ea000a100010eb000b100010ec000c100010ec800c900010fd000d100010ed800d900010fe000e100010ee800e900010ff000f100010ef800f900010f00010101010e04010501010f08010901010e0c010d01010f10011101010e14011501010f18011901010e1c011d01010f20012101010e24012501010f28012901010e2c012d01010f30013101010e34013501010f38013901010e3c013d01010f40014101010e44014501010f48014901010e4c014d01010f50015101010e54015501010f58015901010e5c015d01010f60016101010e64016501010f68016901010e6c016d01010f70017101010e74017501010f78017901010e7c017d01010f80018101010e84018501010f88018901010e8c018d01010f90019101010e94019501010f98019901010e9c019d01010fa001a101010ea401a501010fa801a901010eac01ad01010fb001b101010eb401b501010fb801b901010ebc01bd01010fc001c101010ec801c901010fd001d101010ed801d901010fe001e101010ee801e901010ff001f101010ef801f901010f00020102010e08020902010e10021102010e18021902010e20022102010e24022502010e28022902010e2c022d02010e30023102010e`), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
info.setLife(5)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . e f e 4 d d d d 4 e f . . . 
    . . e 4 d d e 2 2 2 2 f e f . . 
    . . . e d d e 2 2 2 2 f 4 e . . 
    . . . . e e f 5 5 4 4 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . f f f . . . . 
    `],
500,
true
)
controller.moveSprite(mySprite)
GotSword = 0
GotShield = 0
tiles.setTilemap(tilemap`level_0`)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
scene.cameraFollowSprite(mySprite)
MyEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
animation.runImageAnimation(
MyEnemy,
[img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .....fffc1111111f.......
    ...fc111cd1111111f......
    ...f1b1b1b1111dddf......
    ...fbfbffcf11fcddf......
    ......fcf111111bbf......
    .......ccbdb1b1fcf......
    .......fffbfbfdff.......
    ........ffffffff........
    ........fffffffffff.....
    .........fffffc111cf....
    .........fffff1b1b1f....
    ..........ffffbfbfbf....
    ...........ffff.........
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ....7.fd11111111df......
    ...7..fd11111111df......
    ...7..fd11111111df......
    ...7..fddd1111dddff.....
    ...77.fbdbfddfbdbfcf....
    ...777fcdcf11fcdcfbf....
    ....77fffbdb1bdffcf.....
    ....fcb1bcffffff........
    ....f1c1c1ffffff........
    ....fdfdfdfffff.........
    .....f.f.f..............
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd111111111f......
    ......fd11111111df......
    ......fd11111111df......
    ......fcdd1111ddcff.....
    .......fbcf11fcbfbbf....
    .......ffbdb1bdffff.....
    ........fcbfbfdf........
    ........ffffffff........
    ......ffffffffff........
    .....fcb1bcffff.........
    ......ffbff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fdd111111ddf......
    ......fbdd1111dddf......
    ......fcdbfddfbdbf......
    .......fbcf11fcbfff.....
    .......ffb1111bcfbcf....
    ........fcdb1bdfbbbf....
    .......ffffffffffcf.....
    .....fcb1bcfffff........
    .....f1b1b1ffff.........
    ......ffbff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    `],
500,
true
)
tiles.placeOnTile(MyEnemy, tiles.getTileLocation(16, 3))
myEnemy2 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
myEnemy2,
[img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c . c c . . . . . . . . 
    . . f 3 c c 3 c c c . . . . . . 
    . f c 3 b c 3 b c c c . . . . . 
    f c b b b b b b b b f f . . . . 
    c c 1 b b b 1 b b b f f . . . . 
    c b b b b b b b b c f f f . . . 
    c b 1 f f 1 c b b f f f f . . . 
    f f 1 f f 1 f b c c b b b . . . 
    f f f f f f f b f c c c c . . . 
    f f 2 2 2 2 f b f b b c c c . . 
    . f 2 2 2 2 2 b c c b b c . . . 
    . . f 2 2 2 b f f c c b b c . . 
    . . . f f f f f f f c c c c c . 
    . . . . . . . . . . . . c c c c 
    `,img`
    . f f f . . . . . . . . f f f . 
    f f c . . . . . . . f c b b c . 
    f c c . . . . . . f c b b c . . 
    c f . . . . . . . f b c c c . . 
    c f f . . . . . f f b b c c . . 
    f f f c c . c c f b c b b c . . 
    f f f c c c c c f b c c b c . . 
    . f c 3 c c 3 b c b c c c . . . 
    . c b 3 b c 3 b b c c c c . . . 
    c c b b b b b b b b c c . . . . 
    c 1 1 b b b 1 1 b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    f b c b b b c b b b b f . . . . 
    . f 1 f f f 1 b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `],
500,
true
)
tiles.placeOnTile(myEnemy2, tiles.getTileLocation(14, 12))
mySword = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . b b b b . 
    . . . . . . . . . . b b 5 5 b . 
    . . . . . . . . . b b b b 5 b . 
    . . . . . . . . b b d d b b b . 
    . . . . . . . b b d d d b b . . 
    . . . . . . b b d d d b b . . . 
    . . b . . b b d d d b b . . . . 
    . . b . b b d d d b b . . . . . 
    . . b b b 3 3 d b b . . . . . . 
    . . . b b 3 3 b b . . . . . . . 
    . . b b b b b b . . . . . . . . 
    . b b b b b b . . . . . . . . . 
    . b b b b . b b b . . . . . . . 
    . b b b . . . . . . . . . . . . 
    `, SpriteKind.Sword)
tiles.placeOnTile(mySword, tiles.getTileLocation(10, 6))
myEnemy3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(myEnemy3, tiles.getTileLocation(22, 9))
myEnemyBoss = sprites.create(img`
    ........................bbbbbbbbbbbbbbbbbbb..................................
    ......................bbb5555555555555555bbbbb...............................
    .....................bb5555555555555555555555bbb......bbc....................
    ....................bb5555555555555555555555555bbb..cbbcc....................
    ...................bb5555555555555555555555555555bccbbccc....................
    ...................b5555555555555555555555555555555ccccc.....................
    ..................bb555b555555555bd55555555555555555cccc.....................
    ..................b5555b555555555bb555555555555555555ccc.....................
    ..................c555555555555555555555555bccc5555555cc.....ccc.............
    ..................c55555bccccc5555555555555ccc1c5555555ccccccbbc.............
    ..................c5555bccccccccb5555555555dcbbc55555555cccbbbcc.............
    ..................c555bddcccccccccb1555555555555555555555ccbccc..............
    ..................c555bcdcccccccccc11b55555555555555555555ccccc..............
    ...................c55ccbcccccccccc11cc5555555555555555555dcccc..............
    ...................c55ccccccccccccc1bccb1555555bb5555555555dcc...............
    ....................c5cccccccccccccccccb1155555b55555555555dcc...............
    ....................c55ccccccccccccccccc1bccccb555555555555ddc...............
    .....................c55cccccccccccccccccccccc555555555555dddccccbbc.........
    ......................c55ccccccb333cc333bcccc555555555555555ddccbbcc.........
    ......................cc55dccc3333bc333333ccb555555555555555ddcccccc.........
    .......................cc555c33333b3333333cc555555555555555dddccccc..........
    ........................ccb533333b33333333c5555555555555555d55dcccc..........
    .........................cb533333b3333333b55d55555555555555555dcccc..........
    .........................cd533333b33b133b55dd5555555555555555dddccc..........
    .................cccc....c5513333333b11355dd55555555555555ddddddcc...........
    ................c55bcc...c5513333333b1155dd5555555555555555dddddcc...........
    ................c55bbc...c5533333333b555dd55555555555555555ddddddccc.........
    ..............ccc55bddc..cb553133133555dd555555555cccc5555dddddddcccccc......
    .............c55bb5bdddc..c55513313555dd5555555555c55ccccddddddddcccccc......
    .............c55dbbbdddcc..cd5555555dbdd5555555555cb5555ccccdddddccccc.......
    .............c555bddbbb5c..cbbbbbbbbbddd5555555ccccbb55bb5dbcddddbccc........
    ..............bbbbddb555ccccddbbbbbddddd5555555c55ccbbbb5555bcddddcc.........
    .............cdd555b555bdbb5dddddddddddd5555555bb5555db5555555cdddc..........
    ...........ccbbb555bbbb5dbb5ddddddddddd555555555bb55ddbccbb555ccddcc.........
    ...........c555bb5555555bb555dddddddddd5555555555bc5ddddddbb555cdddcc........
    ...........c5555b5555555b5555ddddddddd555555555555c55dddbbbb555cbdddc........
    ............cbbb555555dbb555555dddddd5555555555555cc5ddbb5555555bbbddc.......
    .............cbb55555ddb555555555555555555555555555c55db55555555dbbbdcc......
    ..............cccddddddb555555555555555555555555555cc555bbb555555dddddc......
    ................ccddddb55555555555555555555555555555c55555dd555555ddddc......
    .................cddddb5555555555555555555555555555dcc5555dd5555555dddc......
    ..cc.............ccddbd555555555555555555555555555d5dc555dd55555555dddc......
    ..c5bb............ccdbd5555555555555555555555555555ddcc555555555555dddc......
    ..c55b.............ccbd555555555555555555555555555ddddc555555555555ddcc......
    ..cb5bb.............cbdd5555555555555555555555555d5dddcc5555555555dddcc......
    ..cb55b..............cdd555555555555555555555555d55ddddccc5555555dddcc.......
    ..cb55b..............cddd555555555555555555d555d55dddddddccc555ddddcc........
    ..c555b..............cdd55555dd555555555555555dddddddddddddcccccccccc........
    .cb555bb.............cbdd5555dd5555555555555dddddddddddddddddddddddccc.......
    .cb555bb............ccbddd5d55555555dd55555555dddddddddddddddddddddcccc......
    .c55555b...........cccbbddddddd555555555ddd55dddddddddddddddddddddbccc.......
    cb55555b..........cccbbbbdddd55ddd5555ddddddddddddddddddddddddddddbcc........
    cb55555b........bccbbbd5555dd555dd5555d55ddddddddddddddddd55ddddbbbc.........
    c5555555bb....bbbddbb5555555ddddddddddd55dddddddddddddddd55ddddddbbc.........
    c55555555bbbbbbddddc555555555dddddddddddddddddddddddddddd5dd5555ddbc.........
    cd5555555555ddddddc5555555555ddddddddddddddddddddddddddddd55555555dc.........
    cd5555555555dddddcc5555555555dddddddddddddddddddddddddd55d555555555cc........
    cdd55555555ddddddc55555555555dddddddddddddddddddddddddd5555555555555c........
    cddd555555ddddddcc5555555555ddddddddddddddddddddddddddddd55555555555cc.......
    ccddddddddddddddc55555555555ddddddddddddddddddddddddddddd555555555555c.......
    .cddddddddddddddc555555555555dddddddddddddddddddddddddddd555555555555c.......
    .ccddddddddddddcc555555555555ddddddddddddddddddbddddddddd555555555555cc......
    ..ccdddddddddddcc5555555dd55dddddddddddddddddddbdddddddd5d555555555555c......
    ...ccddddddddddccd5555dddddddddddddbbddddddddddbddddddddd5555555555555c......
    ....cccddddddddcddddddddddddddddddbbddddddddddbbbdddddddddd55555555555c......
    ......cccdddddccdddddddddddddddddccccccccccccbbbbddddddddddd555555555dc......
    ........cccccccdddddddddddddddddccc........ccccbbbdddddddddddd5555555dcc.....
    ............ccc555555dddddddddccc.............cccbddddddddddddd55555ddccc....
    .............c55555555ddddddccc..................ccdddddddddddddddddddccc....
    ...........ccdddccd555dddccccc....................ccdddddddddddd5555555dc....
    ..........ccdddccdddddcddcc........................cccddddddddd55555555dcc...
    ..........ccdddcdddccccddc...........................ccccccdddd555ddddccddcc.
    ..........ccccccddcccccdcc...............................ccddddddccddddccddcc
    ...............cdc.....ccc................................cccccdddccddddcddcc
    ...............cc...........................................ccccdddccccdccccc
    ...............................................................ccccc..ccc....
    `, SpriteKind.EnemyBoss)
animation.runImageAnimation(
myEnemyBoss,
[img`
    ........................
    ........................
    ..........ccc...........
    .........cccc...........
    .....ccccccc..ccc.......
    ...cc555555cccccc.......
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555551ff555555bccc.....
    c55d55ff55555555bc......
    c5555555555555555b......
    .cbb31bb5555dd555b.cc...
    .c5333b555ddddd55dccc...
    .c533b55ddddddddddb.....
    .c5555dddbb55bdddddccc..
    ..ccccbbbb555bdddddccc..
    ...cdcbc5555bddddddcc...
    ....ccbc55bc5ddddddbcccc
    .....cbbcc5555dddddddddc
    .....ccbbb555ddbddddddc.
    .....cdcbc55ddbbbdddcc..
    ...ccdddccddddbcbbcc....
    ...ccccccd555ddccc......
    ........cccccccc........
    `,img`
    ............ccc.........
    .......cccccccc.........
    .....cc55555cc..cc......
    ....c555555555cccc......
    ...c55555555555bcc......
    ..c555551ff55555b..cc...
    ..c55d55ff5555555bccc...
    ..c55555555d55555bcc....
    ..c5555d5555d55555b.....
    ..cbbbb55555ddd555b.cc..
    ..c555d5555ddddd55dccc..
    ...c555dbbbdddbd5ddcc...
    ....cccbbbbb555bdddb....
    ....cbbbbbbc555bdddccc..
    ...cbbbbbbc555bddddcc...
    ...cbbbbbc555bdddddc....
    ..ccbbbbbc55bddddddcc...
    ..ccbbbbbbcb55dddddbcc..
    ...cbbbbbb5555ddddddddcc
    ....cbbbbb555ddbdddddddc
    ....cccbbc55ddbbbddddcc.
    ...ccdddccddddbcbbccc...
    ...ccccccd555ddccc......
    ........cccccccc........
    `,img`
    .............ccc........
    ........cccccccc........
    ......cc55555cc..cc.....
    .....c555555555cccc.....
    ....c55555555555bcc.....
    ...c555555ccb5555b.cc...
    ...c55d55c55555555bcc...
    ...c55555555dd5555bc....
    ...c5555d5555dd5555.....
    ...cbbbd555555dd555.cc..
    ...c555d555555ddd55ccc..
    ....c555d5555ddbd5dcc...
    ....cccbbbbb555bdddb....
    ...cbbbbbbbc555bdddccc..
    ..cbbbbbbbc555bddddcc...
    ..cbbbbbbc555bdddddc....
    .ccbbbbbbc55bddddddcc...
    .ccbbbbbbbcb55dddddbc...
    ..cbbbbbbb5555ddddddbc..
    ...cbbbbbb555ddbddddddc.
    ....cccbbc55ddbbbddddddc
    ...ccdddccddddbcbbcccccc
    ...ccccccd555ddccc......
    ........cccccccc........
    `,img`
    ........................
    ........................
    ........................
    ..........ccc...........
    .........cccc...........
    .....ccccccc..ccc.......
    ...cc555555cccccc.......
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555555ccb55555bccc.....
    c55d55c555555555bc......
    c5555555555555555b......
    .cbbb1bb5555dd555b.cc...
    .c533bbbb5ddddd55dcc....
    .c533bbbb5ddddddddbcc...
    .c533bbb55dddddddddcccc.
    .c5333bb5bb55bdddddcccdc
    .c5333b5bb555bddddddbddc
    .c53335b5555bddddddddddc
    ..c5555c55bb55dbddddddcc
    ...cccbccc55ddbbbddddcc.
    ....cdddccddddbcbbbcc...
    ....cccccd555ddcccc.....
    ........cccccccc........
    `,img`
    ........................
    ........................
    ........................
    ..........ccc...........
    .........cccc...........
    .....ccccccc..ccc.......
    ...cc555555cccccc.......
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555555ccb55555bccc.....
    c55d55c555555555bc......
    c5555555555555555b......
    .cbbb1bb5555dd555b.cc...
    .c533bbbb5ddddd55dcc....
    .c533bbbb5ddddddddbcc...
    .c5333bb55dddddddddcccc.
    .c5333b55bb55bdddddcccdc
    .c533355bb555bddddddbddc
    ..c5555b5555bddddddddddc
    ...cccbc55bb55dbddddddcc
    .....cbbcc55ddbbbddddcc.
    ....cdddccddddbcbbbcc...
    ....cccccd555ddcccc.....
    ........cccccccc........
    `,img`
    ........................
    ........................
    ........................
    ..........ccc...........
    .........cccc...........
    .....ccccccc..ccc.......
    ...cc555555cccccc.......
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555555ccb55555bccc.....
    c55d55c555555555bc......
    c5555555555555555b......
    .cbbb1bb5555dd555b.cc...
    .c533bbb55ddddd55dcc....
    .c5333bb5dddddddddbcc...
    .c5333b55ddddddddddcccc.
    .c533355dbb55bdddddcccdc
    ..c55555bb555bddddddbddc
    ...cccbb5555bddddddddddc
    .....cbc55bb55dbddddddcc
    .....cdbcc55ddbbbddddcc.
    ....cdddccddddbcbbbcc...
    ....cccccd555ddcccc.....
    ........cccccccc........
    `],
500,
true
)
tiles.placeOnTile(myEnemyBoss, tiles.getTileLocation(28, 3))
BossSize = 0
myShield = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f e e e e e e e e f . . . 
    . . f f f f f f f f f f f f . . 
    . f f 7 7 7 7 7 7 7 7 7 7 f f . 
    . f 7 7 e e e 4 4 e e e 7 7 f . 
    . f 7 e e e e 4 4 e e e e 7 f . 
    . f 7 e e 4 4 4 4 4 4 e e 7 f . 
    . f 7 e e 4 4 4 4 4 4 e e 7 f . 
    . f 7 7 e e e 4 4 e e e 7 7 f . 
    . f f 7 e e e 4 4 e e e 7 f f . 
    . . f 7 7 e e 4 4 e e 7 7 f . . 
    . . f f 7 e e e e e e 7 f f . . 
    . . . f 7 7 7 7 7 7 7 7 f . . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Shield)
tiles.placeOnTile(myShield, tiles.getTileLocation(11, 14))
game.onUpdateInterval(5000, function () {
    if (PlayerInvincible == 1) {
        PlayerInvincible = 0
    }
})
game.onUpdateInterval(3000, function () {
    if (ProjectileOn == 1) {
        EnemyFire = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, myEnemy3, randint(25, 75), randint(0, 100))
    }
    if (BossProjectileOn == 1) {
        BossFire = sprites.createProjectileFromSprite(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, myEnemyBoss, randint(-25, -75), randint(0, 100))
    }
})
