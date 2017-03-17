$(document).ready(function() {

    var section = $("#produit")

    var GET_PARAM = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };


    var index = GET_PARAM("index")

    var article = $("<article class=col-md-3 item></article>")
    var vignette = $("<img src=" + catalog[index].thumb + ">")
    var nom = $("<h3>" + catalog[index].name + "</h3>");
    var descr = $("<p>" + catalog[index].description + "</p>")
    var prix = $("<p id=prx>" + "prix : " + catalog[index].price + "€" + "</p>")
    var quant = $("<input id=qty type=number value=" + 1 + ">")

    $("#stockage").on("click", function(){
        if (localStorage.panier == null) {
            var monPanier = {}
            monPanier[index] = $("#qty").val()
            var article_json = JSON.stringify(monPanier);
            localStorage.setItem("panier",article_json);
        }else {
            var stor = localStorage.getItem("panier");
            var updMonPanier = JSON.parse(stor);
            if (updMonPanier[index] != undefined) {
                updMonPanier[index] = parseInt(updMonPanier[index])+parseInt($("#qty").val())
                var json_updMonPanier = JSON.stringify(updMonPanier);
                localStorage.setItem("panier", json_updMonPanier);
            }else {
                updMonPanier[index] = $("#qty").val();
                var json_updMonPanier = JSON.stringify(updMonPanier);
                localStorage.setItem("panier", json_updMonPanier)
            }
        }
    });


    article.append(nom, vignette, descr, prix, quant)
    section.append(article)

});
