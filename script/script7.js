// Функция для имитации загрузки
function simulateLoading() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 3000); // Задержка в 3 секунды
    });
}

// Основная логика
document.addEventListener("DOMContentLoaded", async () => {
    await simulateLoading(); // Ждем завершения загрузки
    document.getElementById('loader').style.display = 'none'; // Скрываем предзагрузчик
    document.body.style.display = 'block'; // Показываем основной контент
});