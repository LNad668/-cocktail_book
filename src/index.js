
console.log('hello');

let parent = document.getElementById("content");
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(response => response.json())
    .then(search => {
        console.log(search);
        const drinks = search.drinks;
        for (let i = 0; i < drinks.length; i++) {
            let title = document.createElement("h1");
            let ingr = document.createElement("p");
            let img = document.createElement("img");
            let link = document.createElement("a")
            link.href = "/cocktail_book/src/details.html";
            link.addEventListener("click", () => {
                localStorage.setItem("details", JSON.stringify(drinks[i]))
            })
            title.innerHTML = drinks[i].strDrink;
            img.src = drinks[i].strDrinkThumb;
            img.style.width = '300px';
            img.style.height = '300px';
            link.append(title, img );
            parent.append(link); //тут был ingr
        }
    }) 

//document.addEventListener("DOMContentLoaded", function (event) {
   // const detailsObject = JSON.parse(localStorage.getItem("details"));
  //  console.log(detailsObject);
  //  document.querySelector("#title").innerHTML = detailsObject.strDrink;
  //  document.querySelector("#img").src =detailsObject.strDrinkThumb;
  //  document.querySelector("#ingr").innerHTML = detailsObject.strMeasure1 + detailsObject.strIngredient1;
  //  img.style.width = '300px';
  //  img.style.height = '300px';
//});