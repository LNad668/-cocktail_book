let parent = document.getElementById("drinkContainer");
for (let i = 0; i < localStorage.length; i++) {
  // set iteration key name
  let key = localStorage.key(i);
  // use key name to retrieve the corresponding value
  // var value = localStorage.getItem(key);

  const data = JSON.parse(localStorage.getItem(key));

  let res = document.createElement("p");
  let img = document.createElement("img");

  let list = document.createElement("div");
  list.className = "main__drinkContainer";
  list.id = "main__drinkContainer";
  parent.append(list);
  let title = document.createElement("div");
  title.className = "main__titleDrink";
  title.id = "main__titleDrink";
  title.innerHTML = key;
  res.innerHTML = data[1] + ", " + data[2] + ", " + data[3];
  img.src = data[0];
  img.style.width = "400px";
  img.style.height = "400px";
  list.append(img, title, res);
}
