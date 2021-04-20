import Login from "./pages/Login.svelte";
import Dashboard from "./pages/Dashboard.svelte";

let app;

switch(document.location.search.substr(1)) {
	case "Login":
		app = new Login({ target: document.body });
		break;
	case "Dashboard":
		app = new Dashboard({ target: document.body });
		break;
	default:
		document.location.href = "?Login";
		break;
}

export default app;