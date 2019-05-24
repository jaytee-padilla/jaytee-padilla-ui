// Target DOM elements
const teamMember = document.querySelectorAll('.team-member');
const modal = document.querySelectorAll('.modal');
const closeButton = document.querySelectorAll('.close-button');
const htmlElement = document.getElementsByTagName('html');

// Target DOM elements of each team member's modal info
const alexKing = document.querySelector('.alex-king');
const basilOgbonna = document.querySelector('.basil-ogbonna');
const christopherAronson = document.querySelector('.christopher-aronson');
const danielCarter = document.querySelector('.daniel-carter');
const darienPayton = document.querySelector('.darien-payton');
const donaldCelaj = document.querySelector('.donald-celaj');
const jamesStarks = document.querySelector('.james-starks');
const jayteePadilla = document.querySelector('.jaytee-padilla');
const lauraDaugherty = document.querySelector('.laura-daugherty');
const peterStone = document.querySelector('.peter-stone');

// Add event listeners
teamMember.forEach(nodeElement => {
    nodeElement.addEventListener('click', event => {
        toggleModal(nodeElement.dataset.person);

        toggleFadeIn();
    });
});

window.addEventListener('click', (event) => {
    const showModal = document.querySelector('.show-modal');

    if (event.target === showModal) {
        removeModal();
        toggleFadeIn();
    }
});

closeButton.forEach(btnElement => {
    btnElement.addEventListener('click', (event) => {
        removeModal();
        toggleFadeIn();
    })
})


// Toggles the modal view on and off
function toggleModal(name) {
    // Locks scrolling functionality while modal view is open
    htmlElement[0].classList.add('lock-scrolling');
    
    switch (name) {
        case 'alex-king':
            alexKing.classList.toggle('show-modal');
            break;
        case 'basil-ogbonna':
            basilOgbonna.classList.toggle('show-modal');
            break;
        case 'christopher-aronson':
            christopherAronson.classList.toggle('show-modal');
            break;
        case 'daniel-carter':
            danielCarter.classList.toggle('show-modal');
            break;
        case 'darien-payton':
            darienPayton.classList.toggle('show-modal');
            break;
        case 'donald-celaj':
            donaldCelaj.classList.toggle('show-modal');
            break;
        case 'james-starks':
            jamesStarks.classList.toggle('show-modal');
            break;
        case 'jaytee-padilla':
            jayteePadilla.classList.toggle('show-modal');
            break;
        case 'laura-daugherty':
            lauraDaugherty.classList.toggle('show-modal');
            break;
        case 'peter-stone':
            peterStone.classList.toggle('show-modal');
            break;
    }
}

function removeModal() {
    modal.forEach(modalElement => {
        modalElement.classList.remove('show-modal');
        htmlElement[0].classList.remove('lock-scrolling');
    });
}

function toggleFadeIn() {
    teamMember.forEach(nodeElement => {
        nodeElement.classList.toggle('notransition');
    });
}

// To prevent mobile taps from reactivating fade animation when a modal view is activated
// function removeAnimation() {
//     teamMember.forEach(nodeElement => {
//         nodeElement.classList.forEach(classListElement => {
//             if(classListElement === 'fadeInRightShort') {
//                 nodeElement.classList.remove('fadeInRightShort');
//             } else if (classListElement === 'fadeInLeftShort') {
//                 nodeElement.classList.remove('fadeInLeftShort');
//             }
//         });
//     })
// }

// Re-adds animation class for page to function properly after modal view is closed
// function addAnimation(nodeElement) {
//     teamMember.forEach(nodeElement => {
//         nodeElement.classList.add
//     })
// }