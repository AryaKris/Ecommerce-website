import { navMenuContainer } from "../elements";
import personIcon from "../../assets/account.svg";
import cartIcon from "../../assets/cart.svg";
import logo from "../../assets/coral.svg";
import searchIcon from "../../assets/searchicon.svg";

import styles from "./header.module.scss";

const navlinks = [
  { link: "Jewelry & Accesories", path: "/Jewelry & Accesories" },
  { link: "Clothing & Shoes", path: "/Clothing & Shoes" },
  { link: "Home & Living", path: "/Home & Living" },
  { link: "Wedding & Party", path: "Wedding & Party" },
  { link: "Toys & Entertainment", path: "/Toys & Entertainment" },
  { link: "Art & Collectibles", path: "/Art & Collectibles" },
  { link: "Craft Supplies & Tools", path: "/Craft Supplies & Tools" },
];

const headerActionItems = [
  { menu: "Account", icon: personIcon, path: "/account" },
  { menu: "Shopping", icon: cartIcon, path: "/account", cart: [] },
];

// prettier-ignore
export function renderHeaderUI() {
  const headerActionsTemplate = `
  <div class="action-nav">
        <form>
          <div class="input-wrapper">
            <img src="${searchIcon}" alt="search icon" />
            <input type="search" />
          </div>
        </form>

        <div class="logo-wrapper">
          <img class="logo-icon" src="${logo}" alt="logo"/>
          <h2 class="logo-text">Coral</h2>
          <img class="logo-icon" src="${logo}" alt="logo"/>
        </div>

        <div class="actions-wrapper">
          ${headerActionItems
            .map(
              (item) => `
          <div class="action-item">
            <img
              class="action-icon"
              src="${item.icon}"
              alt="${item.menu}-icon"
            />
            <p class="action-name">${item.menu}</p>
          </div>
          `
            )
            .join("")}
        </div>
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
