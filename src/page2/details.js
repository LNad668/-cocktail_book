document.addEventListener("DOMContentLoaded", function (event) {
    const detailsObject = JSON.parse(localStorage.getItem("details"));
    console.log(detailsObject);

    let detailsDrink = document.getElementById("drinkContainer");

   // document.querySelector("#title").innerHTML = detailsObject.strDrink;
   // document.querySelector("#img").src = detailsObject.strDrinkThumb;
    //document.querySelector("#ingr").innerHTML = detailsObject.strMeasure1 + detailsObject.strIngredient1 + detailsObject.strIngredient2 ;
  //  img.style.width = '300px';
   // img.style.height = '300px';
   detailsDrink.innerHTML = "";
    let drinkImgContainer = document.createElement('div');
    drinkImgContainer.style.width = '100%';
    detailsDrink.append(drinkImgContainer);

    let drinkRenderImg = document.createElement('img');
    drinkRenderImg.src = detailsObject.strDrinkThumb;
    drinkRenderImg.style.width = '500px';
    drinkRenderImg.style.height = '400px';
    drinkRenderImg.style.marginLeft = '30%';
    drinkImgContainer.appendChild(drinkRenderImg);

    let drinkDetailsContainer = document.createElement('div');
    drinkDetailsContainer.style.width = '50%';
    drinkDetailsContainer.style.marginLeft ='30%'
    detailsDrink.append(drinkDetailsContainer);

    let drinkRenderTitle = document.createElement('div');
    drinkRenderTitle.className = "renderTitle";
    drinkRenderTitle.innerHTML = detailsObject.strDrink;
    drinkDetailsContainer.appendChild(drinkRenderTitle);

    let drinkRenderIngr = document.createElement('div');
    drinkRenderIngr.className = "renderIngr";
    drinkRenderIngr.innerHTML = detailsObject.strMeasure1 + detailsObject.strIngredient1 + '<br>' + detailsObject.strMeasure2 + detailsObject.strIngredient2 + '<br>' + detailsObject.strMeasure3 + detailsObject.strIngredient3;
    drinkDetailsContainer.appendChild(drinkRenderIngr);

    let drinkRenderInstr = document.createElement('div');
    drinkRenderInstr.className = "renderInstr";
    drinkRenderInstr.innerHTML = detailsObject.strInstructions;
    drinkDetailsContainer.appendChild(drinkRenderInstr);



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

            document.location.href = "/cocktail_book/src/favorites/index.html";
        } else {
            window.alert('Упс. Вы уже добавили этот коктейль :(')
        }
    })
});


