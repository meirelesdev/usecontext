import { Switch, Route, Redirect } from "react-router"
import Dashboard from "../pages/dashboard"

const PublicRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard}>
                <Redirect to="/dashboard" />
            </Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
        </Switch>
    )
}

export default PublicRoute