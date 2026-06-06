/**
 * Utility helper functions for the game
 */

/**
 * Get a random element from an array
 * @param {Array} array - The array to pick from
 * @returns {*} A random element from the array
 */
export function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Check if two positions are adjacent
 * @param {Object} pos1 - First position {x, y}
 * @param {Object} pos2 - Second position {x, y}
 * @returns {Boolean} True if positions are adjacent
 */
export function isAdjacent(pos1, pos2) {
    const dx = Math.abs(pos1.x - pos2.x);
    const dy = Math.abs(pos1.y - pos2.y);
    return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
}

/**
 * Format score with commas
 * @param {Number} score - The score to format
 * @returns {String} Formatted score
 */
export function formatScore(score) {
    return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Shuffle an array in place
 * @param {Array} array - The array to shuffle
 * @returns {Array} The shuffled array
 */
export function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Create a deep copy of an object
 * @param {Object} obj - The object to copy
 * @returns {Object} A deep copy of the object
 */
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}