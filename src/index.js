/***
* StomanStrap Entry Point JS File
* This File Compiles All JS Code & Other Vendors Through Parcel Bundler
* Powered by: Nangialai Stoman
*/

// Import Other JS Files, Libraries & Vendors
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap';
import { stoman } from './js/app';

document.querySelector('h1').textContent = stoman('Hi, how are you?');