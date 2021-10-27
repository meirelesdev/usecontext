import { Switch, Route } from "react-router"
import SingIn from "../pages/singin"

const PublicRoute = ()=>{
    return (
        <Switch>
            <Route exact path="/" component={SingIn} />
            <Route path="*" component={()=><h1>Pagina não encontrada.</h1>}/>
        </Switch>
    )
}

export default PublicRoute