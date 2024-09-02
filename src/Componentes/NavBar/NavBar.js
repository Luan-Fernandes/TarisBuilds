//css
import './NavBar.css'

//rotas
import { useNavigate } from 'react-router-dom'

//imagens
import logo from '../Images/logo.png'

//hook's
import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'
import { useEffect, useState } from 'react'

//img navbar hmb
import iconNavBar from "../Images/machadoNavBar.png"


const NavBar = () => {

    const { user } = useAuthValue();
    const nome =  user ? user.displayName : undefined

    const history = useNavigate()

    const { logout } = useAuthentication()
    const [navbar, setNavBar] = useState(false)
    const getInitialStep = () => {
        const savedStep = sessionStorage.getItem('step');
        return savedStep !== null ? JSON.parse(savedStep): 0;
      };
    const [step, setStep] = useState(getInitialStep)

    useEffect(() => {
        sessionStorage.setItem('step', JSON.stringify(step));
      }, [step]);
      
    console.log(history)
    return (
        <div>
            <nav className='container-pai'>
                <figure> <img onClick={() => [history("/"),setStep(1)]} src={logo} alt="imagem logo" /> </figure>
                <ul>
                    <li onClick={() => [history("/"),setStep(1)]}>
                        <a className={step === 1 ? "liActivo" : null}> Home </a>
                    </li>

                    <li onClick={() => [history("/probuilds"),setStep(2)]}>
                        <a className={step === 2 ? "liActivo" : null}> ProBuilds </a>
                    </li>

                    {user && (
                        <>
                        <li onClick={() => [history("/pedrainscrita"),setStep(3)]}>
                            <a className={step === 3 ? "liActivo" : null}>Pedra Inscrita</a>
                        </li>

                        <li onClick={() => [history("/talento"),setStep(4)]}>
                            <a className={step === 4 ? "liActivo" : null}>Talento</a>
                        </li>
                        <div className={!navbar ? "perfilActivo" : "perfil"}>
                        
                        <figure onClick={() => [history("/perfiluser"),setNavBar(false)]} className='fotoPerfil'></figure>
                        <p onClick={() => [history("/perfiluser"),setNavBar(false)]} className='p'>{nome}</p>
                        <li>
                        <button className='buttonPerfil' onClick={() => [logout(),setNavBar(false)]}>Sair</button>
                    </li>
                    </div>
                    <div className='iconnav' onClick={() => setNavBar(!navbar)}>
                        <div className={navbar ? "container-1Active" : "container-1"}></div>
                        <div className={navbar ? "container-2Active" : "container-2"}></div>
                        <div className={navbar ? "container-3Active" : "container-3"}></div>
                    </div>
                        </>

                    )}
                </ul>

                {!user && (
                    <div className='loginecad'>
                        <a onClick={() => [history("/login"),setStep(5)]} className={step === 5 ? "loginActivo" : 'login'}> Login </a>
                        <a onClick={() => [history("/cadastro"),setStep(6)]} className={step ===  6 ? "registroActivo" : 'registro'}> Registre-se</a>
                    </div>
                )} 
                
            </nav>
        </div>
    )
}

export default NavBar
