import React, {useEffect} from "react";
import './videoplayer.scss';
import vd from '../assets/Download.mp4';
import { useRecoilValue } from "recoil";
import { videotoplay } from "../recoil/Atom";


const Videoplayer = () => {
    const srcvideo = useRecoilValue(videotoplay)
    
   
    useEffect(() => {
        console.log(srcvideo)
    },[srcvideo])
    return(
        <div className="video">
            <video loop={true} autoPlay id="vd" controls muted={false} controlsList="nodownload" key={srcvideo}>
                <source src={srcvideo} type="video/mp4" />
            </video>
        
        </div>
    )
}
export default Videoplayer;