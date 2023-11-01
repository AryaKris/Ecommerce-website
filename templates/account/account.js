import accounticon from "../assets/account.svg";
import "./account.module.scss";

export function renderAccount(text, accountContainer){
    accountContainer.innerHTML += `
    <div class="account-container">
    <img src =${accounticon} alt="account-icon"/>
    <h4 class ="text">${text}</h4>
    </div>
    `;

}
