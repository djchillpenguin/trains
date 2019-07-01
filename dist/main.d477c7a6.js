parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Ycqt":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function s(e,t,s){return t&&o(e.prototype,t),s&&o(e,s),e}function a(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?i(t):o}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadScene=void 0;var l=function(e){function o(){return t(this,o),a(this,r(o).call(this,{key:"LoadScene"}))}return n(o,Phaser.Scene),s(o,[{key:"preload",value:function(){this.load.image("sky","./assets/sky.png"),this.load.image("mountains","./assets/mountains.png"),this.load.image("ground","./assets/ground.png"),this.load.image("trees","./assets/trees.png"),this.load.image("trees2","./assets/trees2.png"),this.load.spritesheet("locomotive","./assets/locomotive.png",{frameWidth:102,frameHeight:30}),this.load.spritesheet("blueBoxCar","./assets/blueBoxCar.png",{frameWidth:60,frameHeight:30}),this.load.spritesheet("greenBoxCar","./assets/greenBoxCar.png",{frameWidth:60,frameHeight:30}),this.load.spritesheet("purpleBoxCar","./assets/purpleBoxCar.png",{frameWidth:60,frameHeight:30}),this.load.spritesheet("redBoxCar","./assets/redBoxCar.png",{frameWidth:60,frameHeight:30}),this.load.spritesheet("yellowBoxCar","./assets/yellowBoxCar.png",{frameWidth:60,frameHeight:30}),this.load.image("greenButton","./assets/greenButton.png"),this.load.image("redButton","./assets/redButton.png"),this.load.image("purpleButton","./assets/purpleButton.png"),this.load.image("startButton","./assets/startButton.png"),this.load.audio("one","./assets/voice/one.mp3"),this.load.audio("two","./assets/voice/two.mp3"),this.load.audio("three","./assets/voice/three.mp3"),this.load.audio("four","./assets/voice/four.mp3"),this.load.audio("five","./assets/voice/five.mp3"),this.load.audio("six","./assets/voice/six.mp3"),this.load.audio("seven","./assets/voice/seven.mp3"),this.load.audio("eight","./assets/voice/eight.mp3"),this.load.audio("nine","./assets/voice/nine.mp3"),this.load.audio("ten","./assets/voice/ten.mp3"),this.load.audio("howmany","./assets/voice/howmany.mp3"),this.load.audio("goodjob","./assets/voice/goodjob.mp3"),this.load.audio("imsorry","./assets/voice/imsorry.mp3"),this.load.audio("train","./assets/train.wav")}},{key:"create",value:function(){this.scene.start("MenuScene")}}]),o}();exports.LoadScene=l;
},{}],"7qjn":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(e,o){return!o||"object"!==t(o)&&"function"!=typeof o?c(e):o}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Boxcar=void 0;var u=function(t){function i(t,n,u,s){var f;e(this,i),f=o(this,r(i).call(this,t,n,u,s)),t.sys.updateList.add(c(c(f))),t.sys.displayList.add(c(c(f)));var p=s+"Anim";return f.play(p),t.physics.world.enableBody(c(c(f))),f.setVelocityX(100),f}return n(i,Phaser.Physics.Arcade.Sprite),i}();exports.Boxcar=u;
},{}],"qGid":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MenuScene=void 0;var e=require("../gameobjects/Boxcar");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function s(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?n(e):r}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(t){function i(){return r(this,i),s(this,a(i).call(this,{key:"MenuScene"}))}return h(i,Phaser.Scene),o(i,[{key:"create",value:function(){var t=this;this.sky=this.add.tileSprite(0,0,this.game.renderer.width,this.game.renderer.height,"sky"),this.sky.setOrigin(0,0),this.sky.setScrollFactor(0),this.mountains=this.add.tileSprite(0,0,this.game.renderer.width,this.game.renderer.height,"mountains"),this.mountains.setOrigin(0,0),this.mountains.setScrollFactor(0),this.trees2=this.add.tileSprite(0,0,this.game.renderer.width,this.game.renderer.height,"trees2"),this.trees2.setOrigin(0,0),this.trees2.setScrollFactor(0),this.trees=this.add.tileSprite(0,0,this.game.renderer.width,this.game.renderer.height,"trees"),this.trees.setOrigin(0,0),this.trees.setScrollFactor(0),this.ground=this.add.tileSprite(0,0,this.game.renderer.width,this.game.renderer.height,"ground"),this.ground.setOrigin(0,0),this.ground.setScrollFactor(0),this.trainSound=this.sound.add("train"),this.anims.create({key:"locomotiveAnim",frames:this.anims.generateFrameNumbers("locomotive",{start:0,end:7}),frameRate:8,repeat:-1}),this.anims.create({key:"blueBoxCarAnim",frames:this.anims.generateFrameNumbers("blueBoxCar",{start:0,end:1}),frameRate:8,repeat:-1}),this.anims.create({key:"yellowBoxCarAnim",frames:this.anims.generateFrameNumbers("yellowBoxCar",{start:0,end:1}),frameRate:8,repeat:-1}),this.anims.create({key:"greenBoxCarAnim",frames:this.anims.generateFrameNumbers("greenBoxCar",{start:0,end:1}),frameRate:8,repeat:-1}),this.anims.create({key:"purpleBoxCarAnim",frames:this.anims.generateFrameNumbers("purpleBoxCar",{start:0,end:1}),frameRate:8,repeat:-1}),this.anims.create({key:"redBoxCarAnim",frames:this.anims.generateFrameNumbers("redBoxCar",{start:0,end:1}),frameRate:8,repeat:-1}),this.locomotive=this.physics.add.sprite(100,200,"locomotive"),this.locomotive.setVelocityX(100),this.locomotive.setInteractive(),this.locomotive.play("locomotiveAnim"),this.locomotive.on("pointerdown",function(){t.trainSound.isPlaying||t.trainSound.play(),console.log("check")}),this.boxCar1=new e.Boxcar(this,19,200,"yellowBoxCar"),this.boxCar2=new e.Boxcar(this,-41,200,"blueBoxCar"),this.boxCar3=new e.Boxcar(this,-101,200,"greenBoxCar"),this.boxCar4=new e.Boxcar(this,-161,200,"redBoxCar"),this.boxCar5=new e.Boxcar(this,-221,200,"purpleBoxCar"),this.camera=this.cameras.main,this.camera.startFollow(this.locomotive),this.camera.setFollowOffset(142,88),this.startButton=this.add.sprite(this.game.renderer.width/2,100,"startButton").setInteractive(),this.startButton.setScrollFactor(0),this.startButton.on("pointerdown",function(){return t.scene.start("CountingScene")})}},{key:"update",value:function(e,t){this.sky.tilePositionX=.01*this.camera.scrollX,this.mountains.tilePositionX=.1*this.camera.scrollX,this.trees.tilePositionX=.7*this.camera.scrollX,this.trees2.tilePositionX=.5*this.camera.scrollX,this.ground.tilePositionX=this.camera.scrollX}}]),i}();exports.MenuScene=l;
},{"../gameobjects/Boxcar":"7qjn"}],"6LWO":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(e,o){return!o||"object"!==t(o)&&"function"!=typeof o?i(e):o}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.NumberButton=void 0;var f=function(t){function u(t,n,f,c,s){var a;return e(this,u),a=o(this,r(u).call(this,t,n,f,c)),t.sys.updateList.add(i(i(a))),t.sys.displayList.add(i(i(a))),a.setScrollFactor(0),a.num=s,a.numText=t.add.text(a.x-13,a.y-25,s,{font:"48px arial",fill:"#ffffff"}).setScrollFactor(0),a}return n(u,Phaser.GameObjects.Sprite),u}();exports.NumberButton=f;
},{}],"XfHQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CountingScene=void 0;var t=require("../gameobjects/NumberButton"),e=require("../gameobjects/Boxcar");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(){return r(this,e),u(this,a(e).call(this,{key:"CountingScene"}))}return m(e,Phaser.Scene),i(e,[{key:"create",value:function(){var t=this;this.sky=this.add.tileSprite(0,0,this.game.renderer.width,this.game.renderer.height,"sky"),this.sky.setOrigin(0,0),this.sky.setScrollFactor(0),this.mountains=this.add.tileSprite(0,0,this.game.renderer.width,this.game.renderer.height,"mountains"),this.mountains.setOrigin(0,0),this.mountains.setScrollFactor(0),this.trees2=this.add.tileSprite(0,0,this.game.renderer.width,this.game.renderer.height,"trees2"),this.trees2.setOrigin(0,0),this.trees2.setScrollFactor(0),this.trees=this.add.tileSprite(0,0,this.game.renderer.width,this.game.renderer.height,"trees"),this.trees.setOrigin(0,0),this.trees.setScrollFactor(0),this.ground=this.add.tileSprite(0,0,this.game.renderer.width,this.game.renderer.height,"ground"),this.ground.setOrigin(0,0),this.ground.setScrollFactor(0),this.one=this.sound.add("one"),this.two=this.sound.add("two"),this.three=this.sound.add("three"),this.four=this.sound.add("four"),this.five=this.sound.add("five"),this.six=this.sound.add("six"),this.seven=this.sound.add("seven"),this.eight=this.sound.add("eight"),this.nine=this.sound.add("nine"),this.ten=this.sound.add("ten"),this.howmany=this.sound.add("howmany"),this.goodjob=this.sound.add("goodjob"),this.imsorry=this.sound.add("imsorry"),this.trainSound=this.sound.add("train"),this.camera=this.cameras.main,this.correctAnswer=Math.floor(6*Math.random()+1),l(this,this.correctAnswer),this.camera.startFollow(this.boxCars[0]),this.camera.setFollowOffset(160,88),this.camera.setBounds(0,0,1600,450),setTimeout(function(){return t.camera.removeBounds()},6e3),d(this,this.correctAnswer),this.numberButton1.on("pointerdown",function(){t.numberButton1.num===t.correctAnswer?(t.numberButton1.setTexture("greenButton"),b(t,t.numberButton1.num),setTimeout(function(){return t.goodjob.play()},1e3),setTimeout(function(){return t.trainSound.play()},2e3),setTimeout(function(){return t.camera.stopFollow()},2e3),setTimeout(function(){return t.scene.start("CountingScene")},5e3),t.numberButton1.removeInteractive(),t.numberButton2.removeInteractive(),t.numberButton3.removeInteractive()):(t.numberButton1.setTexture("redButton"),b(t,t.numberButton1.num),setTimeout(function(){t.imsorry.isPlaying||t.imsorry.play()},1e3),setTimeout(function(){return t.numberButton1.setTexture("purpleButton")},1e3))}),this.numberButton2.on("pointerdown",function(){t.numberButton2.num===t.correctAnswer?(t.numberButton2.setTexture("greenButton"),b(t,t.numberButton2.num),setTimeout(function(){return t.goodjob.play()},1e3),setTimeout(function(){return t.trainSound.play()},2e3),setTimeout(function(){return t.camera.stopFollow()},2e3),setTimeout(function(){return t.scene.start("CountingScene")},5e3),t.numberButton1.removeInteractive(),t.numberButton2.removeInteractive(),t.numberButton3.removeInteractive()):(t.numberButton2.setTexture("redButton"),b(t,t.numberButton2.num),setTimeout(function(){t.imsorry.isPlaying||t.imsorry.play()},1e3),setTimeout(function(){return t.numberButton2.setTexture("purpleButton")},1e3))}),this.numberButton3.on("pointerdown",function(){t.numberButton3.num===t.correctAnswer?(t.numberButton3.setTexture("greenButton"),b(t,t.numberButton3.num),setTimeout(function(){return t.goodjob.play()},1e3),setTimeout(function(){return t.trainSound.play()},2e3),setTimeout(function(){return t.camera.stopFollow()},2e3),setTimeout(function(){return t.scene.start("CountingScene")},5e3),t.numberButton1.removeInteractive(),t.numberButton2.removeInteractive(),t.numberButton3.removeInteractive()):(t.numberButton3.setTexture("redButton"),b(t,t.numberButton3.num),setTimeout(function(){t.imsorry.isPlaying||t.imsorry.play()},1e3),setTimeout(function(){return t.numberButton3.setTexture("purpleButton")},1e3))}),setTimeout(function(){return t.howmany.play()},1e3)}},{key:"update",value:function(t){this.sky.tilePositionX=.01*this.camera.scrollX,this.mountains.tilePositionX=.1*this.camera.scrollX,this.trees.tilePositionX=.7*this.camera.scrollX,this.trees2.tilePositionX=.5*this.camera.scrollX,this.ground.tilePositionX=this.camera.scrollX}}]),e}();function l(t,n){t.locomotive=t.physics.add.sprite(-100,200,"locomotive"),t.locomotive.setVelocityX(100),t.boxCars=[];for(var r=["yellowBoxCar","greenBoxCar","blueBoxCar","redBoxCar","purpleBoxCar"],o=1;o<=n;o++){var i=r[Math.floor(4*Math.random())];t.boxCars.push(new e.Boxcar(t,-121-60*o,200,i))}t.locomotive.play("locomotiveAnim")}function d(e,n){var r,o,i;do{r=Math.floor(5*Math.random()+1),o=Math.floor(5*Math.random()+1)}while(r===n||o===n||r===o);0===(i=Math.floor(2*Math.random()))?(e.numberButton1=new t.NumberButton(e,e.game.renderer.width/4,75,"purpleButton",n),e.numberButton2=new t.NumberButton(e,e.game.renderer.width/2,75,"purpleButton",r),e.numberButton3=new t.NumberButton(e,.75*e.game.renderer.width,75,"purpleButton",o)):1===i?(e.numberButton1=new t.NumberButton(e,e.game.renderer.width/4,75,"purpleButton",r),e.numberButton2=new t.NumberButton(e,e.game.renderer.width/2,75,"purpleButton",n),e.numberButton3=new t.NumberButton(e,.75*e.game.renderer.width,75,"purpleButton",o)):2===i&&(e.numberButton1=new t.NumberButton(e,e.game.renderer.width/4,75,"purpleButton",r),e.numberButton2=new t.NumberButton(e,e.game.renderer.width/2,75,"purpleButton",o),e.numberButton3=new t.NumberButton(e,.75*e.game.renderer.width,75,"purpleButton",n)),setTimeout(function(){e.numberButton1.setInteractive(),e.numberButton2.setInteractive(),e.numberButton3.setInteractive()},3e3),console.log(n,r,o)}function b(t,e){switch(e){case 1:t.one.isPlaying||t.imsorry.isPlaying||t.one.play();break;case 2:t.two.isPlaying||t.imsorry.isPlaying||t.two.play();break;case 3:t.three.isPlaying||t.imsorry.isPlaying||t.three.play();break;case 4:t.four.isPlaying||t.imsorry.isPlaying||t.four.play();break;case 5:t.five.isPlaying||t.imsorry.isPlaying||t.five.play();break;case 6:t.six.isPlaying||t.imsorry.isPlaying||t.six.play()}}exports.CountingScene=h;
},{"../gameobjects/NumberButton":"6LWO","../gameobjects/Boxcar":"7qjn"}],"HJD/":[function(require,module,exports) {
"use strict";var e=require("./scenes/LoadScene"),n=require("./scenes/MenuScene"),a=require("./scenes/CountingScene"),c=new Phaser.Game({type:Phaser.AUTO,parent:"gamediv",width:400,height:225,physics:{default:"arcade",arcade:{debug:!1,gravity:{y:0}}},pixelArt:!0,scene:[e.LoadScene,n.MenuScene,a.CountingScene],scale:{mode:Phaser.Scale.FIT}});
},{"./scenes/LoadScene":"Ycqt","./scenes/MenuScene":"qGid","./scenes/CountingScene":"XfHQ"}]},{},["HJD/"], null)
//# sourceMappingURL=/main.d477c7a6.map