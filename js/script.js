const list_hidden_1 = document.querySelector('.list-hidden-1');
const list_hidden_2 = document.querySelector('.list-hidden-2');
const art_pack_log = document.querySelector('.art-pack-log');
const svg = document.querySelector('.singature-svg');
const search = document.querySelector('.search');
const search_bar = document.querySelector('.search-bar');
const search_bar_relative = document.querySelector('.search-bar-relative');
const search_bar_relative_input = document.querySelector('.search-bar-relative input');
const search_bar_relative_i = document.querySelector('.search-bar-relative i');
const search_bg = document.querySelector('.search-background');

list_hidden_1.addEventListener('click', (e) => {
  art_pack_log.classList.toggle('active');
  svg.classList.toggle('active');
  list_hidden_2.style.display = 'block';
  list_hidden_1.style.display = 'none';
  search.classList.toggle('active');
});
list_hidden_2.addEventListener('click', (e) => {
  art_pack_log.classList.toggle('active');
  svg.classList.toggle('active');
  list_hidden_1.style.display = 'block';
  list_hidden_2.style.display = 'none';
  search.classList.toggle('active');
});
search.addEventListener('click', (e) => {
  search_bar.classList.toggle('active');
  search_bar_relative.classList.toggle('active');
  search_bar_relative_input.style.display = 'flex';
  search_bar_relative_i.style.display = 'flex';
  search_bg.classList.toggle('active');
});
search_bar.addEventListener('click', (e) => {
  search_bar_relative.classList.toggle('active');
  search_bar.classList.toggle('active');
  search_bar_relative_input.style.display = 'none';
  search_bar_relative_i.style.display = 'none';
  search_bg.classList.toggle('active')
});

const nav_scroll = document.querySelector('.nav-scroll');
const notify = document.querySelector('.notify');
window.onscroll = function () {
  scrollFunction();
}
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    nav_scroll.style.top = '25px';
    nav_scroll.style.transition = '0.4s ease-out -0.2s';
  }
  else {
    nav_scroll.style.top = '-200px'
    nav_scroll.style.transition = '0.1s'
  }
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
    notify.style.transform = 'translateX(0)';
    notify.style.position = 'fixed';
    notify.style.bottom = '250px';
  }
  else{
    notify.style.transform = 'translateX(-100%)';
  }
}
