$(document).ready(function() {

    var section = $("#produit")
    var section2 = $("#produit2")
    for (var i = 0; i < 3; i++) {

        var nb = Math.floor(Math.random()*catalog.length)

        var article = $("<article class=col-md-3 item></article>")
        var vignette = $("<img src=" + catalog[nb].thumb + ">")
        var nom = $("<h3>" + catalog[nb].name + "</h3>");
        var descr = $("<p>" + catalog[nb].description + "</p>")
        var prix = $("<p>" + "prix : " + catalog[nb].price + "€" + "</p>")
        var quant = $("<input type=number value=" + catalog[nb].quantity + ">")

        article.append(nom, vignette, descr, prix, quant)
        section2.append(article)
    }
});
