import React from 'react';
import './parent.scss';
import Navbar from "../Navbar";
import Cardvideo from "../cardvideo";
import Videoplayer from '../videoplayer';
import Listevideo from '../listetopic';
import CardAbonnement from '../cardAbonnement';
import AllAbonnement from '../AllAbonnement';
import Cours from '../Cours';
import Allcours from '../allcours';
import { useRecoilState, useRecoilValue } from 'recoil';
import { navigationatom } from '../recoil/Atom';
import Profil from '../profil';
import Pagecours from '../pagecours';

const data = [
    { url: require('../assets/ts.webp'), name: 'Css', time: '02 h 30min' },
    { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },
    { url: require('../assets/ts.webp'), name: 'Typescript', time: '01 h 30min' },
    { url: require('../assets/js.webp'), name: 'Javascript', time: '01 h 30min' },
    { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },

];

const Parent = () => {
    const navigator = useRecoilValue(navigationatom)
    return (
        <div className="parentcontainer">
            <Navbar />
            <h2>{navigator === 1 && "Listes des derniers cours :"}{navigator === 2 && "Listes des abonnement :"} {navigator === 4 && "Parametre profil :"}</h2>
            {navigator === 1 && <Allcours />}
            { navigator === 3 && <Cours />}
            {navigator === 2 && <AllAbonnement />}
            {navigator === 4 && <Profil />}
            {navigator === 5 && <Pagecours />}
        </div>
    )
}

export default Parent;