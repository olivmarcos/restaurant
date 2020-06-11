import { getPages } from "./changePages";

const menu = () => {
  const ulElement = document.createElement("ul");

  const home = document.createElement("li");
  const menu = document.createElement("li");
  const about = document.createElement("li");
  const contact = document.createElement("li");
  const button = document.createElement("button");

  ulElement.classList.add("menu");
  button.classList.add("btn");
  button.innerHTML = "order online";

  home.innerHTML = "home";
  menu.innerHTML = "menu";
  about.innerHTML = "about us";
  contact.innerHTML = "contact";

  home.setAttribute("value", 0);
  menu.setAttribute("value", 1);
  about.setAttribute("value", 2);
  contact.setAttribute("value", 3);

  ulElement.appendChild(home);
  ulElement.appendChild(menu);
  ulElement.appendChild(about);
  ulElement.appendChild(contact);
  ulElement.appendChild(button);

  return ulElement;
};

const logo = () => {
  const logo = document.createElement("div");
  logo.classList.add("logo");

  const img = document.createElement("img");
  img.src = "/src/assets/img/pngwing.com.png";

  logo.appendChild(img);

  return logo;
};

const brand = () => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  div.classList.add("brand");
  h1.innerHTML = "Morbi rhoncu";
  p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  div.appendChild(h1);
  div.appendChild(p);

  return div;
};

const mainSection = () => {
  const section = document.createElement("section");
  const headerEl = header();

  section.classList.add("mainSection");

  section.appendChild(headerEl);
  section.appendChild(brand());

  return section;
};

const header = () => {
  const headerEl = document.createElement("header");

  headerEl.classList.add("header");

  headerEl.appendChild(logo());
  headerEl.appendChild(menu());

  return headerEl;
};

const itensSection = () => {
  const section = document.createElement("section");

  const div = document.createElement("div");
  const burguerImage = document.createElement("img");
  const friesImage = document.createElement("img");
  const sodaImage = document.createElement("img");
  const h1 = document.createElement("h1");

  h1.innerHTML = "order now";

  section.classList.add("itensSection");
  burguerImage.classList.add("burguer");
  sodaImage.classList.add("soda");

  burguerImage.src = "/src/assets/img/hamburger.jpg";
  friesImage.src = "/src/assets/img/fires.png";
  sodaImage.src = "/src/assets/img/soda.png";

  div.appendChild(h1);
  div.appendChild(burguerImage);
  div.appendChild(friesImage);
  div.appendChild(sodaImage);

  section.appendChild(div);

  return section;
};

const loadHome = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  content.appendChild(mainSection());
  content.appendChild(itensSection());
  getPages();
};

export { loadHome, header };
