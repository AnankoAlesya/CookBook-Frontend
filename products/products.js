function readProductsTemplate(data, Name) {

    let read_products_html = "";

    // Перебор возвращаемого списка данных
    $.each(data.records, (key, val) => {

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
}
