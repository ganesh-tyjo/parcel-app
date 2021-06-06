// Import content from another script
import { joke } from './joke';

// Import NPM package
import _ from 'lodash';

// Import style
import './../../scss/custom/main.css';

// Using content imported from another script
joke.getJoke().then((joke) => {
  document.querySelector('#joke').innerHTML = joke;
});

// Just demonstrating imported NPM package
const numbers = [32, 3, 21, 54, 67, 4];

// Logging each item of array using lodash
_.forEach([...numbers], (item) => console.log(item));
