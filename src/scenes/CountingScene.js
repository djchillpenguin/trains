import { NumberButton } from "../gameobjects/NumberButton";
import { Boxcar } from "../gameobjects/Boxcar";

export class CountingScene extends Phaser.Scene {
    constructor(){
        super({
            key: "CountingScene"
        })
    }

    create(){
        //background stuff
        this.sky = this.add.tileSprite(0, 0, this.game.renderer.width, this.game.renderer.height, 'sky');
        this.sky.setOrigin(0, 0);
        this.sky.setScrollFactor(0);
        this.mountains = this.add.tileSprite(0, 0, this.game.renderer.width, this.game.renderer.height, 'mountains');
        this.mountains.setOrigin(0, 0);
        this.mountains.setScrollFactor(0);
        this.trees = this.add.tileSprite(0, 0, this.game.renderer.width, this.game.renderer.height, 'trees');
        this.trees.setOrigin(0, 0);
        this.trees.setScrollFactor(0);
        this.ground = this.add.tileSprite(0, 0, this.game.renderer.width, this.game.renderer.height, 'ground');
        this.ground.setOrigin(0, 0);
        this.ground.setScrollFactor(0);

        //audio
        this.one = this.sound.add('one');
        this.two = this.sound.add('two');
        this.three = this.sound.add('three');
        this.four = this.sound.add('four');
        this.five = this.sound.add('five');
        this.six = this.sound.add('six');
        this.seven = this.sound.add('seven');
        this.eight = this.sound.add('eight');
        this.nine = this.sound.add('nine');
        this.ten = this.sound.add('ten');
        this.howmany = this.sound.add('howmany');
        this.goodjob = this.sound.add('goodjob');
        this.imsorry = this.sound.add('imsorry');

        //camera
        this.camera = this.cameras.main;

        //creates correct answer
        this.correctAnswer = Math.floor(Math.random() * 6 + 1);

        createTrain(this, this.correctAnswer);
        this.camera.startFollow(this.boxCars[0]);
        this.camera.setFollowOffset(160, 88);
        this.camera.setBounds(0, 0, 1600, 450);

        setTimeout(()=> this.camera.removeBounds(), 6000);

        createButtons(this, this.correctAnswer);
        this.numberButton1.on('pointerdown', () => {
            if (this.numberButton1.num === this.correctAnswer) {
                this.numberButton1.setTexture('greenButton');
                playNumberSound(this, this.numberButton1.num);
                setTimeout(()=> this.goodjob.play(), 1000);
                setTimeout(()=> this.camera.stopFollow(), 2000);
                setTimeout(() => this.scene.start('CountingScene'), 5000);
            } else {
                this.numberButton1.setTexture('redButton');
                playNumberSound(this, this.numberButton1.num);
                setTimeout(()=> this.imsorry.play(), 1000);
                setTimeout(()=> this.numberButton1.setTexture('purpleButton'), 1000);
            }
        });

        this.numberButton2.on('pointerdown', () => {
            if (this.numberButton2.num === this.correctAnswer) {
                this.numberButton2.setTexture('greenButton');
                playNumberSound(this, this.numberButton2.num);
                setTimeout(()=> this.goodjob.play(), 1000);
                setTimeout(()=> this.camera.stopFollow(), 2000);
                setTimeout(() => this.scene.start('CountingScene'), 5000);
            } else {
                this.numberButton2.setTexture('redButton');
                playNumberSound(this, this.numberButton2.num);
                setTimeout(()=> this.imsorry.play(), 1000);
                setTimeout(()=> this.numberButton2.setTexture('purpleButton'), 1000);
            }
        });

        this.numberButton3.on('pointerdown', () => {
            if (this.numberButton3.num === this.correctAnswer) {
                this.numberButton3.setTexture('greenButton');
                playNumberSound(this, this.numberButton3.num);
                setTimeout(()=> this.goodjob.play(), 1000);
                setTimeout(()=> this.camera.stopFollow(), 2000);
                setTimeout(() => this.scene.start('CountingScene'), 5000);
            } else {
                this.numberButton3.setTexture('redButton');
                playNumberSound(this, this.numberButton3.num);
                setTimeout(()=> this.imsorry.play(), 1000);
                setTimeout(()=> this.numberButton3.setTexture('purpleButton'), 1000);
            }
        });

        setTimeout(()=> this.howmany.play(), 1000);

    }

    update(time){
        this.sky.tilePositionX = this.camera.scrollX * .01;
        this.mountains.tilePositionX = this.camera.scrollX * .1;
        this.trees.tilePositionX = this.camera.scrollX * .9;
        this.ground.tilePositionX = this.camera.scrollX;

    }
}

function createTrain(scene, carNumber) {
    scene.locomotive = scene.physics.add.sprite(-100, 200, 'locomotive');
    scene.locomotive.setVelocityX(100);
    scene.boxCars = [];
    let boxCarTextures = [
        'yellowBoxCar',
        'greenBoxCar',
        'blueBoxCar',
        'redBoxCar',
        'purpleBoxCar'
    ];
    for(let i = 1; i <= carNumber; i++){
        let boxCarTexture = boxCarTextures[Math.floor(Math.random() * 4)];
        scene.boxCars.push(new Boxcar(scene, -121 - (60 * i), 200, boxCarTexture));
    }

    scene.locomotive.play('locomotiveAnim');
}

function createButtons(scene, carNumber) {
    let choice1, choice2, buttonArrange;

    do{
        choice1 = Math.floor(Math.random() * 5 + 1);
        choice2 = Math.floor(Math.random() * 5 + 1);
    }while(choice1 === carNumber || choice2 === carNumber || choice1 === choice2);

    buttonArrange = Math.floor(Math.random() * 2);

    if(buttonArrange === 0) {
        scene.numberButton1 = new NumberButton(scene,
            scene.game.renderer.width / 4, 75, 'purpleButton', carNumber);
        scene.numberButton2 = new NumberButton(scene,
            scene.game.renderer.width / 2, 75, 'purpleButton', choice1);
        scene.numberButton3 = new NumberButton(scene,
            scene.game.renderer.width * .75, 75, 'purpleButton', choice2);
    } else if(buttonArrange === 1) {
        scene.numberButton1 = new NumberButton(scene,
            scene.game.renderer.width / 4, 75, 'purpleButton', choice1);
        scene.numberButton2 = new NumberButton(scene,
            scene.game.renderer.width / 2, 75, 'purpleButton', carNumber);
        scene.numberButton3 = new NumberButton(scene,
            scene.game.renderer.width * .75, 75, 'purpleButton', choice2);
    } else if(buttonArrange === 2) {
        scene.numberButton1 = new NumberButton(scene,
            scene.game.renderer.width / 4, 75, 'purpleButton', choice1);
        scene.numberButton2 = new NumberButton(scene,
            scene.game.renderer.width / 2, 75, 'purpleButton', choice2);
        scene.numberButton3 = new NumberButton(scene,
            scene.game.renderer.width * .75, 75, 'purpleButton', carNumber);
    }

    console.log(carNumber, choice1, choice2);
}

function playNumberSound(scene, num){
    switch(num){
        case 1:
            scene.one.play();
            break;
        case 2:
            scene.two.play();
            break;
        case 3:
            scene.three.play();
            break;
        case 4:
            scene.four.play();
            break;
        case 5:
            scene.five.play();
            break;
        case 6:
            scene.six.play();
            break;
    }
}