jQuery(($) => {

    // Показать список товаров при первой загрузке
    showProducts();
    showCategories();
});

// Функция для показа списка товаров
function showProducts() {
    // Получить список товаров из API
$.getJSON("http://api/product/read.php", data => {
    let read_products_html = ""
    $.each(data.records, function (key, val) {

        // Преобразование шестнадцатеричной строки в строку Base64
        let hexString = val.Image;
        let bytes = new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
        let binary = Array.from(bytes, byte => String.fromCharCode(byte)).join('');
        let base64String = window.btoa(binary);
    
        // Создание новой строки таблицы для каждой записи
        read_products_html += `
        <div class="product-card">
            <div class="image"> 
                <div class="image-hover">
                    <img src="data:image/jpeg;base64,${base64String}" class="product-image"> 
                </div>
                <img class="like" src="heart.png" onclick="changeIcon(this)">
            </div>
            <a href="#"><h1 class="product-name">${val.Name}</h1></a>
        </div>
        `;
    });
    
    
    // Вставка в "page-content" нашего приложения
$(".container").html(read_products_html);

});}

function showCategories() {
    // Получить список категорий из API
    $.getJSON("http://api/category/read.php", data => {
        let read_categories_html = `
            <div class = "content">
                <div class = "searching_for">
                    <form1  class="categories" action="radio" style="display: flex; flex-direction: column;">
        `;

        $.each(data.records, function (key, val) {
            // Создание новой строки формы для каждой категории
            read_categories_html += `
                <div style="display: flex; align-items: center;">
                    <input type="radio" id="option${key}" name="options" value="option${key}">
                    <label for="option${key}" style="margin-left: 5px;">${val.CategoryName}</label>
                </div>
            `;
        });

        read_categories_html += `
                    </form1>
                </div>
            </div>
        `;

        // Вставка в "page-content" нашего приложения
        $(".categories").html(read_categories_html);
    });
}


