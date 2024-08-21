import { db } from "../firebase/config";

import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from "react";

export  const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup
    //deal with memory leak
    const [ cancelled, setCancelled] = useState(false)
    
    const auth = getAuth()

    function checkIfCancelled(){
        if(cancelled){
            return
        }
    }
//cadastro
    const createUser = async (data) => {
        checkIfCancelled()

        setLoading(true)
        setError(null)

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName : data.displayName
            })

            setLoading(false)

            return user
        }
        catch(error){
            
        console.log(error.message)
        console.log(typeof error.message)

        let systemErrorMessage
        
        if(error.message.includes("password")){
            systemErrorMessage  = "A senha precisa ter pelomenos 6 caracteres."
        }
        else if(error.message.includes("email")){
            systemErrorMessage = "Email inválido ou já cadastrado."
        }
        else{
            systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
        }
        setLoading(false)
        setError(systemErrorMessage)
    }
  
}

//logout

const logout = () => {

    checkIfCancelled()

    signOut(auth)
}

//login

const login = async(data) => {
    checkIfCancelled()
    setLoading(true)
    setError(false)

    try{
        await signInWithEmailAndPassword(auth, data.email, data.password)
        setLoading(false)
    }
    catch(error){

        let systemErrorMessage

        if(error.message.includes("invalid-credential")){
            systemErrorMessage = "Email ou Senha Incorreta."
        }else{
            systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
        }
        setError(systemErrorMessage)
        setLoading(false)
        console.log(error.message)
    }
}

useEffect(() => {
    return () => setCancelled(true)
},[])

return{
    auth,
    createUser,
    error,
    loading,
    logout,
    login
}
}