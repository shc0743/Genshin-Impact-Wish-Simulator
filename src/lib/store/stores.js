import { writable }  from 'svelte/store';

const bannerActive = writable('');
const isLoaded = writable(false);

// viewport 
const viewportWidth = writable(0)
const viewportHeight = writable(0)

// Mobile Detect
const isMobile = writable(false);
const mobileMode = writable(false); //false

export { bannerActive, isLoaded, viewportWidth, viewportHeight, isMobile, mobileMode };