// RECUPERE LE BLOC
// const FEATUREDIMAGE = document.querySelector('.featured-image');
// const IMAGE = FEATUREDIMAGE.querySelector('img');

// var alt = IMAGE.getAttribute('alt');

// var captionElement = document.createElement('caption');

// var captionText = document.createTextNode(alt);

// captionElement.appendChild(captionText);

// FEATUREDIMAGE.appendChild(captionElement);

// IMAGE.setAttribute('alt','');

// OR

// RECUPERE LE BLOC
const FEATUREDIMAGE = document.querySelector('.featured-image');
const IMAGE = FEATUREDIMAGE.querySelector('img');

var alt = IMAGE.getAttribute('alt');

var captionElement = document.createElement('caption');



captionElement.append(alt);

FEATUREDIMAGE.append(captionElement);

IMAGE.setAttribute('alt','');

