import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigationbar from './Navigationbar';
import Abonnement from './Abonnement';
import Parent from './parent';
import Signup from './SignUp';
import { Sign } from './recoil/Atom';
import { RecoilRoot, useRecoilValue } from 'recoil'
import Allcomponents from './allcomponent';

function App() {

  return (
    <RecoilRoot>
      <div className="App">
        <Allcomponents />
      </div>
    </RecoilRoot>
  );
}

export default App;
