import React from 'react';
import { getAllBikes } from '../../data/bikes'; 
import BikeCard from '../bikes/BikeCard'; 

const NewReleases = () => {
  const data = getAllBikes();
  const today = new Date(); 

  
  const oneDay = 24 * 60 * 60 * 1000; 
  const sevenDaysAgo = today.getTime() - (7 * oneDay); 

  const latestBikes = data.filter((bike) => {
    const bikeCreatedAt = new Date(bike.createdAt).getTime(); 
    return bikeCreatedAt >= sevenDaysAgo;
  });

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {latestBikes?.map((bike, index) => (
          <BikeCard key={index} bike={bike} />
        ))}
      </div>
    </div>
  );
}

export default NewReleases;