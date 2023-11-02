import { navMenuContainer } from "../elements";
import personIcon from "../../assets/account.svg";
import cartIcon from "../../assets/cart.svg";
import "./header.module.scss";


const navlinks = [
  { link: "about", path: "/about" },
  { link: "contact", path: "/contact" },
];

const headerActionItems = [
  { menu: "account", icon: personIcon, path: "/account" },
  { menu: "shopping", icon: cartIcon, path: "/account", cart: [] },
];

// prettier-ignore
export function renderHeaderUI() {
  const headerActionsTemplate = `
    <div class="action-menu">
      ${headerActionItems.map((item) => `
        <div class="action-item">
          <img class="action-icon" src="${item.icon}" alt="${item.menu}-icon" />
          <p class="action-name">${item.menu}</p>
        </div>`).join("")
    }
    </div>
  `;

  const menuLinksTemplate = `
    <ul class="nav-menu">
      ${navlinks.map((item) => `
        <li class="nav-item">
          <a class="nav-link" href="${item.path}">
            ${item.link}
          </a>
        </li>`).join("")
    }
    <ul>`

  // add templates to the DOM | research on efficient way to do this
  navMenuContainer.innerHTML += headerActionsTemplate;
  navMenuContainer.innerHTML += menuLinksTemplate;

}
