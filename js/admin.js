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
            $('#ordersList').html('<p class="text-center text-muted">Нет заказов для отображения.</p>');
            return;
        }

        var ordersHTML = '';

        // Проходим по всем заказам и формируем HTML
        orders.forEach(function(order) {
            var orderHTML = `
                <div class="order-card">
                    <h5 class="text-primary">Заказ № ${order.orderNumber}</h5>
                    <p><strong>Дата:</strong> ${order.date}</p>
                    <p><strong>Итоговая стоимость:</strong> ${order.totalAmount} </p>
                    <h6 class="mt-3">Товары:</h6>
                    <ul class="list-group">
            `;

            // Проверяем, что order.products существует и это массив
            if (Array.isArray(order.products)) {
                order.products.forEach(function(product) {
                    orderHTML += `
                        <li class="list-group-item">
                            <strong>${product.title}</strong> - ${product.quantity} x ${product.price} ₽
                        </li>
                        <h6>Статус:</h6>
                    <select class="form-control order-status" data-order-id="${order.orderNumber}">
                        <option value="В ожидании" ${order.status === "В ожидании" ? 'selected' : ''}>В ожидании</option>
                        <option value="Обрабатывается" ${order.status === "Обрабатывается" ? 'selected' : ''}>Обрабатывается</option>
                        <option value="Отправлен" ${order.status === "Отправлен" ? 'selected' : ''}>Отправлен</option>
                        <option value="Завершен" ${order.status === "Завершен" ? 'selected' : ''}>Завершен</option>
                    </select>

                    <button class="btn btn-primary order-action" data-order-id="${order.orderNumber}">Изменить статус</button>
                    `;
                });
            } else {
                orderHTML += `<li class="list-group-item text-muted">Товары не найдены</li>`;
            }

            orderHTML += `</ul></div>`;
            ordersHTML += orderHTML;
        });

        // Добавляем сформированные заказы в контейнер на странице
        $('#ordersList').html(ordersHTML);
    }

    // Функция для обновления статуса заказа в localStorage
    function updateOrderStatus(orderId, newStatus) {
        orders.forEach(function(order) {
            if (order.orderNumber === orderId) {
                order.status = newStatus;  // Обновляем статус заказа
            }
        });
        // Сохраняем обновленные заказы в localStorage
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    // Обработчик нажатия на кнопку "Изменить статус"
    $(document).on('click', '.order-action', function() {
        var orderId = $(this).data('order-id');
        var newStatus = $(this).prev('.order-status').val();  // Получаем выбранный статус
        updateOrderStatus(orderId, newStatus);  // Обновляем статус заказа
        alert('Статус заказа обновлен на: ' + newStatus);  // Показываем уведомление
    });

    // Инициализация рендера заказов
    renderOrders();
});
