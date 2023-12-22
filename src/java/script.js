const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
menu.classList.toggle('hidden');
menu.classList.toggle('flex-col'); 
});

window.addEventListener('resize', () => {
if (window.innerWidth >= 768) { 
menu.classList.remove('flex-col');
}
});
const sliderContent = document.querySelector('.slider-content');
const sliderItems = document.querySelectorAll('.slider-content > div');

const handleResize = () => {
const isMobile = window.innerWidth < 640;

sliderContent.style.scrollSnapType = isMobile ? 'x mandatory' : 'none';
sliderItems.forEach(item => {
    item.style.flex = isMobile ? '0 0 auto' : 'auto auto auto';
});
};

handleResize();
window.addEventListener('resize', handleResize);

function scrollDivs(direction) {
const currDiv = document.querySelector('.scrollable-container div:not([style*="display: none"])');
let nextDivIndex = parseInt(currDiv.dataset.index);

if (direction === 'next') {
    nextDivIndex++;
} else if (direction === 'prev') {
    nextDivIndex--;
}

if (nextDivIndex < 1 || nextDivIndex > 3) {
    return; 
}

const nextDiv = document.querySelector(`.scrollable-container div[data-index="${nextDivIndex}"]`);
currDiv.style.display = 'none';
nextDiv.style.display = 'block';
}