import { BrowserRouter } from "react-router-dom"
import PublicRoute from "./publicRoute"
import PrivateRoute from "./privateRoute"
import { useAuth } from '../context'

const Routes = () => {
    const { user } = useAuth()
    const existUser = user ? true : false
    return (
        <BrowserRouter>
        {existUser ?
            <PrivateRoute />
            :
            <PublicRoute />
        }        
        </BrowserRouter>
    )
}
export default Routes