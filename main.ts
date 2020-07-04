namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingOak, function (sprite, location) {
    game.over(true, effects.bubbles)
})
let unu = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f 3 3 f f f 3 3 b b b f c . . . 
f 3 b b b b b 3 b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(unu)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100002040404040404040404040404040403070e0d0d0d0d0d0d0d0d0d0d0d0d0d07070b0d0d0b0b0b0c0b0b0b0d0d0d0d07070b0d0d0b0c0b0c0b0c0b0d0d0d0d07070b0b0b0b0c0b0c0b0c0b0d0d0d0d07070d0d0d0b0c0b0b0b0c0b0b0b0d0d07070d0d0d0d0d0d0d0d0d0d0b0b0d0d07070d0d0d0d0d0d0d0d0b0b0b0d0d0d07070d0b0b0b0b0b0b0d0b0b0d0d0d0d07070d0b0d0d0d0d0b0d0d0b0d0d0d0d07070d0b0b0b0b0d0b0d0d0b0d0d0d0d070d0d0d0d0d0b0d0b0d0d0b0b0d0d0d07070d0d0b0b0b0d0b0d0d0b0b0d0d0d07070d0d0b0d0d0d0b0b0b0b0d0d0d0d07070a0b0b0d0d0d0d0d0d0d0d0d0d0d0706040404040404040404040404040405`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . . . 2 . . . 2 2 2 2 2 
2 . 2 2 . 2 . 2 . 2 . 2 2 2 2 2 
2 . . . . 2 . 2 . 2 . 2 2 2 2 2 
2 2 2 2 . 2 . . . 2 . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 
2 2 . . . . . . 2 . . 2 2 2 2 2 
2 2 . 2 2 2 2 . 2 2 . 2 2 2 2 2 
2 2 . . . . 2 . 2 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 . 2 2 . . 2 2 2 2 
2 2 2 . . . 2 . 2 2 . . 2 2 2 2 
2 2 2 . 2 2 2 . . . . 2 2 2 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.hazardWater,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadVertical,sprites.castle.shrub,sprites.castle.rock2,sprites.castle.saplingOak,sprites.builtin.brick,sprites.dungeon.buttonOrangeDepressed,sprites.castle.tileGrass2,sprites.dungeon.buttonPink],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(unu)
unu.setFlag(SpriteFlag.StayInScreen, true)
tiles.placeOnRandomTile(unu, sprites.dungeon.buttonPink)
