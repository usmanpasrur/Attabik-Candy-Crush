// Game Constants
export const GAME_CONFIG = {
    GRID_WIDTH: 8,
    GRID_HEIGHT: 8,
    TILE_SIZE: 50,
    
    // Colors for candies (Attabik themed)
    CANDY_COLORS: [
        0xFF6B6B, // Red
        0x4ECDC4, // Teal
        0xFFE66D, // Yellow
        0x95E1D3, // Mint
        0xC7CEEA, // Lavender
        0xFF6B9D, // Pink
    ],
    
    // Match requirements
    MIN_MATCH: 3,
    
    // Scoring
    SCORE_BASE: 100,
    SCORE_MULTIPLIER: 10,
    COMBO_MULTIPLIER: 1.25,
    
    // Physics
    FALL_SPEED: 200,
    ANIMATION_DURATION: 300,
};

export const LEVEL_CONFIG = {
    1: {
        name: 'Level 1: Sweet Start',
        moves: 20,
        goal: 1000,
        description: 'Reach 1000 points!',
    },
    2: {
        name: 'Level 2: Getting Sweeter',
        moves: 18,
        goal: 2000,
        description: 'Reach 2000 points!',
    },
    3: {
        name: 'Level 3: Candy Challenge',
        moves: 15,
        goal: 3500,
        description: 'Reach 3500 points!',
    },
    4: {
        name: 'Level 4: Master Mode',
        moves: 12,
        goal: 5000,
        description: 'Reach 5000 points!',
    },
    5: {
        name: 'Level 5: Attabik Master',
        moves: 10,
        goal: 7500,
        description: 'Reach 7500 points!',
    },
};

export const SCENES = {
    MENU: 'MenuScene',
    GAME: 'GameScene',
    LEVEL: 'LevelScene',
};