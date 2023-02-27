// Get references to the menu links and content sections
const aboutLink = document.querySelector('nav ul li:nth-child(1) a');
const pricingLink = document.querySelector('nav ul li:nth-child(2) a');
const stitchPatternsLink = document.querySelector('nav ul li:nth-child(3) a');
const contactLink = document.querySelector('nav ul li:nth-child(4) a');
const galleryLink = document.querySelector('nav ul li:nth-child(5) a');
const aboutSection = document.querySelector('#about');
const pricingSection = document.querySelector('#pricing');
const stitchPatternsSection = document.querySelector('#stitch-patterns');
const contactSection = document.querySelector('#contact');
const gallerySection = document.querySelector('#gallery');

// hide all sections except the first one
pricingSection.style.display = 'none';
stitchPatternsSection.style.display = 'none';
contactSection.style.display = 'none';
gallerySection.style.display = 'none';

// add event listeners to the navigation links
aboutLink.addEventListener('click', event => {
  event.preventDefault();
  aboutSection.style.display = 'block';
  pricingSection.style.display = 'none';
  stitchPatternsSection.style.display = 'none';
  contactSection.style.display = 'none';
  gallerySection.style.display = 'none';
});

pricingLink.addEventListener('click', event => {
  event.preventDefault();
  pricingSection.style.display = 'block';
  aboutSection.style.display = 'none';
  stitchPatternsSection.style.display = 'none';
  contactSection.style.display = 'none';
  gallerySection.style.display = 'none';
});

stitchPatternsLink.addEventListener('click', event => {
  event.preventDefault();
  stitchPatternsSection.style.display = 'block';
  aboutSection.style.display = 'none';
  pricingSection.style.display = 'none';
  contactSection.style.display = 'none';
  gallerySection.style.display = 'none';
});

contactLink.addEventListener('click', event => {
  event.preventDefault();
  contactSection.style.display = 'block';
  aboutSection.style.display = 'none';
  pricingSection.style.display = 'none';
  stitchPatternsSection.style.display = 'none';
  gallerySection.style.display = 'none';
});

galleryLink.addEventListener('click', event => {
  event.preventDefault();
  gallerySection.style.display = 'block';
  aboutSection.style.display = 'none';
  pricingSection.style.display = 'none';
  stitchPatternsSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// Embed the Google Form in the Pricing section
const pricingSectionContent = document.querySelector('#pricing .content');
pricingSectionContent.innerHTML = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe6wC-bcCJUeVXI7t51t4PC47G-sDIjUWoNh8J3lID7PLgfJA/viewform?embedded=true" width="640" height="773" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
