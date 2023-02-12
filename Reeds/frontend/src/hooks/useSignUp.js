import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()


    const signUp = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('api/user/signUp', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        // console.log(json);
        if (!response.ok) {
            setIsLoading(false)
            setError(json.err)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }
    }
    return { signUp, isLoading, error }
}