import { load } from "./reusable";
import { locations } from "./assets/js/locations";

const title = (title) => {
  const divTitle = document.createElement("h1");

  divTitle.classList.add("title");

  divTitle.innerHTML = title;

  return divTitle;
};

const divLocations = () => {
  const container = document.createElement("div");

  container.classList.add("container");

  locations.forEach((item) => {
    const divLocation = document.createElement("div");
    const name = document.createElement("h3");
    const address = document.createElement("p");
    const phone = document.createElement("p");

    name.innerHTML = item.Location;
    address.innerHTML = item.Address;
    phone.innerHTML = item.Phone;

    divLocation.appendChild(name);
    divLocation.appendChild(address);
    divLocation.appendChild(phone);

    container.appendChild(divLocation);
  });

  return container;
};

const createLocationSection = (text) => {
  const section = document.createElement("section");
  section.classList.add("location");

  section.appendChild(title(text));
  section.appendChild(divLocations());

  return section;
};

const socialMedia = () => {
  const ul = document.createElement("ul");
  const twitter = document.createElement("li");
  const instagram = document.createElement("li");
  const facebook = document.createElement("li");

  const twitterIcon = document.createElement("i");
  const instagramIcon = document.createElement("i");
  const facebookIcon = document.createElement("i");

  twitterIcon.classList.add("fab");
  twitterIcon.classList.add("fa-twitter");

  instagramIcon.classList.add("fab");
  instagramIcon.classList.add("fa-instagram");

  facebookIcon.classList.add("fab");
  facebookIcon.classList.add("fa-facebook");

  twitter.appendChild(twitterIcon);
  instagram.appendChild(instagramIcon);
  facebook.appendChild(facebookIcon);

  ul.appendChild(twitter);
  ul.appendChild(instagram);
  ul.appendChild(facebook);

  return ul;
};

const createSocialMediaSection = (text) => {
  const section = document.createElement("section");
  section.classList.add("socialMedia");

  section.appendChild(title(text));
  section.appendChild(socialMedia());

  return section;
};

const wrap = () => {
  const contact = document.createElement("section");
  contact.classList.add("contact");
  contact.appendChild(createLocationSection("LOCATIONS"));
  contact.appendChild(createSocialMediaSection("SOCIAL MEDIA"));

  return contact;
};

const addToContent = () => {
  const content = document.querySelector("#content");
  content.appendChild(wrap());
};

const loadContact = () => {
  load();
  addToContent();
};

export { loadContact };
