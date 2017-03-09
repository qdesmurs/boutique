$(document).ready(function() {

    $('.carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });

    var section = $("#produit")

    for (var i in catalog) {
        // for (var j = 0; j < pictures.length; j++) {
        //
        // }
        console.log(catalog[0]);
        var article = $("<article class=col-md-3 item></article>")
        var vignette = $("<img src=" + catalog[i].thumb + ">")
        var nom = $("<h3>" + catalog[i].name + "</h3>");
        var descr = $("<p>" + catalog[i].description + "</p>")
        var prix = $("<p>" + "prix : " + catalog[i].price + "€" + "</p>")
        var quant = $("<input type=number value=" + catalog[i].quantity + ">")
        // var pict = $("<img src="+catalog[i].pictures+" class='img-responsive'>")


        article.append(nom, vignette, descr, prix, quant)
        section.append(article)
    }


});
