function addIngredient() {
    const ingredients = document.querySelector('#ingredients')
    const fieldContainer = document.querySelectorAll('.ingredient')

    const newField = fieldContainer[fieldContainer.length -1].cloneNode(true)

    if(newField.children[0].value == '') return false

    newField.children[0].value = ''
    ingredients.appendChild(newField)
}

document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient)


function addMethod() {
    const methods = document.querySelector('#methods')
    const method = document.querySelectorAll('.method')

    const newMethod = method[method.length -1].cloneNode(true)

    if(newMethod.children[0].value == '') return false

    newMethod.children[0].value = ''
    methods.appendChild(newMethod)
}
  document
  .querySelector(".add-method")
  .addEventListener("click", addMethod)