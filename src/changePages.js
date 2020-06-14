import { loadHome, header } from "./home";
import { loadAbout } from "./about";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

const getPages = () => {
  const menu = document.querySelectorAll("ul li");
  menu.forEach((li) => {
    li.addEventListener("click", () => {
      let page = li.getAttribute("value");
      chanchePage(page);
    });
  });
};

const chanchePage = (page) => {
  if (page == 0) {
    loadHome();
  } else if (page == 1) {
    loadMenu();
  } else if (page == 2) {
    loadAbout();
  } else {
    loadContact();
  }
};

const miniBanner = () => {
  const section = document.createElement("section");
  section.classList.add("miniBanner");
  section.innerHTML =
    "Pellentesque auctor lacinia sagittis. Nam lorem lorem, faucibus ut metus at, vehicula";

  const content = document.querySelector("#content");
  content.appendChild(section);
};

const footer = () => {
  const footer = document.createElement('footer');

  footer.classList.add('footer');
  return footer;
}

const load = () => {
  const content = document.querySelector("#content");
  const div = document.createElement("div");

  div.classList.add("divHeader");
  div.appendChild(header());

  content.innerHTML = "";
  content.appendChild(div);
  getPages();
  miniBanner();
};

export { getPages, load };
