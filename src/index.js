import { mainSection, itensSection } from './home';

const content = document.querySelector('#content');

content.appendChild(mainSection());
content.appendChild(itensSection());