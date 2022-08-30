import React, { Fragment } from 'react';
import './App.css';
import './MediaLapTop.css'
import './MediaMobile.css'
import Home from './pages/Home';
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import RecSenha from './pages/RecSenha';
import TrocarSenha from './pages/TrocarSenha'
import Welcome from './pages/Welcome';
import Profile from './pages/Profile'
import Planos from './pages/Planos'
import NotFound from './pages/NotFound';
import { DataProvider } from './contexts/DataContext';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <DataProvider>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/registrar" element={<Registrar />}></Route>
        <Route exact path="/confirm/:confirmationCode" element={<Welcome />} />
        <Route exact path='/recuperar/:recoverPassword' element={<TrocarSenha />}></Route>
        <Route exact path="/recuperar_senha" element={<RecSenha />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/planos" element={<Planos />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </DataProvider>
  )
}

export default App;
