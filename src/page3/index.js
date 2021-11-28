let parent = document.getElementById("title");
document.addEventListener("DOMContentLoaded", function (event) {
    const favoritesObject = JSON.parse(localStorage.getItem("favorites"));
    console.log(favoritesObject);


    for (let i = 0; i <  favoritesObject.length; i++) {
        let title = document.createElement("h1");
        let ingr = document.createElement("p");
        let img = document.createElement("img");
        title.innerHTML = favoritesObject[i].strDrink;
        ingr.innerHTML = favoritesObject[i].strMeasure1 + favoritesObject[i].strIngredient1;
        img.src = favoritesObject[i].strDrinkThumb;

    img.style.width = '300px';
    img.style.height = '300px';
    parent.append(ingr, title, img);    
}
});