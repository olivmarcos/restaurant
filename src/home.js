const menu = () => {
  const ulElement = document.createElement("ul");

  const menu = document.createElement("li");
  const about = document.createElement("li");
  const contact = document.createElement("li");
  const button = document.createElement("button");

  ulElement.classList.add("menu");
  button.classList.add("btn");
  button.innerHTML = "ORDER ONLINE";

  menu.innerHTML = "MENU";
  about.innerHTML = "ABOUT US";
  contact.innerHTML = "CONTACT";

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

const mainSection = () => {
  const section = document.createElement("section");
  const header = document.createElement("header");

  section.classList.add("mainSection");
  header.classList.add("header");

  header.appendChild(logo());
  header.appendChild(menu());

  section.appendChild(header);

  return section;
};

export { mainSection };
