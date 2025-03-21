// Алгоритм для показа скрытоко блока для входа:
// 1. Начало
// 2. Получить элемент с информацией (с идентификатором hiddenblock).
// 3. Получить элемент кнопки ( с идентификатором toggleButton).
// 4. Добавить обработчик события click для кнопки toggleButton.
// 5. Внутри обработчика события:
//   1) Проверить, является ли элемент hiddenblock видимым.
//      • Если да:
//        1. Скрыть элемент hiddenblock.
//        2. Изменить текст кнопки на "Показать информацию".
//      • Если нет:
//        1. Показать элемент hiddenblock.
//        2. Изменить текст кнопки на "Скрыть информацию".
// 6. Конец

const hiddenBlock = document.getElementById("hiddenblock");
const toggleButton = document.getElementById("toggleButton");

// Добавляем обработчик события для кнопки
toggleButton.addEventListener("click", function() {
    // Проверяем текущее состояние блока и переключаем его видимость
    if (hiddenBlock.classList.contains("hiddenblock")) {
        hiddenBlock.classList.remove("hiddenblock"); // Убираем класс скрытия
        toggleButton.textContent = "Скрыть Войти/Обратная связь"; // Изменяем текст кнопки
    } else {
        hiddenBlock.classList.add("hiddenblock"); // Добавляем класс скрытия
        toggleButton.textContent = "Войти/Обратная связь"; // Возвращаем текст кнопки
    }
});