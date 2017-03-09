$(document).ready(function() {

    $('.carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });

    var section = $("#produit")

    for (var i in catalog) {
        console.log(catalog[0]);
        var article = $("<article class=col-md-4></article>")
        var nom = $("<h3>"+catalog[i].name+"</h3>");
        var descr = $("<p>"+catalog[i].description+"</p>")
        var prix = $("<p>"+catalog[i].price+"</p>")
        var quant = $("<input type=number value="+catalog[i].quantity+">")
        var vignette = $("<img src="+catalog[i].thumb+">")
        var pict = $("<img src="+catalog[i].pictures+" class='img-responsive'>")
        article.append(nom, descr, prix, quant, vignette, pict)
        section.append(article)
    }
});
