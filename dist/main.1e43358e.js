// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: "LoadScene"
    }));
  }

  _createClass(LoadScene, [{
    key: "preload",
    value: function preload() {
      this.load.image('sky', './assets/sky.png');
      this.load.image('mountains', './assets/mountains.png');
      this.load.image('ground', './assets/ground.png');
      this.load.image('trees', './assets/trees.png');
      this.load.image('trees2', './assets/trees2.png');
      this.load.spritesheet('locomotive', './assets/locomotive.png', {
        frameWidth: 102,
        frameHeight: 30
      });
      this.load.spritesheet('blueBoxCar', './assets/blueBoxCar.png', {
        frameWidth: 60,
        frameHeight: 30
      });
      this.load.spritesheet('greenBoxCar', './assets/greenBoxCar.png', {
        frameWidth: 60,
        frameHeight: 30
      });
      this.load.spritesheet('purpleBoxCar', './assets/purpleBoxCar.png', {
        frameWidth: 60,
        frameHeight: 30
      });
      this.load.spritesheet('redBoxCar', './assets/redBoxCar.png', {
        frameWidth: 60,
        frameHeight: 30
      });
      this.load.spritesheet('yellowBoxCar', './assets/yellowBoxCar.png', {
        frameWidth: 60,
        frameHeight: 30
      });
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
  }, {
    key: "create",
    value: function create() {
      this.scene.start("MenuScene");
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{}],"src/gameobjects/Boxcar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Boxcar = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Boxcar =
/*#__PURE__*/
function (_Phaser$Physics$Arcad) {
  _inherits(Boxcar, _Phaser$Physics$Arcad);

  function Boxcar(scene, x, y, texture) {
    var _this;

    _classCallCheck(this, Boxcar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Boxcar).call(this, scene, x, y, texture));
    scene.sys.updateList.add(_assertThisInitialized(_assertThisInitialized(_this)));
    scene.sys.displayList.add(_assertThisInitialized(_assertThisInitialized(_this)));
    var animName = texture + 'Anim';

    _this.play(animName);

    scene.physics.world.enableBody(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.setVelocityX(100);

    return _this;
  }

  return Boxcar;
}(Phaser.Physics.Arcade.Sprite);

exports.Boxcar = Boxcar;
},{}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _Boxcar = require("../gameobjects/Boxcar");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: "MenuScene"
    }));
  }

  _createClass(MenuScene, [{
    key: "create",
    value: function create() {
      var _this = this;

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
        frames: this.anims.generateFrameNumbers('locomotive', {
          start: 0,
          end: 7
        }),
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: 'blueBoxCarAnim',
        frames: this.anims.generateFrameNumbers('blueBoxCar', {
          start: 0,
          end: 1
        }),
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: 'yellowBoxCarAnim',
        frames: this.anims.generateFrameNumbers('yellowBoxCar', {
          start: 0,
          end: 1
        }),
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: 'greenBoxCarAnim',
        frames: this.anims.generateFrameNumbers('greenBoxCar', {
          start: 0,
          end: 1
        }),
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: 'purpleBoxCarAnim',
        frames: this.anims.generateFrameNumbers('purpleBoxCar', {
          start: 0,
          end: 1
        }),
        frameRate: 8,
        repeat: -1
      });
      this.anims.create({
        key: 'redBoxCarAnim',
        frames: this.anims.generateFrameNumbers('redBoxCar', {
          start: 0,
          end: 1
        }),
        frameRate: 8,
        repeat: -1
      });
      this.locomotive = this.physics.add.sprite(100, 200, 'locomotive');
      this.locomotive.setVelocityX(100);
      this.locomotive.setInteractive();
      this.locomotive.play('locomotiveAnim');
      this.locomotive.on('pointerdown', function () {
        if (!_this.trainSound.isPlaying) {
          _this.trainSound.play();
        }

        console.log('check');
      });
      this.boxCar1 = new _Boxcar.Boxcar(this, 19, 200, 'yellowBoxCar'); //this.boxCar1.setVelocityX(100);

      this.boxCar2 = new _Boxcar.Boxcar(this, -41, 200, 'blueBoxCar'); //this.boxCar2.setVelocityX(100);

      this.boxCar3 = new _Boxcar.Boxcar(this, -101, 200, 'greenBoxCar'); //this.boxCar3.setVelocityX(100);

      this.boxCar4 = new _Boxcar.Boxcar(this, -161, 200, 'redBoxCar'); //this.boxCar4.setVelocityX(100);

      this.boxCar5 = new _Boxcar.Boxcar(this, -221, 200, 'purpleBoxCar'); //this.boxCar5.setVelocityX(100);

      this.camera = this.cameras.main;
      this.camera.startFollow(this.locomotive);
      this.camera.setFollowOffset(142, 88); //this.camera.setBounds(0, 0, 1600, 450);

      this.startButton = this.add.sprite(this.game.renderer.width / 2, 100, 'startButton').setInteractive();
      this.startButton.setScrollFactor(0);
      this.startButton.on('pointerdown', function () {
        return _this.scene.start('CountingScene');
      });
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      this.sky.tilePositionX = this.camera.scrollX * .01;
      this.mountains.tilePositionX = this.camera.scrollX * .1;
      this.trees.tilePositionX = this.camera.scrollX * .7;
      this.trees2.tilePositionX = this.camera.scrollX * .5;
      this.ground.tilePositionX = this.camera.scrollX;
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../gameobjects/Boxcar":"src/gameobjects/Boxcar.js"}],"src/gameobjects/NumberButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberButton = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var NumberButton =
/*#__PURE__*/
function (_Phaser$GameObjects$S) {
  _inherits(NumberButton, _Phaser$GameObjects$S);

  function NumberButton(scene, x, y, texture, num) {
    var _this;

    _classCallCheck(this, NumberButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberButton).call(this, scene, x, y, texture));
    scene.sys.updateList.add(_assertThisInitialized(_assertThisInitialized(_this)));
    scene.sys.displayList.add(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.setScrollFactor(0);

    _this.num = num;
    _this.numText = scene.add.text(_this.x - 13, _this.y - 25, num, {
      font: '48px arial',
      fill: '#ffffff'
    }).setScrollFactor(0);
    return _this;
  }

  return NumberButton;
}(Phaser.GameObjects.Sprite);

exports.NumberButton = NumberButton;
},{}],"src/scenes/CountingScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountingScene = void 0;

