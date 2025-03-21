document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения из полей формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Создаем объект пользователя
    const user = {
        name: name,
        email: email,
        password: password // В реальных приложениях пароли не следует хранить в открытом виде
    };

    // Сохраняем данные пользователя в LocalStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Оповещение о успешной регистрации (можно заменить на редирект или другую логику)
    alert('Регистрация прошла успешно!');

    // Очищаем поля формы
    document.getElementById('hiddenblock__form').reset();
});