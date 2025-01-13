import './config.js';
import { map } from './mapSetup.js';
import { setupMarkers } from './markerSetup.js';
import { setupMenuLogic } from './menuLogic.js';

document.addEventListener('DOMContentLoaded', () => {
    setupMarkers();
    setupMenuLogic();

});
