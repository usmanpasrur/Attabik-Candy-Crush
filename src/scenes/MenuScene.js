import Phaser from 'phaser';
import { SCENES } from '../utils/constants';

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: SCENES.MENU });
    }

    create() {
        const { width, height } = this.cameras.main;

        // Add background
        this.add.rectangle(width / 2, height / 2, width, height, 0x667eea);

        // Title
        this.add.text(
            width / 2,
            height / 3,
            'ATTABIK CANDY CRUSH',
            {
                fontSize: '48px',
                fontStyle: 'bold',
                color: '#ffffff',
                align: 'center',
                fontFamily: 'Arial Black',
            }
        ).setOrigin(0.5);

        // Subtitle
        this.add.text(
            width / 2,
            height / 3 + 70,
            'A Sweet Puzzle Adventure',
            {
                fontSize: '24px',
                color: '#FFE66D',
                align: 'center',
            }
        ).setOrigin(0.5);

        // Play button
        const playButton = this.add.rectangle(
            width / 2,
            height / 2 + 50,
            200,
            60,
            0xFF6B9D
        );
        playButton.setInteractive({ useHandCursor: true });
        playButton.on('pointerover', () => {
            playButton.setFillStyle(0xFF5A8F);
        });
        playButton.on('pointerout', () => {
            playButton.setFillStyle(0xFF6B9D);
        });
        playButton.on('pointerdown', () => {
            this.scene.start(SCENES.LEVEL);
        });

        this.add.text(
            width / 2,
            height / 2 + 50,
            'PLAY',
            {
                fontSize: '32px',
                fontStyle: 'bold',
                color: '#ffffff',
            }
        ).setOrigin(0.5);

        // Instructions
        this.add.text(
            width / 2,
            height - 80,
            'Match 3 or more candies to score points\nComplete level objectives to progress!',
            {
                fontSize: '16px',
                color: '#ffffff',
                align: 'center',
            }
        ).setOrigin(0.5);
    }
}