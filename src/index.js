import Phaser from 'phaser';

// Import game scenes
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';
import LevelScene from './scenes/LevelScene';

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    scene: [MenuScene, LevelScene, GameScene],
    render: {
        pixelArt: true,
        antialias: true,
    },
};

// Create Phaser game
const game = new Phaser.Game(config);
