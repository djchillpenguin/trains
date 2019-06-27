export class Boxcar extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);

        let animName = texture + 'Anim';
        this.play(animName);

        scene.physics.world.enableBody(this);
        this.setVelocityX(100);
    }
}