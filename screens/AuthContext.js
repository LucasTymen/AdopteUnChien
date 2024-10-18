import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState ('');
    const [isLoading, setIsLoading] = useState(false);

    const login = () => {
        setToken('')
        setIsLoading(false)
    }

    const register = () => {
        setToken ('')
        setIsLoading(false)
        }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true)

            const userToken = await AsyncStorage.getItem('token')

            setToken(userToken)
            setIsLoading(false)
        } catch (error) {
            console.log('Error: ',error);
        }
    }
    
    useEffect(() => {
        // vérifie si le token est déjà éxistant
        if (token) {
            console.log('Token set, performing navigation...');
        }
    },[token])
    return(
        <AuthContext.Provider value={{ token, isLoading, login, register, setToken }}>
            {children}
        </AuthContext.Provider>
    )
    
}
export { AuthContext, AuthProvider }