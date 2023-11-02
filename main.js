import "./main.scss";
import { appContainer } from "./templates/elements";
import { renderMessage } from "./templates/wip/wip";
import { renderHeaderUI } from "./templates/header/header";



// render messsage
renderMessage("Coral", appContainer);
// render headerUI
renderHeaderUI();
