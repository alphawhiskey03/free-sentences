const { LoremIpsum } = require("lorem-ipsum");

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

/**
 *
 * @param {number} n
 */

const generateSentence = (n) => {
  return lorem.generateWords(n);
};

const generateParagraphs = (n) => {
  return lorem.generateParagraphs(n);
};

module.exports = {
  generateSentence,
  generateParagraphs,
};
