import React, { ChangeEvent, useState } from 'react';
import './signup.scss';
import { Sign } from "../recoil/Atom";
import { useRecoilState } from 'recoil'
import LocalData from '../recoil/localstorage';

const Signup = () => {
    const [signup, setsign] = useRecoilState(Sign);
    const [inputvalue, setinputvalue] = useState([]);

    function onchange(e: ChangeEvent<HTMLInputElement>) {
        const val = (e.target as HTMLInputElement).value;
        const name = (e.target as HTMLInputElement).name;
        setinputvalue((prev) => ({ ...prev, [name]: val }))
    }
    const Datatolocal = [
        {
            url: require('../assets/html.jpg'),
            name: 'HTml',
            time: '01 h 30min',
            item: [{
                name: "Html one",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "html two",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "html three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            },
            {
                name: "html four",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            }]
        },
        {
            url: require('../assets/css.webp'),
            name: 'CSS',
            time: '01 h 30min',
            item: [{
                name: "Javascript one",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "Javascript two",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript four",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            }]
        },
        {
            url: require('../assets/python.jpg'),
            name: 'Python',
            time: '01 h 30min',
            item: [{
                name: "Javascript one",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "Javascript two",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript four",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            }]
        },
        {
            url: require('../assets/ts.webp'),
            name: 'Typescript',
            time: '01 h 30min',
            item: [{
                name: "Javascript one",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            },
            {
                name: "Javascript two",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },{
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },{
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript four",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            }]
        },
        {
            url: require('../assets/js.webp'),
            name: 'Javascript',
            time: '01 h 30min',
            item: [{
                name: "Javascript one",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            },
            {
                name: "Javascript two",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript four",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            }]
        },
        {
            url: require('../assets/js.webp'),
            name: 'Javascript',
            time: '01 h 30min',
            item: [{
                name: "Javascript one",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            },
            {
                name: "Javascript two",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript three",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/Download.mp4'),
            },
            {
                name: "javascript four",
                fname: "Informatique",
                time: "22 : 35",
                video: require('../assets/video.mp4'),
            }]
        },

    ]
    function setlocaldata() {
        LocalData.Formation = Datatolocal;
        setsign(false)
    }
    return (
        <div className="overlay">
            <div className="containersign">
                <h2>Creez votre Compte</h2>
                <div className="input">
                    <input type="text" name='userName' onChange={onchange} placeholder='Votre Nom' />
                </div>
                <div className="input">
                    <input type="text" name='userPhone' onChange={onchange} placeholder='Votre Prenom' />
                </div>
                <div className="input">
                    <input type="text" name='userCredit' onChange={onchange} placeholder='Votre Telephone' />
                </div>
                <button onClick={setlocaldata}>Sauvegarder</button>
            </div>

        </div>
    )
}

export default Signup;