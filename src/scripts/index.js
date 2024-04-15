import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/restaurant-card';
import App from './views/app';

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
