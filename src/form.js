document.addEventListener("submit", (event) => {
    event.preventDefault();
 });

 let parent = document.getElementById("main");

 document.getElementById("create").onclick = function createDrink() {

    let titleForm = document.getElementById("title");
    let selectAlkoForm = document.getElementById("alko");
    let selectNonAlkoForm = document.getElementById("nonAlko");
    let extraIngrForm = document.getElementById("extraIngr");
    let instructionsForm = document.getElementById("instructions");

    document.getElementById("title-error").innerHTML = "";
    document.getElementById("alko-error").innerHTML = "";
    document.getElementById("nonalko-error").innerHTML = "";
    document.getElementById("extra-error").innerHTML = "";
    document.getElementById("instructions-error").innerHTML = "";

   
    
    let errorsArr = [];
    let createdDrinks = ["https://i.ibb.co/q7L9Jb8/4f75c983c542e08a403ca9bfbd498710.jpg"];
    

    if (titleForm.value == "") {
       document.getElementById("title-error").innerHTML += "Oops, something went wrong! Please fill in this field";
       errorsArr.push(document.getElementById("title-error").innerHTML);
    } 
    //else {
    //   createdDrinks.push(titleForm.value);
   // }
    if (selectAlkoForm.value == "") {
       document.getElementById("alko-error").innerHTML +=
          "Oops, something went wrong!<br> Please fill in this field";
       errorsArr.push(document.getElementById("alko-error").innerHTML);
    } else {
       createdDrinks.push(selectAlkoForm.value);
    }
    if (selectNonAlkoForm.value == "") {
       document.getElementById("nonalko-error").innerHTML +=
          "Oops, something went wrong! <br> Please fill in this field";
       errorsArr.push(document.getElementById("nonalko-error").innerHTML);
    } else {
       createdDrinks.push(selectNonAlkoForm.value);
    }
    if (extraIngrForm.value == "") {
       document.getElementById("extra-error").innerHTML +=
          "Oops, something went wrong! <br> Please fill in this field";
       errorsArr.push(document.getElementById("extra-error").innerHTML);
    } else {
       createdDrinks.push(extraIngrForm.value);
    }
    if (instructionsForm.value == "") {
       document.getElementById("instructions-error").innerHTML +=
          "Oops, something went wrong! <br> Please fill in this field";
       errorsArr.push(document.getElementById("instructions-error").innerHTML);
    } else {
       createdDrinks.push(instructionsForm.value);
    }
    console.log(errorsArr);

    if (errorsArr.length == 0) {

        // Садаф, посмотри что тут в ключ берется. с таким значением ключа мне дает много напитков добавить в хранилище. Проверь у себя, видишь ли ты их. Либо попробуй в getItem через `` и ${} key их взять

       localStorage.setItem(titleForm.value, JSON.stringify(createdDrinks)); // ключ я ставлю, который стоит в избранных 

       parent.innerHTML = "";
       main.style.backgroundColor = "#f69a73";
       
       let finishBlock = document.createElement('div');
       finishBlock.className = "main__finishblock";
       parent.appendChild(finishBlock);

       let imgFinal = document.createElement('img');
       imgFinal.src = "https://media.giphy.com/media/sXcFmzvXenHEpivJZc/giphy.gif";
       finishBlock.appendChild(imgFinal);
       imgFinal.focus();

       let buttonToCollection = document.createElement('button');
       buttonToCollection.type = 'text';
       buttonToCollection.className = "button_fav";
       buttonToCollection.innerHTML = "My collection";
       buttonToCollection.onclick = function() {
         window.location.href = '/cocktail_book/src/favorites/index.html';
     };

       finishBlock.appendChild(buttonToCollection);

       let buttonToMain = document.createElement('button');
       buttonToMain.type = 'text';
       buttonToMain.className = "button_main";
       buttonToMain.innerHTML = "Back to main";
       buttonToMain.onclick = function() {
         window.location.href = '/cocktail_book/src/index.html';
     };
             
       finishBlock.appendChild(buttonToMain);
    }

    console.log(createdDrinks);

 

 }