import { Boxcar } from "../gameobjects/Boxcar";

export class MenuScene extends Phaser.Scene {
    constructor(){
        super({
            key: "MenuScene"
        })
    }

    create(){
        this.sky = this.add.tileSprite(0, 0, this.game.renderer.width, this.game.renderer.height, 'sky');
        this.sky.setOrigin(0, 0);
        this.sky.setScrollFactor(0);
        this.mountains = this.add.tileSprite(0, 0, this.game.renderer.width, this.game.renderer.height, 'mountains');
        this.mountains.setOrigin(0, 0);
        this.mountains.setScrollFactor(0);
        this.trees2 = this.add.tileSprite(0, 0, this.game.renderer.width, this.game.renderer.height, 'trees2');
        this.trees2.setOrigin(0, 0);
        this.trees2.setScrollFactor(0);
        this.trees = this.add.tileSprite(0, 0, this.game.renderer.width, this.game.renderer.height, 'trees');
        this.trees.setOrigin(0, 0);
        this.trees.setScrollFactor(0);
        this.ground = this.add.tileSprite(0, 0, this.game.renderer.width, this.game.renderer.height, 'ground');
        this.ground.setOrigin(0, 0);
        this.ground.setScrollFactor(0);

        this.trainSound = this.sound.add('train');

        this.anims.create({
            key: 'locomotiveAnim',
            frames: this.anims.generateFrameNumbers('locomotive', { start: 0, end: 7 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'blueBoxCarAnim',
            frames: this.anims.generateFrameNumbers('blueBoxCar', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'yellowBoxCarAnim',
            frames: this.anims.generateFrameNumbers('yellowBoxCar', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'greenBoxCarAnim',
            frames: this.anims.generateFrameNumbers('greenBoxCar', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'purpleBoxCarAnim',
            frames: this.anims.generateFrameNumbers('purpleBoxCar', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'redBoxCarAnim',
            frames: this.anims.generateFrameNumbers('redBoxCar', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: -1
        });

        this.locomotive = this.physics.add.sprite(100, 200, 'locomotive');
        this.locomotive.setVelocityX(100);
        this.locomotive.setInteractive();
        this.locomotive.play('locomotiveAnim');
        this.locomotive.on('pointerdown', ()=> {
            if(!this.trainSound.isPlaying){
                this.trainSound.play();
            }
            console.log('check');
        });

        this.boxCar1 = new Boxcar(this, 19, 200, 'yellowBoxCar');
        //this.boxCar1.setVelocityX(100);
        this.boxCar2 = new Boxcar(this, -41, 200, 'blueBoxCar');
        //this.boxCar2.setVelocityX(100);
        this.boxCar3 = new Boxcar(this, -101, 200, 'greenBoxCar');
        //this.boxCar3.setVelocityX(100);
        this.boxCar4 = new Boxcar(this, -161, 200, 'redBoxCar');
        //this.boxCar4.setVelocityX(100);
        this.boxCar5 = new Boxcar(this, -221, 200, 'purpleBoxCar');
        //this.boxCar5.setVelocityX(100);

        this.camera = this.cameras.main;
        this.camera.startFollow(this.locomotive);
        this.camera.setFollowOffset(142, 88);
        //this.camera.setBounds(0, 0, 1600, 450);

        this.startButton = this.add.sprite(this.game.renderer.width / 2, 100, 'startButton').setInteractive();
        this.startButton.setScrollFactor(0);

        this.startButton.on('pointerdown', () => this.scene.start('CountingScene'));
    }

    update(time, delta){
        this.sky.tilePositionX = this.camera.scrollX * .01;
        this.mountains.tilePositionX = this.camera.scrollX * .1;
        this.trees.tilePositionX = this.camera.scrollX * .7;
        this.trees2.tilePositionX = this.camera.scrollX * .5;
        this.ground.tilePositionX = this.camera.scrollX;
    }
}