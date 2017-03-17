$(document).ready(function() {

    $('.carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });

    $.ajax({
        url: 'https://codi-e-commerce.herokuapp.com/',
        type: 'GET',
        dataType: 'json',
        success: function(objects, status) {

            var section = $("#container")

            for (var i in objects) {

                var article = $("<article class=col-md-3 item></article>")
                var vignette = $("<a href=product.html?index=" + i + "><img src=" + objects[i].thumb + "></a>")
                var nom = $("<h3>" + objects[i].name + "</h3>");
                var descr = $("<p>" + objects[i].description + "</p>")
                var prix = $("<p>" + "prix : " + objects[i].price + "€" + "</p>")

                article.append(nom, vignette, descr, prix)
                section.append(article)

            }
        }
    });
});
