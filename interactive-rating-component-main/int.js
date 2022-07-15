const getButtons = () => document.querySelectorAll('.btn');

const clearSelection = () => getButtons().forEach(btn => btn.classList.remove('clicked'));

getButtons().forEach(btn => btn.addEventListener('click', (evt) => {
    clearSelection();
    btn.classList.add('clicked');
}))
