import React from 'react';
import BikeCard from './BikeCard';

const BikeList = ({ bikes }) => {
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
                {bikes?.map((bike, index) => (
                    <BikeCard key={index} bike={bike} />
                ))}
            </div>
        </div>
    );
}

export default BikeList;