var _NumberButton = require("../gameobjects/NumberButton");

var _Boxcar = require("../gameobjects/Boxcar");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CountingScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(CountingScene, _Phaser$Scene);

  function CountingScene() {
    _classCallCheck(this, CountingScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(CountingScene).call(this, {
      key: "CountingScene"
    }));
  }

  _createClass(CountingScene, [{
    key: "create",
    value: function create() {
      var _this = this;

      //background stuff
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
      this.ground.setScrollFactor(0); //audio

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
      this.trainSound = this.sound.add('train'); //camera

      this.camera = this.cameras.main; //creates correct answer

      this.correctAnswer = Math.floor(Math.random() * 6 + 1);
      createTrain(this, this.correctAnswer);
      this.camera.startFollow(this.boxCars[0]);
      this.camera.setFollowOffset(160, 88);
      this.camera.setBounds(0, 0, 1600, 450);
      setTimeout(function () {
        return _this.camera.removeBounds();
      }, 6000);
      createButtons(this, this.correctAnswer);
      this.numberButton1.on('pointerdown', function () {
        if (_this.numberButton1.num === _this.correctAnswer) {
          _this.numberButton1.setTexture('greenButton');

          playNumberSound(_this, _this.numberButton1.num);
          setTimeout(function () {
            return _this.goodjob.play();
          }, 1000);
          setTimeout(function () {
            return _this.trainSound.play();
          }, 2000);
          setTimeout(function () {
            return _this.camera.stopFollow();
          }, 2000);
          setTimeout(function () {
            return _this.scene.start('CountingScene');
          }, 5000);

          _this.numberButton1.removeInteractive();

          _this.numberButton2.removeInteractive();

          _this.numberButton3.removeInteractive();
        } else {
          _this.numberButton1.setTexture('redButton');

          playNumberSound(_this, _this.numberButton1.num);
          setTimeout(function () {
            if (!_this.imsorry.isPlaying) {
              _this.imsorry.play();
            }
          }, 1000);
          setTimeout(function () {
            return _this.numberButton1.setTexture('purpleButton');
          }, 1000);
        }
      });
      this.numberButton2.on('pointerdown', function () {
        if (_this.numberButton2.num === _this.correctAnswer) {
          _this.numberButton2.setTexture('greenButton');

          playNumberSound(_this, _this.numberButton2.num);
          setTimeout(function () {
            return _this.goodjob.play();
          }, 1000);
          setTimeout(function () {
            return _this.trainSound.play();
          }, 2000);
          setTimeout(function () {
            return _this.camera.stopFollow();
          }, 2000);
          setTimeout(function () {
            return _this.scene.start('CountingScene');
          }, 5000);

          _this.numberButton1.removeInteractive();

          _this.numberButton2.removeInteractive();

          _this.numberButton3.removeInteractive();
        } else {
          _this.numberButton2.setTexture('redButton');

          playNumberSound(_this, _this.numberButton2.num);
          setTimeout(function () {
            if (!_this.imsorry.isPlaying) {
              _this.imsorry.play();
            }
          }, 1000);
          setTimeout(function () {
            return _this.numberButton2.setTexture('purpleButton');
          }, 1000);
        }
      });
      this.numberButton3.on('pointerdown', function () {
        if (_this.numberButton3.num === _this.correctAnswer) {
          _this.numberButton3.setTexture('greenButton');

          playNumberSound(_this, _this.numberButton3.num);
          setTimeout(function () {
            return _this.goodjob.play();
          }, 1000);
          setTimeout(function () {
            return _this.trainSound.play();
          }, 2000);
          setTimeout(function () {
            return _this.camera.stopFollow();
          }, 2000);
          setTimeout(function () {
            return _this.scene.start('CountingScene');
          }, 5000);

          _this.numberButton1.removeInteractive();

          _this.numberButton2.removeInteractive();

          _this.numberButton3.removeInteractive();
        } else {
          _this.numberButton3.setTexture('redButton');

          playNumberSound(_this, _this.numberButton3.num);
          setTimeout(function () {
            if (!_this.imsorry.isPlaying) {
              _this.imsorry.play();
            }
          }, 1000);
          setTimeout(function () {
            return _this.numberButton3.setTexture('purpleButton');
          }, 1000);
        }
      });
      setTimeout(function () {
        return _this.howmany.play();
      }, 1000);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.sky.tilePositionX = this.camera.scrollX * .01;
      this.mountains.tilePositionX = this.camera.scrollX * .1;
      this.trees.tilePositionX = this.camera.scrollX * .7;
      this.trees2.tilePositionX = this.camera.scrollX * .5;
      this.ground.tilePositionX = this.camera.scrollX;
    }
  }]);

  return CountingScene;
}(Phaser.Scene);

