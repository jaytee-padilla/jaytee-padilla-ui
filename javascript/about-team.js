// Target DOM elements
const teamMember = document.querySelectorAll('.team-member');
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

// Add event listeners
teamMember.forEach(nodeElement => {
    nodeElement.addEventListener('click', () => {
        toggleModal();
    });
});

window.addEventListener('click', () => {
    if (event.target === modal) {
        toggleModal();
    }
});

closeButton.addEventListener('click', () => {
    toggleModal();
});

// Toggles the modal view on and off
function toggleModal() {
    modal.classList.toggle('show-modal');
}
