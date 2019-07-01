export class LoadScene extends Phaser.Scene {
    constructor(){
        super({ 
            key: "LoadScene" 
        })
    }
    preload(){
        this.load.image('sky', './assets/sky.png');
        this.load.image('mountains', './assets/mountains.png');
        this.load.image('ground', './assets/ground.png');
        this.load.image('trees', './assets/trees.png');
        this.load.image('trees2', './assets/trees2.png');
        
        this.load.spritesheet('locomotive', './assets/locomotive.png', { frameWidth: 102, frameHeight: 30 });
        this.load.spritesheet('blueBoxCar', './assets/blueBoxCar.png', { frameWidth: 60, frameHeight: 30 });
        this.load.spritesheet('greenBoxCar', './assets/greenBoxCar.png', { frameWidth: 60, frameHeight: 30 });
        this.load.spritesheet('purpleBoxCar', './assets/purpleBoxCar.png', { frameWidth: 60, frameHeight: 30 });
        this.load.spritesheet('redBoxCar', './assets/redBoxCar.png', { frameWidth: 60, frameHeight: 30 });
        this.load.spritesheet('yellowBoxCar', './assets/yellowBoxCar.png', { frameWidth: 60, frameHeight: 30 });

        this.load.image('greenButton', './assets/greenButton.png');
        this.load.image('redButton', './assets/redButton.png');
        this.load.image('purpleButton', './assets/purpleButton.png');
        this.load.image('startButton', './assets/startButton.png');

        this.load.audio('one', './assets/voice/one.mp3');
        this.load.audio('two', './assets/voice/two.mp3');
        this.load.audio('three', './assets/voice/three.mp3');
        this.load.audio('four', './assets/voice/four.mp3');
        this.load.audio('five', './assets/voice/five.mp3');
        this.load.audio('six', './assets/voice/six.mp3');
        this.load.audio('seven', './assets/voice/seven.mp3');
        this.load.audio('eight', './assets/voice/eight.mp3');
        this.load.audio('nine', './assets/voice/nine.mp3');
        this.load.audio('ten', './assets/voice/ten.mp3');

        this.load.audio('howmany', './assets/voice/howmany.mp3');
        this.load.audio('goodjob', './assets/voice/goodjob.mp3');
        this.load.audio('imsorry', './assets/voice/imsorry.mp3');

        this.load.audio('train', './assets/train.wav');
    }
    create(){
        this.scene.start("MenuScene");
    }
}