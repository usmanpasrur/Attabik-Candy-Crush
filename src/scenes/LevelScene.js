import Phaser from 'phaser';
import { SCENES, LEVEL_CONFIG } from '../utils/constants';

export default class LevelScene extends Phaser.Scene {
    constructor() {
        super({ key: SCENES.LEVEL });
    }

    create() {
        const { width, height } = this.cameras.main;

        // Background
        this.add.rectangle(width / 2, height / 2, width, height, 0x667eea);

        // Title
        this.add.text(
            width / 2,
            50,
            'SELECT LEVEL',
            {
                fontSize: '40px',
                fontStyle: 'bold',
                color: '#ffffff',
                align: 'center',
            }
        ).setOrigin(0.5);

        // Create level buttons
        const levels = Object.keys(LEVEL_CONFIG);
        const buttonsPerRow = 3;
        const spacing = 40;
        const buttonSize = 80;

        let buttonIndex = 0;

        levels.forEach((levelNum) => {
            const levelConfig = LEVEL_CONFIG[levelNum];
            const row = Math.floor(buttonIndex / buttonsPerRow);
            const col = buttonIndex % buttonsPerRow;

            const x = (width / 2) - 130 + col * (buttonSize + spacing);
            const y = 150 + row * (buttonSize + spacing);

            const button = this.add.rectangle(x, y, buttonSize, buttonSize, 0xFF6B9D);
            button.setInteractive({ useHandCursor: true });

            button.on('pointerover', () => {
                button.setFillStyle(0xFF5A8F);
            });
            button.on('pointerout', () => {
                button.setFillStyle(0xFF6B9D);
            });
            button.on('pointerdown', () => {
                this.scene.start(SCENES.GAME, { level: levelNum });
            });

            this.add.text(x, y, levelNum, {
                fontSize: '32px',
                fontStyle: 'bold',
                color: '#ffffff',
            }).setOrigin(0.5);

            buttonIndex++;
        });

        // Back button
        const backButton = this.add.rectangle(50, height - 50, 100, 40, 0x95E1D3);
        backButton.setInteractive({ useHandCursor: true });
        backButton.on('pointerover', () => {
            backButton.setFillStyle(0x7FCCC4);
        });
        backButton.on('pointerout', () => {
            backButton.setFillStyle(0x95E1D3);
        });
        backButton.on('pointerdown', () => {
            this.scene.start(SCENES.MENU);
        });

        this.add.text(50, height - 50, 'BACK', {
            fontSize: '16px',
            fontStyle: 'bold',
            color: '#ffffff',
        }).setOrigin(0.5);
    }
}