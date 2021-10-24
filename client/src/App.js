import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./globalStyles";
import UserContext from "./Contexts/UserContext";
import SignIn from "./Components/Account/SignIn";

function App() {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user }}>
            <BrowserRouter>
                <GlobalStyle />
                <Switch>
                    <Route path="/" exact>
                        <SignIn setUser={setUser} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
