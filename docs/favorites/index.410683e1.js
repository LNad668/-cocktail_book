let $d4ed8dca5017424a$var$parent = document.getElementById("drinkContainer");
for(var $d4ed8dca5017424a$var$i = 0; $d4ed8dca5017424a$var$i < localStorage.length; $d4ed8dca5017424a$var$i++){
    // set iteration key name
    var $d4ed8dca5017424a$var$key = localStorage.key($d4ed8dca5017424a$var$i);
    // use key name to retrieve the corresponding value
    // var value = localStorage.getItem(key); 
    const data = JSON.parse(localStorage.getItem($d4ed8dca5017424a$var$key));
    let res = document.createElement('p');
    let img = document.createElement('img');
    let list = document.createElement('div');
    list.className = "main__drinkContainer";
    list.id = "main__drinkContainer";
    $d4ed8dca5017424a$var$parent.append(list);
    let title = document.createElement('div');
    title.className = "main__titleDrink";
    title.id = "main__titleDrink";
    title.innerHTML = $d4ed8dca5017424a$var$key;
    res.innerHTML = data[1] + ', ' + data[2] + ', ' + data[3];
    img.src = data[0];
    img.style.width = '400px';
    img.style.height = '400px';
    list.append(img, title, res);
}


//# sourceMappingURL=index.410683e1.js.map
