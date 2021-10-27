import { useHistory } from "react-router-dom"
import { useAuth } from "../../context"


const Dashboard = ()=>{
    const history = useHistory()
    const { singOut } = useAuth()

    const handleLogout = () => {
        singOut()
        history.replace('/')
    }
    return (
        <>
            <h1>Painel</h1>
            <button onClick={()=> handleLogout()}>Sair</button>
        </>
    )
}

export default Dashboard