$(document).ready(function() {
    // Лимит на общую сумму заказа
    var MAX_TOTAL_AMOUNT = 15000;

    // Получаем корзину из localStorage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Функция для пересчета общей суммы
    function calculateTotalAmount() {
        return cart.reduce(function(total, product) {
            return total + (parseFloat(product.price) * (product.quantity || 1));
        }, 0);
    }

    // Функция для подсчета общего количества товаров
    function calculateTotalQuantity() {
        return cart.reduce(function(total, product) {
            return total + (product.quantity || 1);
        }, 0);
    }

    // Функция для склонения слова "товар" в зависимости от числа
    function getItemWord(count) {
        if (count === 1) {
            return "товар";
        } else if (count > 1 && count < 5) {
            return "товара";
        } else {
            return "товаров";
        }
    }

    // Функция для обновления отображения товаров в корзине
    function renderCart() {
        var totalAmount = calculateTotalAmount();  // Пересчитываем общую сумму
        var totalQuantity = calculateTotalQuantity(); // Пересчитываем общее количество товаров

        if (cart.length > 0) {
            var cartHTML = '';

            cart.forEach(function(product, index) {
                var quantity = product.quantity || 1;
                cartHTML += `
                <tr data-index="${index}">
                    <td><img src="${product.image}" alt="${product.title}" width="100"></td>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td>
                        <button class="btn btn-secondary adjust-quantity" data-action="decrease" data-index="${index}">-</button>
                        <span class="quantity-display">${quantity}</span>
                        <button class="btn btn-secondary adjust-quantity" data-action="increase" data-index="${index}">+</button>
                    </td>
                    <td><button class="btn btn-danger remove-btn">Удалить</button></td>
                </tr>
                `;
            });

            // Показываем таблицу с товарами
            $('#cartTable tbody').html(cartHTML);
            $('#cartTable').show();
            $('#totalAmount').text(totalAmount + ' ₽');
            $('#totalAmount').show();
            $('#clearCartBtn').show();
            $('#checkoutBtn').show(); // Если есть кнопка перехода к оформлению
            $('#emptyCartMessage').hide(); // Скрыть сообщение "Ваша корзина пуста"

            // Обновляем строку с информацией о товарах с правильным склонением
            var itemWord = getItemWord(totalQuantity); // Получаем правильное слово для товара
            $('#cartSummary').text(`${totalQuantity} ${itemWord} на сумму ${totalAmount} ₽`);
        } else {
            // Если корзина пуста, скрываем таблицу и показываем сообщение
            $('#cartTable').hide(); // Скрываем таблицу
            $('#totalAmount').hide(); // Скрываем итоговую сумму
            $('#clearCartBtn').hide(); // Скрываем кнопку очистки
            $('#checkoutBtn').hide(); // Скрываем кнопку перехода к оформлению
            $('#emptyCartMessage').show(); // Показываем сообщение о пустой корзине
            $('#cartSummary').text('Ваша корзина пуста'); // Текст для пустой корзины
        }
    }

    // Изначальный рендер корзины
    renderCart();

    // Обработчик для кнопок "Удалить"
    $('#cartTable').on('click', '.remove-btn', function() {
        var row = $(this).closest('tr');
        var index = row.data('index'); // Получаем индекс товара в корзине

        // Удаляем товар из корзины по индексу
        cart.splice(index, 1);

        // Обновляем корзину в localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Перерисовываем корзину
        renderCart();
    });

    // Обработчик для изменения количества товара с помощью кнопок "+" и "-"
    $('#cartTable').on('click', '.adjust-quantity', function() {
        var action = $(this).data('action');
        var index = $(this).data('index');
        var product = cart[index];

        // Проверяем наличие свойства quantity и инициализируем его, если нужно
        if (!product.quantity) {
            product.quantity = 1;
        }

        // Временная переменная для расчета новой общей суммы
        var newTotalAmount = calculateTotalAmount();
        var totalQuantity = calculateTotalQuantity(); // Пересчитываем общее количество товаров

        // Изменяем количество товара, если общая сумма не превышает лимит
        if (action === 'increase' && product.quantity < 5) {
            product.quantity++;  // Увеличиваем количество
        } else if (action === 'decrease' && product.quantity > 1) {
            product.quantity--;  // Уменьшаем количество
        }

        // Пересчитываем общую сумму корзины
        newTotalAmount = calculateTotalAmount();

        // Проверяем, не превышает ли новая общая сумма лимит
        if (newTotalAmount <= MAX_TOTAL_AMOUNT) {
            // Сохраняем обновленную корзину в localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Перерисовываем корзину
            renderCart();
        } else {
            // Если сумма превышает лимит, отменяем изменение
            alert('Превышен лимит на общую сумму заказа!');
        }
    });

    // Обработчик для очистки корзины
    $('#clearCartBtn').click(function() {
        // Очищаем корзину
        localStorage.removeItem('cart');

        // Перерисовываем корзину
        renderCart();
    });

    // Функция для добавления товара в корзину (для примера)
    function addToCart(product) {
        var existingProduct = cart.find(function(p) {
            return p.id === product.id;
        });

        if (existingProduct) {
            // Если товар уже есть в корзине, увеличиваем его количество
            existingProduct.quantity = Math.min(existingProduct.quantity + 1, 5);  // Ограничиваем количеством до 5
        } else {
            // Если товара нет в корзине, добавляем его
            product.quantity = 1;  // Изначально устанавливаем количество 1
            cart.push(product);
        }

        // Пересчитываем общую сумму
        var newTotalAmount = calculateTotalAmount();

        // Проверяем, не превышает ли общая сумма лимит
        if (newTotalAmount <= MAX_TOTAL_AMOUNT) {
            // Сохраняем корзину в localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Перерисовываем корзину
            renderCart();
        } else {
            // Если сумма превышает лимит, отменяем добавление товара
            alert('Превышен лимит на общую сумму заказа!');
        }
    }

    // Пример добавления товара в корзину через кнопку "В корзину"
    $('#addToCartBtn').click(function() {
        var product = {
            id: 1, // Пример ID товара
            title: 'Товар 1',
            price: 500,
            image: 'image1.jpg'
        };
        addToCart(product);

        // Показываем уведомление
        alert('Товар добавлен в корзину');
    });

    // Обработчик для очистки корзины
    $('#clearCartBtn').click(function() {
        // Очищаем корзину
        localStorage.removeItem('cart');

        // Перезагружаем страницу
        location.reload();
    });
});
