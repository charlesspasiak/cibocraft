import 'regenerator-runtime'; /* for async await transpile */
import lazySizes from 'lazysizes';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav__list'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

document.addEventListener('DOMContentLoaded', () => {
  lazySizes.init();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
