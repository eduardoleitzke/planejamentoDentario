import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../config.js"
import Chamados from "../components/Chamados.js";
import Plano from "../components/Plano.js"
import tooth from '../assets/images/tooth.svg'
function Profile(props) {
    const [showHidePlanejamento, setShowHidePlanejamento] = useState(false)
    const navigate = useNavigate() 
    const [plano_message, setPlano_message] = useState('Nenhum')
    useEffect(() => {
        if (!localStorage.getItem('loggedUser')) {
            navigate('/login')
            return
        }
        else {
            axiosInstance.post('/planos', { plano: (JSON.parse(localStorage.getItem('loggedUser'))).planos, email: (JSON.parse(localStorage.getItem('loggedUser'))).email })
                .then(data => { setPlano_message(data.data.message) })
                .catch(err => console.log(err))
        }
    }, [])
    function Logout() {
        localStorage.clear();
        navigate('/login')
    }
                
 
    return (
        <div className="profile">
            <nav className="menuLateral">
                <div>
                    <img src={tooth} alt="" />
                    <p>{plano_message}</p>
                </div>
                <ul>
                    <li>Perfil</li>
                    <li onClick={()=>showHidePlanejamento ? setShowHidePlanejamento(false) : setShowHidePlanejamento(true)}>Planejamentos</li>
                    <li>Plano</li>
                </ul>

                <button onClick={() => Logout()}>Logout</button>
            </nav>
            <Chamados show={showHidePlanejamento}></Chamados>
            <Plano></Plano>
        </div>
    )
}

export default Profile