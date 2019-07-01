export class NumberButton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, num){
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setScrollFactor(0);
        this.num = num;
        this.numText = scene.add.text(this.x - 13, this.y - 25, num, 
            { font: '48px arial', fill: '#ffffff'}).setScrollFactor(0);
    }
}