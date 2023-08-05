import React from 'react';
import Cardvideo from '../cardvideo';
import LocalData from '../recoil/localstorage';
import './pagecours.scss';




const Pagecours = () => {
    const data2 = LocalData.Formation;
    const data = data2.slice(0, 5)

    return (
        <>
            <div className='containercoursvideo'>
                <div className='cardvideomap'>

                    {data && data.map((e: any, i: number) => <Cardvideo name={e.name} time={e.time} cover={e.url} i={i} />)}
                </div>
                <p>Cours le plus de vues</p>
                <div className='cardvideomap'>

                    {data && data.map((e: any, i: number) => <Cardvideo name={e.name} time={e.time} cover={e.url} i={i} />)}
                </div>
            </div>
        </>
    )
}

export default Pagecours;