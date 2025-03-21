async function loadJSON(url) {
    console.log({url}); // Используйте обратные кавычки для интерполяции
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Сеть не отвечает');
    }
    const data = await response.json();
    console.log('Данные загружены:', data);
    return data;
}

function displayData(data) {
    const contentDiv = document.getElementById('content');
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = '<h2>${item.title}</h2><p>${item.description}</p>'
        ; // Используйте обратные кавычки для многострочных строк
        contentDiv.appendChild(itemDiv);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await loadJSON('data.json'); // Загружаем JSON
        displayData(data); // Отображаем данные
    } catch (error) {
        console.error('Ошибка:', error);
    }
});