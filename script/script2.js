// Алгоритм смены изображений на главном экране сайта:
// 1. Инициализируем массив с изображениями.
// 2. Устанавливаем текущий индекс изображения и время задержки.
// 3. Создаем функцию для смены изображений:
//    - Скрываем текущее изображение.
//    - Увеличиваем индекс или сбрасываем его.
//    - Показываем следующее изображение.
// 4. Запускаем анимацию.

// Ссылка на блок-схему: [https://app.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#HAlina-pixel57%2FKrupina%2FAlina-pixel57-patch-1%2F%D0%94%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.drawio]

// Массив с путями к изображениям
const images = [
    'images/baner1.jpg',
    'images/baner2.jpg',
    'images/baner3.jpg',
    'images/baner4.jpg'
];

// Переменные для управления
let currentIndex = 0;
const imageElement = document.getElementById('slideshow-image');

// Функция для смены изображения
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Увеличиваем индекс, зацикливаясь
    imageElement.src = images[currentIndex]; // Меняем изображение
}

// Запуск смены изображений каждые 3 секунды
setInterval(changeImage, 3000);