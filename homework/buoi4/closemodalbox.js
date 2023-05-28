const modal = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content');
const openModalButton = document.querySelector('.openButton');
const closeModalButton = document.querySelector('.closeButton');

openModalButton.addEventListener('click', () =>{
    modal.style.display = "flex";
})

closeModalButton.addEventListener('click', () =>{
    modal.style.display = "none";
})

modal.addEventListener('click', () =>{
    modal.style.display = "none";
})