import React from 'react';
import { getAllBikes } from '../../data/bikes'; 
import BikeCard from '../bikes/BikeCard'; 

const TrendingBikes = () => {
  const bikes = getAllBikes();
  
  const trendingBikes = bikes.sort((a, b) => b.rating - a.rating);

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {trendingBikes?.map((bike, index) => (
          <BikeCard key={index} bike={bike} />
        ))}
      </div>
    </div>
  );
}

export default TrendingBikes;