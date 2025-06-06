$(document).ready(function() {
    // Получаем все заказы из localStorage
    var orders = JSON.parse(localStorage.getItem('orders'));

    // Проверяем, что orders существует и это массив
    if (!Array.isArray(orders)) {
        console.log("Нет заказов в localStorage или данные повреждены.");
        orders = [];  // Если заказов нет или данные повреждены, создаем пустой массив
    }

    // Функция для отображения заказов
    function renderOrders() {
        if (orders.length === 0) {
            $('#ordersList').html('<p class="text-center text-muted">У вас нет заказов.</p>');
            $('#clearAllOrdersBtn').hide(); // Скрываем кнопку "Очистить всё", если заказов нет
            return;
        }

        var ordersHTML = '';

        // Проходим по всем заказам и формируем HTML
        orders.forEach(function(order) {
            var orderHTML = `
                <div class="order-card mb-4 p-4 border-2 border-dark rounded shadow-sm bg-light">
                    <h5 class="text-primary">Заказ № ${order.orderNumber}</h5>
                    <p><strong>Дата:</strong> ${order.date}</p>
                    <p><strong>Статус:</strong> ${order.status}</p>
                    <p><strong>Итоговая стоимость:</strong> ${order.totalAmount} ₽</p>

                    <h6 class="mt-3">Товары:</h6>
                    <ul class="list-group">
            `;

            // Проверяем, что order.products существует и это массив
            if (Array.isArray(order.products)) {
                // Добавляем список товаров в заказ
                order.products.forEach(function(product) {
                    orderHTML += `
                        <li class="list-group-item">
                            <strong>${product.title}</strong> - ${product.quantity} x ${product.price} ₽
                        </li>
                    `;
                });
            } else {
                // Если нет товаров, показываем, что товары не найдены
                orderHTML += `<li class="list-group-item text-muted">Товары не найдены</li>`;
            }

            orderHTML += `</ul></div>`;
            ordersHTML += orderHTML;
        });

        // Добавляем сформированные заказы в контейнер на странице
        $('#ordersList').html(ordersHTML);

        // Показываем кнопку "Очистить всё", если есть заказы
        $('#clearAllOrdersBtn').show();
    }

    // Инициализация рендера заказов
    renderOrders();

    // Обработчик для кнопки "Очистить всё"
    $('#clearAllOrdersBtn').click(function() {
        if (confirm('Вы уверены, что хотите удалить все заказы?')) {
            localStorage.removeItem('orders'); // Очищаем все заказы в localStorage
            orders = [];  // Обновляем массив заказов
            renderOrders();  // Перерисовываем страницу
        }
    });
});
