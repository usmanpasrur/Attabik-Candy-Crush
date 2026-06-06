# Attabik Candy Crush

An Attabik-themed match-3 puzzle game built with JavaScript and Phaser 3, featuring level progression and engaging gameplay mechanics.

## 🎮 Features

- **Match-3 Puzzle Mechanics**: Swap adjacent candies to create matches of three or more
- **Attabik Theme**: Customized visuals and gameplay elements themed around Attabik
- **Level Progression**: Progressive difficulty with multiple levels
- **Score System**: Track your progress with a comprehensive scoring system
- **Power-ups**: Special candies with unique abilities
- **Responsive Design**: Play on desktop and tablet devices

## 🛠️ Tech Stack

- **Game Engine**: [Phaser 3](https://phaser.io/)
- **Language**: JavaScript (ES6+)
- **Build Tool**: Webpack
- **Module Bundler**: Webpack with Hot Module Replacement
- **Transpiler**: Babel

## 📋 Project Structure

```
Attabik-Candy-Crush/
├── src/
│   ├── index.js              # Entry point
│   ├── index.html            # HTML template
│   ├── styles/
│   │   └── style.css         # Main stylesheet
│   ├── scenes/
│   │   ├── MenuScene.js      # Main menu scene
│   │   ├── GameScene.js      # Main gameplay scene
│   │   └── LevelScene.js     # Level selection scene
│   ├── objects/
│   │   ├── Candy.js          # Candy game object
│   │   └── Grid.js           # Game grid logic
│   ├── managers/
│   │   ├── GameManager.js    # Overall game state
│   │   ├── LevelManager.js   # Level progression
│   │   └── ScoreManager.js   # Scoring logic
│   └── utils/
│       ├── constants.js      # Game constants
│       └── helpers.js        # Utility functions
├── assets/
│   ├── images/               # Game sprites
│   ├── audio/                # Sound effects and music
│   └── fonts/                # Custom fonts
├── dist/                     # Build output (auto-generated)
├── package.json              # Project dependencies
├── webpack.config.js         # Webpack configuration
├── .babelrc                  # Babel configuration
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/usmanpasrur/Attabik-Candy-Crush.git
cd Attabik-Candy-Crush
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The game will open automatically in your browser at `http://localhost:8080`

## 📝 Available Scripts

- `npm start` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run dev` - Build in development mode with watch mode
- `npm test` - Run test suite

## 🎯 Game Rules

- **Objective**: Match three or more candies of the same color
- **Movement**: Swap adjacent candies horizontally or vertically
- **Scoring**: Earn points for each match
- **Levels**: Progress through increasingly difficult levels
- **Level Goals**: Complete specific objectives to advance

## 🎨 Customization

### Adding New Levels

Edit `/src/managers/LevelManager.js` to define new levels with custom objectives and difficulty settings.

### Changing Game Constants

Modify `/src/utils/constants.js` to adjust gameplay parameters like:
- Grid dimensions
- Candy colors
- Scoring multipliers
- Level difficulty

### Theming

Update `/src/styles/style.css` and replace assets in `/assets/` to customize the Attabik theme.

## 🐛 Known Issues

- None currently documented

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Usman Pasrur** - [GitHub Profile](https://github.com/usmanpasrur)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Enjoy playing Attabik Candy Crush! 🎉