document.addEventListener("DOMContentLoaded", function (event) {
    const detailsObject = JSON.parse(localStorage.getItem("details"));
    console.log(detailsObject);
    document.querySelector("#title").innerHTML = detailsObject.strDrink;
    document.querySelector("#img").src = detailsObject.strDrinkThumb;
    document.querySelector("#ingr").innerHTML = detailsObject.strMeasure1 + detailsObject.strIngredient1;
    img.style.width = '300px';
    img.style.height = '300px';

    document.querySelector("#submit").addEventListener("click", (evt) => {
        evt.preventDefault();

        let favoritesFromStorage = JSON.parse(localStorage.getItem("favorites"));
         console.log(favoritesFromStorage);
        if (!Array.isArray(favoritesFromStorage)) {
            favoritesFromStorage = [];
        }

        const index = favoritesFromStorage.findIndex(function(x) { // Вернет -1, если не найдет элемент
            return x.idDrink === detailsObject.idDrink
        })

        if (index < 0) {
    
            favoritesFromStorage.push(detailsObject);

            localStorage.setItem("favorites", JSON.stringify(favoritesFromStorage));

            document.location.href = "/cocktail_book/src/page3/index.html";
        } else {
            window.alert('Упс. Вы уже добавили этот коктейль :(')
        }
    })
});


