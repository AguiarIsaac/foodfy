const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
// const cards_recipe = document.querySelectorAll('.card_recipe')

for (let card of cards) {
    card.addEventListener('click', function(){
        const recipeId = card.getAttribute('id')
        window.location.href = `/recipes/${recipeId}`
    })
}


function mudarEstado(estado){
    let display = document.querySelector(`.${estado}`).style.display
    if(display == 'none'){
        document.querySelector(`.${estado}`).style.display = 'block'
        document.getElementById(`${estado}`).innerHTML = 'Ocultar'
        

    } else {
        document.querySelector(`.${estado}`).style.display = 'none'
        document.getElementById(`${estado}`).innerHTML = 'Mostrar'
        }
}