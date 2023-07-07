// JavaScript
console.log(document.getElementById("email").getAttribute("value"));

// jQuery
console.log($("#email").attr("value"));

    var settings = {
        "url": "https://www.googleapis.com/books/v1/volumes/FVYtAAAAYAAJ", 
        "method": "GET"
    }   
 
    $.ajax(settings).done(function(reponse){
        console.log(reponse);

        $("#titulo").text(reponse.volumeInfo.title);
        $("#autor").text(reponse.volumeInfo.authors[0]);
    });

    $("assinar").submit(function(e){
        e.preventDefault();
        $("#resposta").text("Requisição recebida. Boa Sorte!");
    });