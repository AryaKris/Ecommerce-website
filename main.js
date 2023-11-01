import "./main.scss";
import { appContainer } from "./templates/elements";
import { renderMessage } from "./templates/wip/wip";
import { renderAccount } from "./templates/account/account";
import { coralContainer } from "./templates/elements";

// render messsage
renderMessage("Coral", appContainer);
renderAccount("Account", coralContainer);
