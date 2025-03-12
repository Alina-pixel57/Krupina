// Слушатель события прокрутки (scroll)
window.addEventListener('scroll', function() {
    console.log('Пользователь прокрутил страницу.');
});

// Слушатель события клика (click)
document.addEventListener('click', function(event) {
    console.log('Пользователь кликнул на элемент:', event.target);
});

// Слушатель события наведения мыши (mouseover)
document.addEventListener('mouseover', function(event) {
    console.log('Мышь наведена на элемент:', event.target);
});