exports.CountingScene = CountingScene;

function createTrain(scene, carNumber) {
  scene.locomotive = scene.physics.add.sprite(-100, 200, 'locomotive');
  scene.locomotive.setVelocityX(100);
  scene.boxCars = [];
  var boxCarTextures = ['yellowBoxCar', 'greenBoxCar', 'blueBoxCar', 'redBoxCar', 'purpleBoxCar'];

  for (var i = 1; i <= carNumber; i++) {
    var boxCarTexture = boxCarTextures[Math.floor(Math.random() * 4)];
    scene.boxCars.push(new _Boxcar.Boxcar(scene, -121 - 60 * i, 200, boxCarTexture));
  }

  scene.locomotive.play('locomotiveAnim');
}

function createButtons(scene, carNumber) {
  var choice1, choice2, buttonArrange;

  do {
    choice1 = Math.floor(Math.random() * 5 + 1);
    choice2 = Math.floor(Math.random() * 5 + 1);
  } while (choice1 === carNumber || choice2 === carNumber || choice1 === choice2);

  buttonArrange = Math.floor(Math.random() * 2);

  if (buttonArrange === 0) {
    scene.numberButton1 = new _NumberButton.NumberButton(scene, scene.game.renderer.width / 4, 75, 'purpleButton', carNumber);
    scene.numberButton2 = new _NumberButton.NumberButton(scene, scene.game.renderer.width / 2, 75, 'purpleButton', choice1);
    scene.numberButton3 = new _NumberButton.NumberButton(scene, scene.game.renderer.width * .75, 75, 'purpleButton', choice2);
  } else if (buttonArrange === 1) {
    scene.numberButton1 = new _NumberButton.NumberButton(scene, scene.game.renderer.width / 4, 75, 'purpleButton', choice1);
    scene.numberButton2 = new _NumberButton.NumberButton(scene, scene.game.renderer.width / 2, 75, 'purpleButton', carNumber);
    scene.numberButton3 = new _NumberButton.NumberButton(scene, scene.game.renderer.width * .75, 75, 'purpleButton', choice2);
  } else if (buttonArrange === 2) {
    scene.numberButton1 = new _NumberButton.NumberButton(scene, scene.game.renderer.width / 4, 75, 'purpleButton', choice1);
    scene.numberButton2 = new _NumberButton.NumberButton(scene, scene.game.renderer.width / 2, 75, 'purpleButton', choice2);
    scene.numberButton3 = new _NumberButton.NumberButton(scene, scene.game.renderer.width * .75, 75, 'purpleButton', carNumber);
  }

  setTimeout(function () {
    scene.numberButton1.setInteractive();
    scene.numberButton2.setInteractive();
    scene.numberButton3.setInteractive();
  }, 3000);
  console.log(carNumber, choice1, choice2);
}

function playNumberSound(scene, num) {
  switch (num) {
    case 1:
      if (!scene.one.isPlaying && !scene.imsorry.isPlaying) {
        scene.one.play();
      }

      break;

    case 2:
      if (!scene.two.isPlaying && !scene.imsorry.isPlaying) {
        scene.two.play();
      }

      break;

    case 3:
      if (!scene.three.isPlaying && !scene.imsorry.isPlaying) {
        scene.three.play();
      }

      break;

    case 4:
      if (!scene.four.isPlaying && !scene.imsorry.isPlaying) {
        scene.four.play();
      }

      break;

    case 5:
      if (!scene.five.isPlaying && !scene.imsorry.isPlaying) {
        scene.five.play();
      }

      break;

    case 6:
      if (!scene.six.isPlaying && !scene.imsorry.isPlaying) {
        scene.six.play();
      }

      break;
  }
}
},{"../gameobjects/NumberButton":"src/gameobjects/NumberButton.js","../gameobjects/Boxcar":"src/gameobjects/Boxcar.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _CountingScene = require("./scenes/CountingScene");

/** @type {import("../typings/phaser")} */
var game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'gamediv',
  width: 400,
  height: 225,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
        y: 0
      }
    }
  },
  pixelArt: true,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _CountingScene.CountingScene],
  scale: {
    mode: Phaser.Scale.FIT
  }
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/CountingScene":"src/scenes/CountingScene.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54854" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.map