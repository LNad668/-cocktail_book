let parent = document.getElementById("title");
for (var i = 0; i < localStorage.length; i++) {
    // set iteration key name
    var key = localStorage.key(i);
    // use key name to retrieve the corresponding value
   // var value = localStorage.getItem(key); 
   
    const data = JSON.parse(localStorage.getItem(key))
 
     let title = document.createElement('h1');
     let res =document.createElement('p')
     let img = document.createElement('img');
  
     // подправила, чтобы src был 0 элементом массива, название равно ключу key

    // title.innerHTML = data[1];
    title.innerHTML = key;

    // тут вывела в строку через запятую остальные элементы массива - ингридиенты
    res.innerHTML = data[1] + ', ' + data[2] + ', ' + data[3];
    img.src = data[0];
    img.style.width = '300px';
    img.style.height = '300px';
                 
       parent.append(title, res, img);
  }