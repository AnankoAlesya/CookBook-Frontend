jQuery(($) => {

    // HTML приложения
    let app_html = `
        <div class="container">
            <div class="page-header">
                <h1 id="page-title">Все блюда</h1>
            </div>

            <!-- Здесь будет показано содержимое страницы -->
            <div id="page-content"></div>
        </div>`;

    // Вставка кода на страницу
    $("#app").html(app_html);
});

// Функция для создания значений формы в формате json
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || "");
        } else {
            o[this.name] = this.value || "";
        }
    });
    return o;
};