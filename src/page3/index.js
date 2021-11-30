let parent = document.getElementById("title");
for (var i = 0; i < localStorage.length; i++) {
    // set iteration key name
    var key = localStorage.key(i);
    // use key name to retrieve the corresponding value
   // var value = localStorage.getItem(key); 
   
    const data = JSON.parse(localStorage.getItem(key))
    const data1 = localStorage.getItem(key)
     let res = document.createElement('p');
     let img = document.createElement('img');
    res.innerHTML = 'Title: ' + key + '<br>' + 'Recipe: ' + data.join(', ');
    img.src = data1[1]
                 
       parent.append(res, img);
  }