import { createContext, useState, useContext } from 'react'
import api from '../services/api'

const AuthContex = createContext()

const AuthProvider = ({ children }) => {

    const [data, setData] = useState(() => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`
            return { token, user: JSON.parse(user) }
        }
        return {}
    })
    const singIn = async({email, password})=>{
        const response = await api.post('/sessions', {email, password})
        const { token, user } = response.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        api.defaults.headers.authorization = `Bearer ${token}`
        setData({token, user})
    }
    const singOut = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setData({})
    }
    return (
        <AuthContex.Provider value={{ user: data.user, singIn, singOut}}>
            {children}
        </AuthContex.Provider>
    )
}
const useAuth = () => {
    const context = useContext(AuthContex)
    if(context === undefined) {
        throw new Error("Sem Contexto")
    }
    return context
}
export { AuthProvider, useAuth }