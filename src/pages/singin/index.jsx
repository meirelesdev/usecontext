import { useAuth } from "../../context"


const SingIn = ()=>{
    const { singIn } = useAuth()
    return (
        <>
            <h1>Login</h1>
            <button onClick={()=> singIn({email:"daniel@daniel.com",password:"12345678" })}>Login</button>
        </>
    )
}

export default SingIn