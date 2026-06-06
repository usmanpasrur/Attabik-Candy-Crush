import Phaser from 'phaser';
import { SCENES, GAME_CONFIG, LEVEL_CONFIG } from '../utils/constants';
import { formatScore } from '../utils/helpers';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: SCENES.GAME });
    }

    init(data) {
        this.currentLevel = data.level || 1;
        this.levelConfig = LEVEL_CONFIG[this.currentLevel];
    }

    create() {
        const { width, height } = this.cameras.main;

        // Background
        this.add.rectangle(width / 2, height / 2, width, height, 0x764ba2);

        // Initialize game state
        this.score = 0;
        this.moves = this.levelConfig.moves;
        this.goal = this.levelConfig.goal;
        this.gameOver = false;
        this.won = false;

        // Create UI
        this.createUI();

        // Display level info
        this.add.text(
            width / 2,
            20,
            this.levelConfig.name,
            {
                fontSize: '24px',
                fontStyle: 'bold',
                color: '#ffffff',
                align: 'center',
            }
        ).setOrigin(0.5);

        // Placeholder message
        this.add.text(
            width / 2,
            height / 2,
            '🎮 Game Logic Coming Soon!\n\nLevel: ' + this.currentLevel + '\nGoal: ' + formatScore(this.goal) + ' points\nMoves: ' + this.moves,
            {
                fontSize: '20px',
                color: '#FFE66D',
                align: 'center',
                backgroundColor: '#000000',
                padding: { x: 20, y: 20 },
            }
        ).setOrigin(0.5);

        // Start button for testing
        const startButton = this.add.rectangle(width / 2, height - 80, 150, 50, 0xFF6B9D);
        startButton.setInteractive({ useHandCursor: true });
        startButton.on('pointerdown', () => {
            this.endGame(true);
        });

        this.add.text(
            width / 2,
            height - 80,
            'COMPLETE LEVEL',
            {
                fontSize: '14px',
                fontStyle: 'bold',
                color: '#ffffff',
            }
        ).setOrigin(0.5);
    }

    createUI() {
        const { width, height } = this.cameras.main;

        // Score display
        this.scoreText = this.add.text(20, 70, 'Score: ' + formatScore(this.score), {
            fontSize: '18px',
            fontStyle: 'bold',
            color: '#FFE66D',
        });

        // Moves display
        this.movesText = this.add.text(width - 200, 70, 'Moves: ' + this.moves, {
            fontSize: '18px',
            fontStyle: 'bold',
            color: '#FFE66D',
        });

        // Goal display
        this.goalText = this.add.text(20, 100, 'Goal: ' + formatScore(this.goal), {
            fontSize: '16px',
            color: '#95E1D3',
        });

        // Progress bar
        this.progressBar = this.add.rectangle(width / 2, 115, 300, 20, 0x4ECDC4);
        this.progressBarBg = this.add.rectangle(width / 2, 115, 300, 20, 0x333333);
        this.progressBarBg.setDepth(-1);
    }

    updateUI() {
        this.scoreText.setText('Score: ' + formatScore(this.score));
        this.movesText.setText('Moves: ' + this.moves);

        // Update progress bar
        const progress = Math.min(this.score / this.goal, 1);
        this.progressBar.setScale(progress, 1);
        this.progressBar.setOrigin(0, 0.5);
    }

    endGame(won) {
        this.gameOver = true;
        this.won = won;

        const { width, height } = this.cameras.main;

        // Semi-transparent overlay
        this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.7);

        // Result text
        const resultText = won ? 'LEVEL COMPLETE!' : 'GAME OVER!';
        const resultColor = won ? '#FFE66D' : '#FF6B6B';

        this.add.text(
            width / 2,
            height / 2 - 60,
            resultText,
            {
                fontSize: '48px',
                fontStyle: 'bold',
                color: resultColor,
                align: 'center',
            }
        ).setOrigin(0.5);

        this.add.text(
            width / 2,
            height / 2,
            'Final Score: ' + formatScore(this.score),
            {
                fontSize: '28px',
                color: '#ffffff',
                align: 'center',
            }
        ).setOrigin(0.5);

        // Buttons
        const nextLevel = this.currentLevel + 1;
        const hasNextLevel = LEVEL_CONFIG[nextLevel];

        // Menu button
        const menuButton = this.add.rectangle(width / 2 - 100, height / 2 + 80, 150, 50, 0x4ECDC4);
        menuButton.setInteractive({ useHandCursor: true });
        menuButton.on('pointerdown', () => {
            this.scene.start(SCENES.MENU);
        });

        this.add.text(
            width / 2 - 100,
            height / 2 + 80,
            'MENU',
            {
                fontSize: '20px',
                fontStyle: 'bold',
                color: '#ffffff',
            }
        ).setOrigin(0.5);

        // Next/Retry button
        if (won && hasNextLevel) {
            const nextButton = this.add.rectangle(width / 2 + 100, height / 2 + 80, 150, 50, 0xFF6B9D);
            nextButton.setInteractive({ useHandCursor: true });
            nextButton.on('pointerdown', () => {
                this.scene.start(SCENES.GAME, { level: nextLevel });
            });

            this.add.text(
                width / 2 + 100,
                height / 2 + 80,
                'NEXT LEVEL',
                {
                    fontSize: '20px',
                    fontStyle: 'bold',
                    color: '#ffffff',
                }
            ).setOrigin(0.5);
        } else {
            const retryButton = this.add.rectangle(width / 2 + 100, height / 2 + 80, 150, 50, 0xFF6B9D);
            retryButton.setInteractive({ useHandCursor: true });
            retryButton.on('pointerdown', () => {
                this.scene.start(SCENES.GAME, { level: this.currentLevel });
            });

            this.add.text(
                width / 2 + 100,
                height / 2 + 80,
                'RETRY',
                {
                    fontSize: '20px',
                    fontStyle: 'bold',
                    color: '#ffffff',
                }
            ).setOrigin(0.5);
        }
    }
}
