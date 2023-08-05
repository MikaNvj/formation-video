import React from "react";
import './navigationbar.scss';
import { useRecoilState } from "recoil";
import { navigationatom } from "../recoil/Atom";

const Navigationbar = () =>{
    const [navigator, setnavigator] = useRecoilState(navigationatom)
    return(
        <div className="container">
            <h2>FiharySoft</h2>
            <div className="btn-accueil" onClick={() => setnavigator(1)}>
                <p>Accueil</p>
            </div>
            <div className="btn-cours" onClick={() => setnavigator(5)}>
                <p>Cours</p>
            </div>
            <div className="btn-abonnement" onClick={() => setnavigator(2)}>
                <p>Abonnement</p>
            </div>
        </div>
    )
}
export default Navigationbar;