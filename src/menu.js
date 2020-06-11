import { load } from "./changePages";

// const miniBanner = () => {
//   const section = document.createElement("section");
//   section.classList.add("miniBanner");
//   section.innerHTML = "Duis congue lectus vitae porta vulputate";
//   return section
// };

const loadMenu = () => {
  load();
  // const content = document.querySelector("#content");
  // content.appendChild(miniBanner());
};

export { loadMenu };
