jQuery($ => {

    // Когда была нажата кнопка «Поиск»
    $(document).on("submit", "#sbyname", function () {

        // Получаем название блюда для поиска
        let Name = $(this).find("input[name='search']").val();

        // Если строка поиска пустая, то отображаем все блюда
        if (!Name.trim()) {
            $.getJSON("http://api/product/read.php", data => {
                readProductsTemplate(data, "Все блюда");
            });
        } else {
            // Получаем данные из API на основе названия блюда
            $.getJSON("http://api/product/search_by_name.php?Name=" + Name, data => {
                readProductsTemplate(data, Name);
            });
        }

        // Предотвращаем перезагрузку всей страницы
        return false;
    });

});

