import { load } from "./changePages";
import { foods } from "./assets/js/foods";

const foodSection = () => {
  const section = document.createElement("section");
  const divFoods = document.createElement("div");

  section.classList.add("foodSection");
  divFoods.classList.add("foods");

  foods.forEach((food) => {
    const divFood = document.createElement("div");
    const name = document.createElement("h4");
    const price = document.createElement("span");
    const list = document.createElement("ul");

    divFood.classList.add('food');
    name.innerHTML = food.Name;
    price.innerHTML = food.Price;

    food.Ingredients.forEach((ingrendient) => {
      const itemList = document.createElement("li");
      itemList.innerHTML = ingrendient;

      list.appendChild(itemList);
    });

    divFood.appendChild(name);
    divFood.appendChild(price);
    divFood.appendChild(list);

    divFoods.appendChild(divFood);
  });

  section.appendChild(divFoods);
  
  return section;
};

const loadMenu = () => {
  load();
  const content = document.querySelector('#content');
  content.appendChild(foodSection());
};

export { loadMenu };
