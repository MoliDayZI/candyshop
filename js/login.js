document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Предотвращаем отправку формы

    // Получаем введенные данные
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    // Условие для проверки логина и пароля администратора
    if (phone === 'admin' && password === 'admin') {
        // Если данные верны, перенаправляем на admin.html
        window.location.href = 'admin.html';
    } else {
        // Если логин или пароль неверны, выводим ошибку
        alert('Неверный номер телефона или пароль!');
    }
});
