const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards) {
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active');

        const imageId = card.getAttribute('id');
        const titleId = card.querySelector('h4').textContent;
        const authorId = card.querySelector('p').textContent;

        modalOverlay.querySelector('img').src = `../public/assets/${imageId}.png`;
        modalOverlay.querySelector('img').alt = imageId;
        modalOverlay.querySelector('h4').innerHTML = titleId;
        modalOverlay.querySelector('p').innerHTML = authorId;
    })
}
 
document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active');
})
