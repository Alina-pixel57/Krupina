// Получаем все заголовки h2 внутри блоков с классом mein
const headers = document.querySelectorAll('.main h2');
    
// Формируем массив из текстов заголовков
const headerArray = Array.from(headers).map(header => header.textContent);

// Получаем контейнер для вывода заголовков
const headerList = document.getElementById('headerList');

// Выводим заголовки в виде списка
headerArray.forEach(header => {
    const listItem = document.createElement('li');
    listItem.textContent = header;
    headerList.appendChild(listItem);
});