/***
 * StomanStrap Entry Point JS File
 * This File Compiles All JS Code & Other Vendors Through Parcel Bundler
 * Coded By: @NangialaiStoman
 */

// Import Other JS Files, Libraries & Vendors
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap';
import 'animate.css';
import './sass/app.scss';
import { stoman } from './js/app';

document.querySelector('h1').textContent = stoman('Hi, how are you?');

// Call FeatherIcons method in order to use its icons
const feather = require('feather-icons');
feather.replace();
