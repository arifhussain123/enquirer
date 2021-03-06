'use strict';

const { prompt } = require('enquirer');

prompt({
  type: 'confirm',
  name: 'really',
  message: 'Wirklich?',
  initial: 'j',
  default: '(J/n)',
  isTrue(input) {
    return input.toLowerCase() === 'j';
  },
  isFalse(input) {
    return input.toLowerCase() === 'n';
  }
})
  .then(console.log)
  .catch(console.log);
