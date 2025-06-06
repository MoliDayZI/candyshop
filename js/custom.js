(function ($) {

  "use strict";

// Массив товаров с категориями
var products = [
  {
    id: 1,
    title: 'Торт "Голубое Порхание"',
    weight: '2,4 кг',
    price: '2300 рублей',
    image: 'images/торт 1.jpg',
    category: 'Торты',
    width: '30 см',
    height: '10 см',
    composition: ['Тесто ванильное', 'Крем сливочный', 'Черника'],
    kbd: { calories: '250', proteins: '3g', fats: '14g', carbs: '30g' },
    description: 'Нежный ванильный торт с воздушным сливочным кремом и ароматной черникой. Идеальный выбор для ценителей легких и утонченных вкусов. Праздничная упаковка и красивые размеры делают его отличным вариантом для любого торжества.'
  },
  {
    id: 2,
    title: 'Торт "Голубичная поляна"',
    weight: '2,2 кг',
    price: '1800 рублей',
    image: 'images/торт 2.jpg',
    category: 'Торты',
    width: '28 см',
    height: '12 см',
    composition: ['Тесто бисквитное', 'Крем голубичный', 'Малина'],
    kbd: { calories: '220', proteins: '2g', fats: '12g', carbs: '25g' },
    description: 'Бисквитный торт с мягким голубичным кремом и свежей малиной. Отличается гармоничным сочетанием сладости и легкой кислинки. Прекрасно подходит для летних мероприятий и легких десертов.'
  },
  {
    id: 3,
    title: 'Торт "Шоколадный лес"',
    weight: '2,1 кг',
    price: '2100 рублей',
    image: 'images/торт 3.jpg',
    category: 'Торты',
    width: '32 см',
    height: '10 см',
    composition: ['Шоколадный бисквит', 'Крем шоколадный', 'Грецкие орехи'],
    kbd: { calories: '300', proteins: '4g', fats: '16g', carbs: '35g' },
    description: 'Торт с шоколадным бисквитом, насыщенным шоколадным кремом и хрустящими грецкими орехами. Этот десерт идеален для любителей шоколадных вкусов и тех, кто ценит богатые текстуры.'
  },
  {
    id: 4,
    title: 'Торт "Невестка"',
    weight: '2,5 кг',
    price: '2600 рублей',
    image: 'images/торт 77.jpg',
    category: 'Торты',
    width: '35 см',
    height: '12 см',
    composition: ['Тесто шоколадное', 'Крем карамельный', 'Вишня'],
    kbd: { calories: '280', proteins: '5g', fats: '15g', carbs: '32g' },
    description: 'Шоколадный бисквит, крем карамельный и сочная вишня создают этот роскошный и сытный торт. Отлично подойдет для свадьбы, юбилея или любого другого важного события.'
  },
  {
    id: 5,
    title: 'Торт "Сердцеедка"',
    weight: '2,2 кг',
    price: '2200 рублей',
    image: 'images/торт 5.jpg',
    category: 'Торты',
    width: '30 см',
    height: '11 см',
    composition: ['Тесто медовое', 'Крем карамельный', 'Клубника'],
    kbd: { calories: '260', proteins: '3g', fats: '14g', carbs: '28g' },
    description: 'Медовый бисквит с карамельным кремом и клубникой — этот торт порадует вас богатым вкусом и красивым оформлением. Идеально подойдет для романтического ужина или праздника с близкими.'
  },
  {
    id: 6,
    title: 'Набор "с голубикой"',
    weight: '600 гр',
    price: '810 рублей',
    composition: ['Сливочный крем пломбир и черничной прослойкой'],
    image: 'images/экл 1.jpg',
    category: 'Эклеры',
    width: '5 см',
    height: '10 см',
    kbd: { calories: '200', proteins: '3g', fats: '12g', carbs: '22g' },
    description: 'Нежные эклеры с пломбиром и черничной прослойкой. Эти десерты идеально сбалансированы по вкусу и будут отличным дополнением к любому чаепитию или празднику.'
  },
  {
    id: 7,
    title: 'Набор "Французский"',
    weight: '800 гр',
    price: '950 рублей',
    composition: ['Цитрусовый', 'Тирамису', 'Малина-фисташка', 'Лимонный', 'Лаванда', 'Баунти'],
    image: 'images/эклер 6.jpg',
    category: 'Эклеры',
    width: '6 см',
    height: '9 см',
    kbd: { calories: '220', proteins: '4g', fats: '13g', carbs: '26g' },
    description: 'Коллекция эклеров с различными вкусами: цитрус, тирамису, малина-фисташка, лимонный, лаванда и баунти. Это разнообразие вкусов, которое прекрасно подойдет для гурманов.'
  },
  {
    id: 8,
    title: 'Набор "Детский"',
    weight: '700 гр',
    price: '820 рублей',
    composition: ['Клубничный, Фисташка', 'Голубика', 'Малина', 'Пломбир', 'Лесные ягоды'],
    image: 'images/экл 4.jpg',
    category: 'Эклеры',
    width: '5 см',
    height: '9 см',
    kbd: { calories: '210', proteins: '3g', fats: '11g', carbs: '24g' },
    description: 'Эклеры с клубничным, фисташковым, голубичным и малиновым кремом, а также пломбиром. Яркие и вкусные десерты для детей, которые будут радовать их на любом празднике.'
  },
  {
    id: 9,
    title: 'Набор "Изыск"',
    weight: '900 гр',
    price: '1010 рублей',
    composition: ['2х Клубника-Пломбир', '2х Роза-Малина', '2х Фисташка', '2х Грейпфрут'],
    image: 'images/эклер 3.jpg',
    category: 'Эклеры',
    width: '6 см',
    height: '10 см',
    kbd: { calories: '240', proteins: '4g', fats: '14g', carbs: '28g' },
    description: 'Эклеры с разнообразными вкусами: клубника-пломбир, роза-малина, фисташка и грейпфрут. Эти изысканные десерты для ценителей утонченных вкусов идеально подойдут для любого важного мероприятия.'
  },
  {
    id: 10,
    title: 'Набор "Сливочный"',
    weight: '650 гр',
    price: '800 рублей',
    composition: ['Пломбир', 'Карамель', 'Шоколадный', 'Ореховый'],
    image: 'images/экл 5.jpg',
    category: 'Эклеры',
    width: '5 см',
    height: '8 см',
    kbd: { calories: '220', proteins: '3g', fats: '12g', carbs: '25g' },
    description: 'Коллекция эклеров с пломбиром, карамелью, шоколадом и орехами. Этим набором можно наслаждаться в компании друзей или на праздничном столе, сочетая любимые кремы и вкусы.'
  },
  {
    id: 11,
    title: 'Эклер с клубникой',
    weight: '0,3 кг',
    price: '500 рублей',
    image: 'images/экл 5.jpg',
    category: 'Эклеры',
    width: '4 см',
    height: '9 см',
    composition: ['Тесто эклерное', 'Крем клубничный', 'Клубника'],
    kbd: { calories: '180', proteins: '2g', fats: '9g', carbs: '22g' },
    description: 'Великолепный эклер с клубничным кремом и свежей клубникой, идеально подходящий для любителей легких и фруктовых десертов. Легкая и воздушная текстура с ярким клубничным вкусом.'
  },
  {
    id: 12,
    title: 'Шоколад-Голубика',
    weight: '500 гр',
    price: '650 рублей',
    image: 'images/кап 1.jpg',
    category: 'Капкейки',
    width: '6 см',
    height: '5 см',
    composition: ['Шоколадный бисквит', 'Крем голубичный', 'Шоколад'],
    kbd: { calories: '210', proteins: '3g', fats: '11g', carbs: '25g' },
    description: 'Шоколадный капкейк с кремом из голубики и шоколадной глазурью. Сочетание насыщенного шоколада и свежей голубики создаёт уникальный вкус, который удовлетворит самые изысканные вкусовые предпочтения.'
  },
  {
    id: 13,
    title: 'Сливочная Карамель',
    weight: '600 гр',
    price: '650 рублей',
    image: 'images/кап 2.jpg',
    category: 'Капкейки',
    width: '6 см',
    height: '6 см',
    composition: ['Карамельный крем', 'Шоколадный бисквит'],
    kbd: { calories: '230', proteins: '4g', fats: '12g', carbs: '27g' },
    description: 'Эти капкейки с карамельным кремом и шоколадным бисквитом идеально сбалансированы. Нежный карамельный вкус в сочетании с шоколадом — настоящий десерт для любителей сладких угощений.'
  },
  {
    id: 14,
    title: 'Клубника со сливками',
    weight: '400 гр',
    price: '600 рублей',
    image: 'images/капкейки.jpg',
    category: 'Капкейки',
    width: '5 см',
    height: '5 см',
    composition: ['Клубничный крем', 'Ванильное тесто'],
    kbd: { calories: '200', proteins: '2g', fats: '10g', carbs: '25g' },
    description: 'Клубничный капкейк с ванильным тестом и нежным клубничным кремом. Этот десерт идеально подходит для летних мероприятий, благодаря легкому и освежающему вкусу.'
  },
  {
    id: 15,
    title: 'Шоколадный Орео',
    weight: '700 гр',
    price: '700 рублей',
    image: 'images/кап 4.jpg',
    category: 'Капкейки',
    width: '7 см',
    height: '6 см',
    composition: ['Шоколадный крем', 'Песочное тесто', 'Орео'],
    kbd: { calories: '240', proteins: '3g', fats: '13g', carbs: '28g' },
    description: 'Шоколадный капкейк с песочным тестом и кремом, украшенный печеньем Орео. Этот десерт — идеальный выбор для настоящих ценителей шоколада и хрустящих добавок.'
  },
  {
    id: 16,
    title: 'Клубника - Фисташка',
    weight: '750 гр',
    price: '750 рублей',
    image: 'images/кап 5.jpg',
    category: 'Капкейки',
    width: '6 см',
    height: '7 см',
    composition: ['Клубничный крем', 'Фисташковая паста', 'Тесто ванильное'],
    kbd: { calories: '220', proteins: '3g', fats: '11g', carbs: '24g' },
    description: 'Капкейки с клубничным кремом и фисташковой пастой. Сочетание сладкой клубники и насыщенной фисташковой нотки придает этим капкейкам особенный вкус.'
  },
  {
    id: 17,
    title: 'Эклер с клубникой',
    weight: '0,3 кг',
    price: '500 рублей',
    image: 'images/экл 5.jpg',
    category: 'Эклеры',
    width: '4 см',
    height: '9 см',
    composition: ['Тесто эклерное', 'Крем клубничный', 'Клубника'],
    kbd: { calories: '180', proteins: '2g', fats: '9g', carbs: '22g' },
    description: 'Освежающий эклер с клубничным кремом и натуральной клубникой. Легкость теста и фруктовый вкус делают его отличным выбором для летних десертов.'
  },
  {
    id: 18,
    title: 'Шоколад-Голубика',
    weight: '500 гр',
    price: '650 рублей',
    image: 'images/кап 1.jpg',
    category: 'Капкейки',
    width: '6 см',
    height: '5 см',
    composition: ['Шоколадный бисквит', 'Крем голубичный', 'Шоколад'],
    kbd: { calories: '210', proteins: '3g', fats: '11g', carbs: '25g' },
    description: 'Нежный капкейк с шоколадным бисквитом и голубичным кремом, украшенный шоколадной глазурью. Идеален для любителей сочетания сладкого и кислого вкуса.'
  },
  {
    id: 19,
    title: 'Сливочная Карамель',
    weight: '600 гр',
    price: '650 рублей',
    image: 'images/кап 2.jpg',
    category: 'Капкейки',
    width: '6 см',
    height: '6 см',
    composition: ['Карамельный крем', 'Шоколадный бисквит'],
    kbd: { calories: '230', proteins: '4g', fats: '12g', carbs: '27g' },
    description: 'Капкейки с карамельным кремом и шоколадным бисквитом. Эти угощения подойдут для самых сладких вечеров, сочетая карамель и шоколад в одном восхитительном десерте.'
  },
  {
    id: 20,
    title: 'Клубника со сливками',
    weight: '400 гр',
    price: '600 рублей',
    image: 'images/капкейки.jpg',
    category: 'Капкейки',
    width: '5 см',
    height: '5 см',
    composition: ['Клубничный крем', 'Ванильное тесто'],
    kbd: { calories: '200', proteins: '2g', fats: '10g', carbs: '25g' },
    description: 'Вкусный капкейк с клубничным кремом и ванильным тестом. Легкий и воздушный десерт, который порадует всех любителей сладких и фруктовых угощений.'
  },
  {
    id: 21,
    title: 'Шоколадный Орео',
    weight: '700 гр',
    price: '700 рублей',
    image: 'images/кап 4.jpg',
    category: 'Капкейки',
    width: '7 см',
    height: '6 см',
    composition: ['Шоколадный крем', 'Песочное тесто', 'Орео'],
    kbd: { calories: '240', proteins: '3g', fats: '13g', carbs: '28g' },
    description: 'Шоколадный капкейк с песочным тестом и шоколадным кремом, украшенный печеньем Орео. Этот десерт сочетает в себе глубокий вкус шоколада с хрустящей текстурой печенья.'
  },
  {
    id: 22,
    title: 'Клубника - Фисташка',
    weight: '750 гр',
    price: '750 рублей',
    image: 'images/кап 5.jpg',
    category: 'Капкейки',
    width: '6 см',
    height: '7 см',
    composition: ['Клубничный крем', 'Фисташковая паста', 'Тесто ванильное'],
    kbd: { calories: '220', proteins: '3g', fats: '11g', carbs: '24g' },
    description: 'Нежный капкейк с клубничным кремом и фисташковой пастой, с ванильным тестом. Идеальное сочетание сладости клубники и насыщенного орехового вкуса фисташки.'
  },
  {
    id: 23,
    title: '"Время пить чай"',
    weight: '700 гр',
    price: '550 рублей',
    image: 'images/бенто 1.png',
    category: 'Бенто-торт',
    width: '25 см',
    height: '6 см',
    composition: ['Чайный бисквит', 'Крем ванильный', 'Цитрусовые'],
    kbd: { calories: '190', proteins: '3g', fats: '8g', carbs: '27g' },
    description: 'Торт с чайным бисквитом, ванильным кремом и цитрусовыми нотками. Легкий и ароматный, идеально подходит для тех, кто любит сочетание чая и свежих цитрусовых.'
  },
  {
    id: 24,
    title: '"Ромашковое поле"',
    weight: '600 гр',
    price: '500 рублей',
    image: 'images/бенто 2.png',
    category: 'Бенто-торт',
    width: '24 см',
    height: '5 см',
    composition: ['Тесто ванильное', 'Крем сливочный', 'Малина'],
    kbd: { calories: '210', proteins: '3g', fats: '10g', carbs: '26g' },
    description: 'Милый и ароматный торт с ванильным тестом, сливочным кремом и малиной. Этот торт — настоящее "ромашковое поле", которое придаст вашему столу яркость и свежесть.'
  },
  {
    id: 25,
    title: '"Happy Birthday"',
    weight: '700 гр',
    price: '550 рублей',
    image: 'images/бенто 3.png',
    category: 'Бенто-торт',
    width: '26 см',
    height: '7 см',
    composition: ['Шоколадный бисквит', 'Крем сливочный', 'Вишня'],
    kbd: { calories: '220', proteins: '4g', fats: '12g', carbs: '28g' },
    description: 'Этот торт с шоколадным бисквитом, сливочным кремом и вишней идеально подойдет для праздников. Яркий и вкусный десерт, который станет украшением любого торжества.'
  },
  {
    id: 26,
    title: '"5 Месяцев"',
    weight: '700 гр',
    price: '550 рублей',
    image: 'images/бенто 4.png',
    category: 'Бенто-торт',
    width: '27 см',
    height: '6 см',
    composition: ['Тесто медовое', 'Крем сливочный', 'Клубника'],
    kbd: { calories: '230', proteins: '3g', fats: '13g', carbs: '29g' },
    description: 'Медовый бенто-торт с клубничным кремом и нежной клубникой сверху. Идеален для торжеств, символизируя сладость и тепло меда с яркими нотами свежей клубники.'
  },
  {
    id: 27,
    title: '"История Любви"',
    weight: '800 гр',
    price: '600 рублей',
    image: 'images/бенто 5.png',
    category: 'Бенто-торт',
    width: '28 см',
    height: '8 см',
    composition: ['Тесто ванильное', 'Крем клубничный', 'Черника'],
    kbd: { calories: '240', proteins: '4g', fats: '14g', carbs: '30g' },
    description: 'Этот торт, наполненный ванильным тестом, клубничным кремом и свежей черникой, символизирует "Историю Любви" — нежный и сочный десерт, который очарует своим вкусом.'
  },
  {
    id: 28,
    title: 'Для Близких',
    weight: '1,1 кг',
    price: '1100 рублей',
    image: 'images/чиз 2.jpg',
    category: 'Чизкейки',
    width: '22 см',
    height: '6 см',
    composition: ['Тесто печеночное', 'Крем сырный', 'Грецкие орехи'],
    kbd: { calories: '250', proteins: '5g', fats: '15g', carbs: '22g' },
    description: 'Чизкейк с печеночным тестом, сырным кремом и хрустящими грецкими орехами. Прекрасный выбор для тех, кто ценит насыщенный вкус и текстуру орехов в десерте.'
  },
  {
    id: 29,
    title: '"Яблочная Полянка"',
    weight: '1,2 кг',
    price: '1150 рублей',
    image: 'images/чиз 3.jpg',
    category: 'Чизкейки',
    width: '23 см',
    height: '6 см',
    composition: ['Яблочное пюре', 'Крем сырный', 'Песочное тесто'],
    kbd: { calories: '240', proteins: '4g', fats: '13g', carbs: '30g' },
    description: 'Чизкейк с яблочным пюре, сырным кремом и песочным тестом. Вкусный и ароматный, он принесет сладкую свежесть и уют в любой день.'
  },
  {
    id: 30,
    title: '"Тыквенная Полянка"',
    weight: '1,3 кг',
    price: '1200 рублей',
    image: 'images/чиз 4.jpg',
    category: 'Чизкейки',
    width: '24 см',
    height: '7 см',
    composition: ['Тыквенное пюре', 'Крем сырный', 'Тесто ореховое'],
    kbd: { calories: '260', proteins: '5g', fats: '15g', carbs: '32g' },
    description: 'Чизкейк с тыквенным пюре, сырным кремом и ореховым тестом. Вкусный осенний десерт, который сочетает в себе сладость тыквы и аромат орехов.'
  },
  {
    id: 31,
    title: '"Ежевичная Сказка"',
    weight: '1,4 кг',
    price: '1400 рублей',
    image: 'images/чиз 6.jpg',
    category: 'Чизкейки',
    width: '25 см',
    height: '8 см',
    composition: ['Ежевика', 'Крем сырный', 'Бисквитное тесто'],
    kbd: { calories: '250', proteins: '4g', fats: '14g', carbs: '31g' },
    description: 'Этот чизкейк с ежевикой и кремом из сливочного сыра на бисквитном тесте идеально подойдет для любителей ягодных десертов. Нежный и сладкий, с легкой кислинкой ежевики.'
  },
  {
    id: 32,
    title: '"Новогодний Лес"',
    weight: '1,4 кг',
    price: '1350 рублей',
    image: 'images/чиз 5.jpg',
    category: 'Чизкейки',
    width: '26 см',
    height: '8 см',
    composition: ['Новогодние специи', 'Крем сырный', 'Шоколад'],
    kbd: { calories: '270', proteins: '5g', fats: '16g', carbs: '33g' },
    description: 'Чизкейк с новогодними специями, сырным кремом и шоколадом. Идеальный выбор для новогодних праздников, сочетает в себе аромат корицы и шоколада.'
  }
];



// Функция для добавления товаров в слайдер по категории
function renderProducts(category) {
  var productContainer = $(`.owl-courses.${category}`);  // Контейнер для слайдера по категории
  productContainer.empty();  // Очистить контейнер перед добавлением новых товаров

  // Фильтруем товары по категории
  var filteredProducts = products.filter(function(product) {
    return product.category === category;
  });

  // Проходим по отфильтрованным товарам и создаем HTML-код
  filteredProducts.forEach(function(product) {
    var productHTML = `
      <div class="col-md-4 col-sm-4">
        <div class="item">
          <div class="courses-thumb">
            <div class="courses-top">
              <div class="courses-image">
                <img src="${product.image}" class="img-responsive" alt="${product.title}">
              </div>
            </div>
            <div class="courses-detail">
              <h3><a href="product.html?id=${product.id}">${product.title}</a></h3>
              <p>Вес: ${product.weight} <br>Цена: ${product.price}</p>
            </div>
            <div class="courses-info">
              <div class="courses-price">
                <!-- Кнопка для добавления в корзину -->
                <a href="#" class="add-to-cart-btn" data-product-id="${product.id}">
                  <span>В Корзину</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    productContainer.append(productHTML);
  });

  // Делегирование события клика на кнопках "В Корзину"
  productContainer.on('click', '.add-to-cart-btn', function(e) {
    e.preventDefault();  // Предотвращаем переход по ссылке

    var productId = $(this).data('product-id');  // Получаем id товара из атрибута data-product-id
    var product = products.find(function(p) {
      return p.id == productId;
    });

    if (product) {
      // Получаем текущие товары из корзины (если они есть)
      var cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Проверяем, есть ли товар уже в корзине
      var existingProduct = cart.find(function(p) {
        return p.id == product.id;
      });

      if (existingProduct) {
        // Если товар уже в корзине, показываем уведомление
        alert('Этот товар уже в корзине. Выберите количество на странице "Корзина"');
      } else {
        // Если товара нет в корзине, добавляем его
        cart.push(product);

        // Сохраняем обновленную корзину в localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Уведомление о добавлении товара
        alert('Товар добавлен в корзину!');
      }
    }
  });
}

$(document).ready(function() {
  // Получаем параметр id из URL
  var urlParams = new URLSearchParams(window.location.search);
  var productId = urlParams.get('id');

  // Находим товар по id
  var product = products.find(function(p) {
    return p.id == productId;
  });

  // Если товар найден, отображаем его информацию
  if (product) {
    var productDetailHTML = `
      <div class="container mt-6">
        <div class="row">
          <!-- Картинка товара -->
          <div class="col-md-6">
            <img src="${product.image}" class="img-fluid" style="width: 100%;" alt="${product.title}">
          </div>

          <!-- Информация о товаре -->
          <div class="col-md-6 d-flex flex-column justify-content-between">
            <div>
              <h1 class="h2">${product.title}</h1>
              <p class="mt-3" style="font-size: 1.5rem;"><strong>Описание товара:</strong> ${product.description}</p>
              <p style="font-size: 1.5rem;"><strong>Вес:</strong> ${product.weight}</p>
              <p style="font-size: 1.5rem;"><strong>Ширина:</strong> ${product.width}</p>
              <p style="font-size: 1.5rem;"><strong>Высота:</strong> ${product.height}</p>
              <p class="mt-4 fw-bold text-primary" style="font-size: 2rem;"><strong>Цена:</strong> ${product.price}</p>
            </div>
            <div>
              <!-- Кнопка добавления в корзину -->
              <button class="btn btn-primary w-100 mt-4" id="addToCartBtn">Добавить в корзину</button>
            </div>
          </div>
        </div>

        <!-- Состав товара и КБЖУ -->
        <div class="row" style="margin-top: 6rem;"> <!-- Значительный отступ сверху -->
          <div class="col-md-6">
            <p style="font-size: 1.75rem; font-weight: bold;"><strong>Состав:</strong></p>
            <ul class="list-group">
              ${product.composition.map(function(ingredient) {
                return `<li class="list-group-item" style="font-size: 1.5rem;">${ingredient}</li>`;
              }).join('')}
            </ul>
          </div>
          <div class="col-md-6">
            <p style="font-size: 1.75rem; font-weight: bold;"><strong>КБЖУ:</strong></p>
            <ul class="list-group">
              <li class="list-group-item" style="font-size: 1.5rem;"><strong>Калории:</strong> ${product.kbd.calories}</li>
              <li class="list-group-item" style="font-size: 1.5rem;"><strong>Белки:</strong> ${product.kbd.proteins}</li>
              <li class="list-group-item" style="font-size: 1.5rem;"><strong>Жиры:</strong> ${product.kbd.fats}</li>
              <li class="list-group-item" style="font-size: 1.5rem;"><strong>Углеводы:</strong> ${product.kbd.carbs}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    // Вставляем в контейнер для деталей товара
    $('.product-container').html(productDetailHTML);

    // Обработчик для кнопки "Добавить в корзину"
    $('#addToCartBtn').click(function() {
      // Получаем текущие товары из корзины (если они есть)
      var cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Проверяем, есть ли товар уже в корзине
      var existingProduct = cart.find(function(p) {
        return p.id == product.id;
      });

      if (existingProduct) {
        // Если товар уже в корзине, показываем уведомление
        alert('Этот товар уже в корзине. Выберите количество на странице "Корзина"');
      } else {
        // Если товара нет в корзине, добавляем его
        cart.push(product);

        // Сохраняем обновленную корзину в localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Уведомление о добавлении товара
        alert('Товар добавлен в корзину!');
      }
    });
  } else {
    // Если товар не найден
    $('.product-container').html('<p>Товар не найден.</p>');
  }
});

// Вызовем функцию для отображения товаров в слайдерах по категориям
renderProducts('Торты');  // Отображаем только торты в соответствующем слайдере
renderProducts('Эклеры');  // Отображаем только эклеры в соответствующем слайдере
renderProducts('Капкейки');
renderProducts('Бенто-торт');
renderProducts('Чизкейки');

// Инициализация слайдера для Тортов
$('.owl-courses.Торты').owlCarousel({
  animateOut: 'fadeOut',
  loop: true,
  autoplayHoverPause: false,
  autoplay: true,
  smartSpeed: 1000,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

// Инициализация слайдера для Эклеров
$('.owl-courses.Эклеры').owlCarousel({
  animateOut: 'fadeOut',
  loop: true,
  autoplayHoverPause: false,
  autoplay: true,
  smartSpeed: 1000,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

// Инициализация слайдера для Эклеров
$('.owl-courses.Капкейки').owlCarousel({
  animateOut: 'fadeOut',
  loop: true,
  autoplayHoverPause: false,
  autoplay: true,
  smartSpeed: 1000,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

// Инициализация слайдера для Эклеров
$('.owl-courses.Бенто-торт').owlCarousel({
  animateOut: 'fadeOut',
  loop: true,
  autoplayHoverPause: false,
  autoplay: true,
  smartSpeed: 1000,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

// Инициализация слайдера для Эклеров
$('.owl-courses.Чизкейки').owlCarousel({
  animateOut: 'fadeOut',
  loop: true,
  autoplayHoverPause: false,
  autoplay: true,
  smartSpeed: 1000,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});


    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // HOME SLIDER & COURSES & CLIENTS
    $('.home-slider').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      dots:false,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })

    $('.owl-courses').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      nav:true,
      navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3,
        }
      }
    });

    $('.owl-client').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3,
        }
      }
    });


    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);