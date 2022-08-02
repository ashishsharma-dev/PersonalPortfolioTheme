const customPreloader = document.querySelector('.customPreloader');
document.body.style.overflow = 'hidden';


window.onscroll = function(e) {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var customNav = document.querySelector('.customNav');

  scrollY <= this.lastScroll
    ? customNav.style.visibility = 'visible'
    : customNav.style.visibility = 'hidden';

  this.lastScroll = scrollY;
}


setTimeout(() => {
  document.body.style.overflowY = 'scroll';
  customPreloader.style.display = 'none';
}, 4000);

// window.onload(
//   document.body.style.overflowY = 'scroll',
//   customPreloader.style.display = 'none',
// );