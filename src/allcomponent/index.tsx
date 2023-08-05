import React from 'react';
import Signup from '../SignUp';
import Navigationbar from '../Navigationbar';
import Abonnement from '../Abonnement';
import Parent from '../parent';
import { RecoilRoot, useRecoilValue } from 'recoil'
import { Sign } from '../recoil/Atom';
import './allcomponents.scss'


const Allcomponents = () => {
    const signup = useRecoilValue(Sign)
    return (
        <div className='allcomponents'>
            {signup && <Signup />}
            <div className='app'>
                <div className='containerleft'>
                    <Navigationbar />
                    <Abonnement />
                </div>
                <Parent />
            </div>

        </div>
    )
}
export default Allcomponents;