import React from "react";
import './cardAbonnement.scss';

interface propscard{
    active: boolean,
    title: string,
    price: string,
    
}
const CardAbonnement = (props: propscard ) => {
    return(
        <div className="cardAbonnement">
            <div>
            <h1>{props.title}</h1>
            <h2>{props.price}  Ar</h2>
            <p>/ mois</p>
            </div>
            <div className="informationabonnement">
                <p>Formation tsara indrindra hoanao</p>
                <p>Formation mora hahaizanao </p>
                <p>Formation tsara indrindra hoanao</p>
                <p>Ahazahoanao cours 5 isambolana</p>
                <p>Formation tsara indrindra hoanao</p>
                {/* <p>Formation tsara indrindra hoanao</p> */}
            </div>
            <div className="btnabonnement">
                <button className={props.active ? 'buttonactive' : 'button'}>
                    s'abonner
                </button>
            </div>
        </div>
    )
}

export default CardAbonnement;