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

  //Make button disabled until joke fetching is completed
  document.querySelector('#get-joke').disabled = true;

  // Get joke from API and display it on page
  getJoke(jokeType);
});

const getJoke = (jokeType) => {
  joke
    .getJoke(jokeType)
    .then((joke) => {
      document.querySelector(
        '#joke'
      ).innerHTML = `<div class="setup">${joke.setup.trim()}</div><br /><div class="punchline">${joke.punchline.trim()}</div>`;

      //Enable button
      document.querySelector('#get-joke').disabled = false;
    })
    .catch((error) => {
      document.querySelector('#joke').innerHTML = 'Something went wrong !!';

      //Enable button
      document.querySelector('#get-joke').disabled = false;
    });
};

getJoke('general');
