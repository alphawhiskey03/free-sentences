const { LoremIpsum } = require("lorem-ipsum");

/**
 *
 * @param {number} n
 */

const generateSentence = (n) => {
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
  return lorem.generateWords(n);
};

module.exports = {
  generateSentence,
};
