import React from "react";
import './listetopic.scss'
import TopicItem from "../topiItem";
import LocalData from "../recoil/localstorage";
import { useRecoilValue } from "recoil";
import { indexvideo } from "../recoil/Atom";

const Listevideo = () => {
    // const data =[{
    //     name: "onetuto",
    //     fname: "Informatique",
    //     time: "22 : 35",

    // },{
    //     name: "twotuto",
    //     fname: "Bureautique",
    //     time: "18 : 35",
    // },{
    //     name: "onetuto",
    //     fname: "Informatique",
    //     time: "32 : 35",
    // },{
    //     name: "twotuto",
    //     fname: "Informatique",
    //     time: "20 : 35",
    // },{
    //     name: "onetuto",
    //     fname: "Informatique",
    //     time: "22 : 35",
    // },{ 
    //     name: "twotuto",
    //     fname: "Informatique",
    //     time: "22 : 35",
    // },{
    //     name: "twotuto",
    //     fname: "Informatique",
    //     time: "22 : 35", 
    // }]
    const videoindex = useRecoilValue(indexvideo)
    const data = LocalData.Formation[videoindex].item
    return (
        <div className="liste">
            <h4>Liste des Videos</h4>
            <hr></hr>
            <div className="listecours">
                {/* <p>Vides</p> */}
                {data.map((e: any) => <TopicItem key={e._id} name={e.name as string} fname={e.fname as string} time={e.time as string} video={e.video}/>)}
            </div>
        </div>
    )
}
export default Listevideo;