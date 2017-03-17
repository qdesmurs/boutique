$(document).ready(function() {

    var stor = localStorage.getItem("panier");
    var json_panier = JSON.parse(stor)

    function update(){
        $("#produit3").empty()
    for (var i in json_panier) {
        // for (var j = 0; j < pictures.length; j++) {
        //
        // }
        var article = $("<article class=col-md-4 item></article>")
        var article2 = $("<article class=col-md-4 item></article>")
        var vignette = $("<a href=product.html?index="+i+"><img src=" + catalog[i].thumb + "></a>")
        var nom = $("<h3>" + catalog[i].name + "</h3>");
        var descr = $("<p>" + catalog[i].description + "</p>")
        var prix = $("<p>" + "prix : " + catalog[i].price + "€" + "</p>")
        var quant = $("<input class="+ i +" type=number value=" + json_panier[i] + ">").change(function(){
            var index = $(this).attr("class")
            json_panier[index] = $(this).val()
            var rmPanier = JSON.stringify(json_panier)
            localStorage.setItem("panier", rmPanier)
            update()
        })

        var pict = $("<img src="+catalog[i].pictures+" class='img-responsive'>")
        var total = $("<p class=total></p>").html(catalog[i].price*json_panier[i]+"€")
        var remove = $("<button id="+ i +">delete</button>").click(function(){
            var index = $(this).attr("id")
            delete json_panier[index]
            var rmPanier = JSON.stringify(json_panier)
            localStorage.setItem("panier", rmPanier)

            $(this).parent().remove()
        });

        // var tototal = total*i
        // $("#total").append(tototal)

        article.append(nom, vignette, descr, prix, total, quant, remove)
        $("#produit3").append(article)

    }
    }
    update()
});
