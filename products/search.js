jQuery($ => {

    // Когда была нажата кнопка «Найти»
    $(document).on("click", "#button", function () {

        // Получаем выбранную категорию
        let categoryName = $("input[name='options']:checked").next().text();

        // Если категория не выбрана, то отображаем все блюда
        if (!categoryName.trim() || categoryName === "Все категории") {
            $.getJSON("http://api/product/read.php", data => {
                readProductsTemplate(data, "Все блюда");
            });
        } else {
            // Получаем данные из API на основе названия категории
            categoryName = encodeURIComponent(categoryName);
            $.getJSON(`http://api/product/search.php?categoryName=${categoryName}`, data => {
                readProductsTemplate(data, categoryName);
            });
        }

        // Предотвращаем перезагрузку всей страницы
        return false;
    });

    jQuery($ => {

        // Когда была нажата кнопка «Выбрать»
        $(document).on("click", "#button", function () {
    
            // Получаем выбранные ключевые слова
            let keywords = [];
            $("input[name='options']:checked").each(function() {
                keywords.push($(this).val());
            });
    
            // Если ключевые слова не выбраны, то отображаем все блюда
            if (keywords.length === 0) {
                $.getJSON("http://api/product/read.php", data => {
                    readProductsTemplate(data, "Все блюда");
                });
            } else {
                // Получаем данные из API на основе выбранных ключевых слов
                let keywordsStr = keywords.join(',');
                keywordsStr = encodeURIComponent(keywordsStr);
                $.getJSON(`http://api/product/search.php?keywords=${keywordsStr}`, data => {
                    readProductsTemplate(data, `Поиск по ключевым словам: ${keywordsStr}`);
                });
            }
    
            // Предотвращаем перезагрузку всей страницы
            return false;
        });
    
    });
    

});

