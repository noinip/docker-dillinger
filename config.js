var rc = require('rc'),
  defaultConfig = {
    title: 'MD-Visual',
    description: 'HTML5 Open Source Markdown Editor based on Dillinger',
    keywords: 'MD-Visual, Markdown, Dillinger, Editor, ACE, Github, Open Source, Node.js',
    author: 'Joe McCann and Martin Broder - extended by Markus Kosmal',
    googleWebmasterMeta: 'none'
  };

module.exports = function() {
  return rc('md-visual', defaultConfig);
};