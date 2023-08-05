import React from 'react';
import './topicItem.scss';
import { useRecoilState } from 'recoil';
import { videotoplay } from '../recoil/Atom';

interface topIc{
    name: string,
    fname: string,
    time: string,
    video: string,
}
const TopicItem = (props: topIc) => {
    let {name, fname, time, video} = props
    const [videoatom,setvideo] = useRecoilState(videotoplay)
    function play(){
        setvideo(video)
        
    }
    return(
        <div className='topicItem' onClick={play}>
            <div className="covertopic">

            </div>
            <div className="infotopic">
                <h4>{name}</h4>
                <p>{fname}</p>
            </div>
            <div className='timer'>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default TopicItem