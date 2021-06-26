// Import content from another script
import { joke } from './joke';

// Import NPM package
import _ from 'lodash';

// Import style
import './../../scss/custom/main.scss';

// Just demonstrating imported NPM package
const numbers = [32, 3, 21, 54, 67, 4];

// Logging each item of array using lodash
_.forEach([...numbers], (item) => console.log(item));

document.querySelector('#get-joke').addEventListener('click', (e) => {
  const jokeType = document.querySelector('#hear-joke #joke-type').value;

  // Get joke from API and display it on page
  joke
    .getJoke(jokeType)
    .then((joke) => {
      document.querySelector(
        '#joke'
      ).innerHTML = `<div class="setup">${joke.setup.trim()}</div><br /><div class="punchline">${joke.punchline.trim()}</div><br />`;
    })
    .catch((error) => (document.querySelector('#joke').innerHTML = error));
});
