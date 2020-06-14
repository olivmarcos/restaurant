import { load } from "./reusable";

const imageSection = () => {
  const section = document.createElement("section");
  const aside = document.createElement("aside");
  const image = document.createElement("img");

  section.classList.add("about");
  aside.classList.add("aside");
  image.classList.add("asideImg");

  image.src =
    "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

  aside.appendChild(image);
  section.appendChild(aside);
  section.appendChild(textSection())
  return section;
};

const textSection = () => {
  const divText = document.createElement("div");
  const text = document.createElement("p");
  const title = document.createElement('h1');

  divText.classList.add("divText");

  title.innerHTML = "Vestibulum ante"
  text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit eros non ex ultricies, vel auctor quam tristique. Integer lobortis quam ut cursus dignissim. Aliquam erat volutpat. Etiam sed massa urna. Sed venenatis ac tortor laoreet dignissim. Morbi tristique venenatis cursus. Ut a posuere leo, in pulvinar metus. Praesent fermentum ligula et nisi pulvinar pulvinar. Donec rutrum mollis odio at iaculis. Quisque convallis feugiat nulla non accumsan. Fusce venenatis est in sapien vestibulum ornare. Etiam libero leo, rutrum vel pulvinar eget, aliquet ac tortor. Aliquam accumsan neque vel nibh consequat rhoncus. Aliquam vitae pellentesque ligula. Nam ut finibus magna. Vivamus varius ante vitae odio viverra, nec sollicitudin sem blandit. Etiam nec nisi risus. Sed vel enim lorem. Duis sollicitudin dolor ut mattis aliquet. Duis vitae aliquet tellus, et consequat tellus. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

  divText.appendChild(title);
  divText.appendChild(text);

  return divText;
};

const loadAbout = () => {
  load();
  const content = document.querySelector("#content");
  content.appendChild(imageSection());
};

export { loadAbout };
