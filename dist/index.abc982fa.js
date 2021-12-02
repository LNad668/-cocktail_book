document.addEventListener("submit", (event)=>{
    event.preventDefault();
});
let parent1 = document.getElementById("content");
parent1.innerHTML = "";
let detailsDrink = document.getElementById("drinkContainer");
detailsDrink.innerHTML = "";
function searchImg() {
    let request = document.getElementById("request").value;
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + request).then((response)=>response.json()
    ).then((search)=>{
        console.log(search);
        let parent = document.getElementById("content");
        parent.innerHTML = "";
        for (item of search.drinks){
            let list = document.createElement('div');
            list.className = "main__drinkContainer";
            list.id = "main__drinkContainer";
            parent.append(list);
            let title = document.createElement('div');
            title.className = "main__titleDrink";
            title.id = "main__titleDrink";
            title.innerHTML += item.strDrink;
            // тут некоторых элементов нету, но как проверить null ингридиентов или нет, я хз
            let ingr = document.createElement('div');
            ingr.innerHTML += item.strMeasure1 + item.strIngredient1 + '<br>' + item.strMeasure2 + item.strIngredient2 + '<br>' + item.strMeasure3 + item.strIngredient3;
            let instructions = document.createElement('div');
            instructions.innerHTML += item.strInstructions;
            let img = document.createElement('img');
            img.src = item.strDrinkThumb;
            img.style.width = '200px';
            img.style.height = '200px';
            list.append(img, title);
            // событие висит на созданном контейнере для картинки и названия напитка. в фетче апи по поиску коктейля по названию. а название по ссылке на title подхватывает. возможно такая штука натолкнет на мысль как повесить клик на букву. к букве в inner.html по идее можно обратиться через конструкцию `` и $
            list.onclick = function renderDrink() {
                fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + `${title.innerHTML}`).then((response)=>response.json()
                ).then((rendDrinks)=>{
                    console.log(rendDrinks);
                    detailsDrink.innerHTML = "";
                    let drinkImgContainer = document.createElement('div');
                    drinkImgContainer.style.width = '50%';
                    drinkImgContainer.className = "drink-render-container";
                    detailsDrink.append(drinkImgContainer);
                    let drinkRenderImg = document.createElement('img');
                    drinkRenderImg.src = `${img.src}`;
                    drinkRenderImg.style.width = '500px';
                    drinkRenderImg.style.height = '500px';
                    drinkImgContainer.appendChild(drinkRenderImg);
                    let drinkDetailsContainer = document.createElement('div');
                    drinkDetailsContainer.style.width = '50%';
                    drinkDetailsContainer.className = "drink-render-details-container";
                    detailsDrink.append(drinkDetailsContainer);
                    let drinkRenderTitle = document.createElement('div');
                    drinkRenderTitle.className = "renderTitle";
                    drinkRenderTitle.innerHTML = `${title.innerHTML}`;
                    drinkDetailsContainer.appendChild(drinkRenderTitle);
                    let drinkRenderIngr = document.createElement('div');
                    drinkRenderIngr.className = "renderIngr";
                    drinkRenderIngr.innerHTML = `${ingr.innerHTML}`;
                    drinkDetailsContainer.appendChild(drinkRenderIngr);
                    let drinkRenderInstr = document.createElement('div');
                    drinkRenderInstr.className = "renderInstr";
                    drinkRenderInstr.innerHTML = `${instructions.innerHTML}`;
                    drinkDetailsContainer.appendChild(drinkRenderInstr);
                    let favButton = document.createElement('button');
                    favButton.className = "favButton";
                    favButton.innerHTML = "Добавить в коллекцию ♥";
                    drinkDetailsContainer.appendChild(favButton);
                    favButton.focus();
                    favButton.onclick = function saveToFav() {
                        let favDrinks = [];
                        favDrinks.push(drinkRenderTitle.innerHTML);
                        favDrinks.push(drinkRenderIngr.innerHTML);
                        favDrinks.push(drinkRenderImg.src);
                        localStorage.setItem(drinkRenderTitle.innerHTML, JSON.stringify(favDrinks));
                        document.location.href = "/cocktail_book/src/favorites/index.html";
                    };
                }).catch((err)=>console.log(err)
                );
            };
        }
    }).catch((err)=>console.log(err)
    );
}

//# sourceMappingURL=index.abc982fa.js.map
