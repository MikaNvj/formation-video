import React from 'react';
import CardAbonnement from '../cardAbonnement';

const AllAbonnement = () => {
    return (
        <div className='Abonnement'>
            <CardAbonnement active={true} title='PREMIUM' price='100 000' />
            <CardAbonnement active={false} title='STANDART' price='50 000' />
            <CardAbonnement active={false} title='STANDART 2' price='25 000' />
            <CardAbonnement active={false} title='STANDART' price='30 000' />
        </div>
    )
}

export default AllAbonnement;