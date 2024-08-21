//css
import './App.css';

//logo
import logo from './Componentes/Images/logo.png'

//rotas
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Firebase
import { onAuthStateChanged } from 'firebase/auth'; //mapeamento se a autenticacao do user foi feita com  sucesso.

//hook's
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//context
import { AuthProvider } from './context/AuthContext';

//Componentes
import Home from './Componentes/Home/Home'
import ProBuilds from './Componentes/ProBuild/ProBuilds'
import Login from './Componentes/Login/Login'
import Cadastro from './Componentes/Cadastro/Cadastro'
import PedraInscrita from './Componentes/ProBuild/ComponentesBuild/PedraInscrita/PedraInscrita'
import Talento from './Componentes/ProBuild/ComponentesBuild/Talento/Talento'
import NavBar from './Componentes/NavBar/NavBar'
import Footer from './Componentes/Footer/Footer';
import PerfilUser from './Componentes/Perfil/PerfilUser';


const App = () => {

    const [user, setUser] = useState(undefined)
    const {auth} = useAuthentication()

    const loadingUser = user === undefined; //login em carregamento.

    useEffect(() => { // funcao para mapear autenticacao do usuario.
      onAuthStateChanged(auth, (user) => {
        setUser(user)
      })
    },[auth])

    if(loadingUser){
      return <div className='loadingUser'><section> <img src={logo} alt="" /></section></div>
    }

    return (
      <div className="App">
        
        <AuthProvider value={{ user }}>
        <BrowserRouter>
        <NavBar/>
          <Routes>
                  <Route path='/' element={<Home/>} />

                  <Route path='/probuilds' element={<ProBuilds/>} />
                  {/*Autenticar paginas que o usuario logado nao pode entrar*/}
                  <Route path='/login' element={ !user ? <Login/> : <Navigate to="/"/>} />

                  <Route path='/cadastro' element={!user ? <Cadastro/> : <Navigate to="/"/>} />
                  
                  <Route path='/pedrainscrita' element={user ? <PedraInscrita/> : <Navigate to="/login"/>} />
                  
                  <Route path='/talento' element={user ? <Talento/> : <Navigate to="/login"/>} />
                  
                  <Route path='/perfiluser' element={user ? <PerfilUser/> : <Navigate to="/login"/>} />
                  
          </Routes>
          <Footer/>
        </BrowserRouter>
        </AuthProvider>
        
      </div>
    );
  }

export default App;
