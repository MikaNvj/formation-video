import React from 'react';
import Cardvideo from '../cardvideo';
import LocalData from '../recoil/localstorage';

// const data2 = [
//     { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },
//     { url: require('../assets/ts.webp'), name: 'Typescript', time: '02 h 30min' },
//     { url: require('../assets/js.webp'), name: 'Javascript', time: '01 h 30min' },
//     { url: require('../assets/ts.webp'), name: 'Typescript', time: '01 h 30min' },
//     { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },
//     { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },
//     { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },
//     { url: require('../assets/ts.webp'), name: 'Typescript', time: '01 h 30min' },
//     { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },
//     { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },
//     { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },
//     { url: require('../assets/ts.webp'), name: 'Typescript', time: '01 h 30min' },
//     { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },
//     { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },
//     { url: require('../assets/html.jpg'), name: 'HTml', time: '01 h 30min' },

// ];


const Allcours = () => {
    const data2 = LocalData.Formation;
    return(
        <>
        <div className='containercardvideo'>
            { data2 && data2.map((e: any,i: number) => <Cardvideo name={e.name} time={e.time} cover={ e.url} i={i}/>)}
            </div>
        </>
    )
}

export default Allcours;