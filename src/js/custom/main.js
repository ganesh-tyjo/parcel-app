// Import content from another script
import { joke } from './joke';

// Import NPM package
import _ from 'lodash';

// Import style
import './../../scss/custom/main.scss';

// Using content imported from another script
joke
  .getJoke()
  .then((joke) => {
    document.querySelector('#joke').innerHTML = joke;
  })
  .catch((error) => (document.querySelector('#joke').innerHTML = error));

// Just demonstrating imported NPM package
const numbers = [32, 3, 21, 54, 67, 4];

// Logging each item of array using lodash
_.forEach([...numbers], (item) => console.log(item));
