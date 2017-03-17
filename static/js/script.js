$(document).ready(function() {

    $('.carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });

    var GET_PARAM = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };
    console.log(GET_PARAM("nom"));
    console.log(GET_PARAM("prenom"));

    var section = $("#container")

    for (var i in catalog) {
        // for (var j = 0; j < pictures.length; j++) {
        //
        // }
        var article = $("<article class=col-md-3 item></article>")
        var vignette = $("<a href=product.html?index="+i+"><img src=" + catalog[i].thumb + "></a>")
        var nom = $("<h3>" + catalog[i].name + "</h3>");
        var descr = $("<p>" + catalog[i].description + "</p>")
        var prix = $("<p>" + "prix : " + catalog[i].price + "€" + "</p>")
        // var quant = $("<input type=number value=" + catalog[i].quantity + ">")
        // var pict = $("<img src="+catalog[i].pictures+" class='img-responsive'>")


        article.append(nom, vignette, descr, prix)
        section.append(article)

    }

});
