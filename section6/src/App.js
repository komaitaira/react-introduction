import { Router } from "./router/Router";
import "./index.css";
import { UserProvider } from "./providers/UserProvider";

export const App = () => {
    return (
        <UserProvider>
            <Router />
        </UserProvider>
    );
};
