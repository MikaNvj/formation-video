import React from "react";
import './cardvideo.scss'
import { useRecoilState, useRecoilValue } from "recoil";
import { indexvideo, navigationatom } from "../recoil/Atom";
interface propscardvideo{
    name: string,
    time: string,
    cover: string,
    i: number
}

  
const Cardvideo = (props: propscardvideo) =>{
    let covers: React.CSSProperties = {
        backgroundImage : `url(${props.cover})`,
        backgroundSize: 'cover',
    };
    const [navigator, setnavigator] = useRecoilState(navigationatom)
    const [videoindex,setvideoindex] = useRecoilState(indexvideo)
    function settervideo(){
        setnavigator(3);
        setvideoindex(props.i)

    }
    return(
        <div className="cardVideo" onClick={() => settervideo()}>
            <div className="cover" style={covers}>
            </div>
            <div className="infoplay">
                <div className="infotuto">
                    <h3>{props.name}</h3>
                    <p>{props.time}</p>
                </div>
                <div className="toplay" onClick={() => settervideo()}>

                </div>
            </div>
        </div>
    )
}

export default Cardvideo;