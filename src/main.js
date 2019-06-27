import { LoadScene } from "./scenes/LoadScene";
import { MenuScene } from "./scenes/MenuScene";
import { CountingScene } from "./scenes/CountingScene";

/** @type {import("../typings/phaser")} */

let game = new Phaser.Game({
    type: Phaser.AUTO,
    
    parent: 'gamediv',
    width: 400,
    height: 225,
    
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    pixelArt: true,
    scene: [LoadScene, MenuScene, CountingScene],
    scale: {
        mode: Phaser.Scale.FIT
    }
});