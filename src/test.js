document.addEventListener("submit", (event) => {
    event.preventDefault();
});
let parent = document.getElementById("content");
parent.innerHTML = "";
let detailsDrink = document.getElementById("drinkContainer");
detailsDrink.innerHTML = "";

function searchImg() {
    let request = document.getElementById("request").value;
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + request)


        .then(response => response.json())
        .then(search => {
            console.log(search)

            let parent = document.getElementById("content");
            parent.innerHTML = "";
            for (item of search.drinks) {
                let list = document.createElement('div');
                list.className = "main__drinkContainer";
                list.id = "main__drinkContainer";
                parent.append(list);
                let title = document.createElement('div');
                title.className = "main__titleDrink";
                title.id = "main__titleDrink";
                title.innerHTML += item.strDrink;

                // тут некоторых элементов нету, но как проверить null ингридиентов или нет, я хз

                let ingr1 = document.createElement('div');
                ingr1.innerHTML += item.strMeasure1 + item.strIngredient1;
                
                    let ingr2 = document.createElement('div');
                    ingr2.innerHTML += item.strMeasure2 + item
                        .strIngredient2;

                        let ingr3 = document.createElement('div');
                        ingr3.innerHTML += item.strMeasure3 + item.strIngredient3;

                let instructions = document.createElement('div');
                instructions.innerHTML += item.strInstructions;

                let img = document.createElement('img');
                img.src = item.strDrinkThumb;
                img.style.width = '200px';
                img.style.height = '200px';
                list.append(img, title);

                // событие висит на созданном контейнере для картинки и названия напитка. в фетче апи по поиску коктейля по названию. а название по ссылке на title подхватывает. возможно такая штука натолкнет на мысль как повесить клик на букву. к букве в inner.html по идее можно обратиться через конструкцию `` и $

                list.onclick = function renderDrink() {


                    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' +
                            `${title.innerHTML}`)

                        .then(response => response.json())
                        .then(rendDrinks => {
                            console.log(rendDrinks)

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

                            let drinkRenderIngr1 = document.createElement('div');
                            drinkRenderIngr1.className = "renderIngr";
                            drinkRenderIngr1.innerHTML = `${ingr1.innerHTML}`;
                            drinkDetailsContainer.appendChild(drinkRenderIngr1);

                            let drinkRenderIngr2 = document.createElement('div');
                            drinkRenderIngr2.className = "renderIngr";
                            drinkRenderIngr2.innerHTML = `${ingr2.innerHTML}`;
                            drinkDetailsContainer.appendChild(drinkRenderIngr2);

                            let drinkRenderIngr3 = document.createElement('div');
                            drinkRenderIngr3.className = "renderIngr";
                            drinkRenderIngr3.innerHTML = `${ingr3.innerHTML}`;
                            drinkDetailsContainer.appendChild(drinkRenderIngr3);

                            let drinkRenderInstr = document.createElement('div');
                            drinkRenderInstr.className = "renderInstr";
                            drinkRenderInstr.innerHTML = `${instructions.innerHTML}`;
                            drinkDetailsContainer.appendChild(drinkRenderInstr);

                            let favButton = document.createElement('button');
                            favButton.className = "favButton";

                            // если дописать *добавить в коллекцию, кнопку в css надо подредактировать

                            favButton.innerHTML = "Добавить в мою коллекцию ♥";
                            drinkDetailsContainer.appendChild(favButton);
                            favButton.focus();

                            favButton.onclick = function saveToFav() {
                                let favDrinks = [];

                                //вывела на 0 элемент массива src

                                favDrinks.push(drinkRenderImg.src);
                             //   favDrinks.push(drinkRenderTitle.innerHTML);
                             // тут разделила ингридиенты из 1 переменной в 3, чтобы выведенный сохраненный массив напитка равнялся созданному
                                favDrinks.push(drinkRenderIngr1.innerHTML);
                                favDrinks.push(drinkRenderIngr2.innerHTML);
                                favDrinks.push(drinkRenderIngr3.innerHTML);
                                

                                localStorage.setItem(drinkRenderTitle.innerHTML, JSON.stringify(
                                    favDrinks));
                                    document.location.href = "/cocktail_book/src/favorites/index.html";




                            }

                        })

                        .catch(err => console.log(err));
                }
            }
        })
        .catch(err => console.log(err));
}