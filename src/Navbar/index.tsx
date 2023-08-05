import React from "react";
import { useRecoilState } from 'recoil'
import './navbar.scss';
import { Sign, navigationatom, users } from "../recoil/Atom";

const Navbar = () => {
    const [signup, setsign] = useRecoilState(Sign);
    const [usersinfo, setusersinfo] = useRecoilState(users);
    const [nagigator, setnavigator] = useRecoilState(navigationatom);
    function info(){
        setnavigator(4);
        setusersinfo(!usersinfo)
    }
    return (
        <>
            <div className="navbar">
                <div className="left">
                    <div className="iconleft"></div>
                    <div className="iconright"></div>
                </div>
                <div className="center">
                    <div className="search">
                        <input type="text" placeholder=" recherchez votre cours . . ." />
                    </div>
                </div>
                <div className="right">
                    <div className="notif"></div>
                    {/* <button className="createcount" onClick={() =>setsign(true)}>Creez un compte</button> */}
                    <div className="avatar" onClick={() => setusersinfo(!usersinfo)}></div>
                </div>
            </div>
            {usersinfo && <div className="infouser">
                <div className="iconprofil" onClick={() => info()}><p>Profil</p></div>
                <div className="iconsetting"><p>Parametre</p></div>
                <div className="icondeconnexion"><p>Deconnexion</p></div>
            </div>}
        </>
    )
}
export default Navbar;