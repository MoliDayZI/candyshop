$(document).ready(function() {
    // Получаем корзину из localStorage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Функция для пересчета общей суммы
    function calculateTotalAmount() {
        return cart.reduce(function(total, product) {
            return total + (parseFloat(product.price) * (product.quantity || 1));
        }, 0);
    }

    // Функция для рендеринга товаров в слайдере
    function renderProductSlider() {
        var sliderHTML = '';
        cart.forEach(function(product) {
            var quantity = product.quantity || 1;
            var productTotal = (parseFloat(product.price) * quantity).toFixed(2); // Итоговая стоимость для товара

            sliderHTML += `
                <div class="item">
                    <img src="${product.image}" alt="${product.title}">
                    <p><strong>${product.title}</strong></p>
                    <p>Цена: ${product.price}</p>
                    <p>Количество: ${quantity}</p>
                    <p class="total-price">Итоговая стоимость: ${productTotal} ₽</p>
                </div>
            `;
        });
        $('#productSlider').html(sliderHTML);

        // Инициализация Owl Carousel
        $('#productSlider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,  // Включаем стандартные кнопки навигации
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], // Иконки стрелок
            items: 1,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000
        });
        

        // Обновляем итоговую стоимость
        var totalAmount = calculateTotalAmount().toFixed(2);
        $('#totalOrderPrice').text('Итоговая стоимость заказа: ' + totalAmount + ' ₽');
    }

    // Изначальный рендер товаров и слайдера
    renderProductSlider();

    // Функция для добавления заказа в localStorage
function addOrderToLocalStorage(cart, totalAmount) {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    var orderNumber = 'ORD' + new Date().getTime();  // Уникальный номер заказа
    var date = new Date().toLocaleDateString('ru-RU');  // Текущая дата
    
    var order = {
        orderNumber: orderNumber,
        date: date,
        status: 'Обрабатывается',  // Статус по умолчанию
        totalAmount: totalAmount,
        products: cart  // Список товаров из корзины
    };
    
    orders.push(order);  // Добавляем новый заказ в массив заказов
    localStorage.setItem('orders', JSON.stringify(orders));  // Сохраняем массив заказов в localStorage
    alert('Ваш заказ успешно оформлен!');
}

// Обработчик клика по кнопке подтверждения заказа
$('#placeOrderBtn').click(function() {
    var fullName = $('#fullName').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var address = $('#address').val();

    // Проверяем, что все поля заполнены
    if (fullName && email && phone && address) {
        var totalAmount = calculateTotalAmount().toFixed(2);  // Итоговая сумма заказа

        // Добавляем заказ в localStorage
        addOrderToLocalStorage(cart, totalAmount);

        // Очищаем корзину после оформления заказа
        localStorage.removeItem('cart');

        // Переход на страницу заказов
        window.location.href = 'orders.html';  // Страница, где отображаются все заказы
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});

        
});