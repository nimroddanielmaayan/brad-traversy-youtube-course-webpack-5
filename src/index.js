// DEMO JOKE APP

import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();

/* Webpack 5 Summary */

// YouTube video that this project is based on: https://www.youtube.com/watch?v=IZGNcSuwBZs

// Tools like "create-react-app.dev" use webpack behind the scenes

// React bundlers are based on Webpack

// Since Webpack 4, there's no need for a configuration file. If no configuration file is used, then all of the values will be the default values

// If we do want a configuration file, we need to creat a file named webpack.config.js at the project root

// Webpack is the "original" code bundler

// Webpack docs: https://webpack.js.org/concepts/

// It's possible to create one Webpack setup and duplicate it to multiple projects!

// Usually after we define them, Webpack configurations will stay the same for a long time (possibly for years)

// Webpack allows us to work on a custom cofiguration of files that normally wouldn't work together, but it can build them into a consolidated distribution configuration that will work. If we want to preview the final product using Live Server, we need to run it on the distribution index.html (using right click -> open with live server)

// Webpack can also take care of SASS in our project, including compiling, etc.

// In this project, index.js is our "entry point", so it has to be connected to all of the other project assets

// In this setup, we need to run npm eun build in the console whenever we want to build\preview the project

// Also, we need to add to the config file a loader for media files (test: /\.(png|svg|jpg|jpeg|gif)$/i,type: 'asset/resource'). This is a built-in loader in Webpack and we don't need to npm install it  separately

// In this app, we installed the optional library Axios for data fetching (it can be seen in node_modules). Axios does some of the functionalities of the built-in JS adync data fetching, just with simpler syntax

/* Using this setup for future apps */

// Now that this app is finished, it can be copied and used for future projects. It loads SASS, Babel, Axios, Webpack Bundle Analyzer and other things, and it can be extended with more options and features

// It's important to remember - Chat GPT and other AI tools know Webpack 5! So they can be used to extend\check\get ideas, etc.

// Webpack builds the JS files as modules, so there's no need for 'use strict' at the beginning of any JS file

// To build and preview any app built with this setup, run the NPM scripts: build and then dev

// This will open in the browser both the preview and the Webpack Bundle Analyzer
