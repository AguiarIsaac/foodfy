const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const cards_recipe = document.querySelectorAll('.card_recipe')

for (let card of cards) {
    card.addEventListener('click', function(){
        const recipeId = card.getAttribute('id')
        window.location.href = `/recipes/${recipeId}`
    })
}

for (let card_recipe of cards_recipe) {
    const buttom = card_recipe.querySelector('.buttom')
    const text = card_recipe.querySelector('.list_text')

    buttom.addEventListener('click', function(){
        if(buttom.innerHTML == 'esconder') {
            text.classList.remove('ativar')
            text.classList.add('esconder')
            buttom.innerHTML = 'mostar'
        }
        else if (buttom.innerHTML == 'mostrar') {
            text.classList.remove('esconder')
            text.classList.add('ativar')
            buttom.innerHTML = 'esconder'
        }
    })
}