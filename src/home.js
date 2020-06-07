const menu = () => {
  const ulElement = document.createElement("ul");

  const menu = document.createElement("li");
  const about = document.createElement("li");
  const contact = document.createElement("li");
  const button = document.createElement("button");

  ulElement.classList.add("menu");
  button.classList.add("btn");
  button.innerHTML = "order online";

  menu.innerHTML = "menu";
  about.innerHTML = "about us";
  contact.innerHTML = "contact";

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
  const header = document.createElement("header");

  section.classList.add("mainSection");
  header.classList.add("header");

  header.appendChild(logo());
  header.appendChild(menu());

  section.appendChild(header);
  section.appendChild(brand());

  return section;
};

export { mainSection };
