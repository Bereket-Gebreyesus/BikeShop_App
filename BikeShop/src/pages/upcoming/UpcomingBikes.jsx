import React from 'react';
import { getAllBikes } from '../../data/bikes'; // Assuming getAllBikes function retrieves bike data
import BikeCard from '../bikes/BikeCard'; // Assuming BikeCard component for displaying bike details

const UpcomingBikes = () => {
  const bikes = getAllBikes();
  
  // Filter bikes that are upcoming
  const upcomingBikes = bikes.filter(bike => bike.upcoming === true);

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {upcomingBikes?.map((bike, index) => (
          <BikeCard key={index} bike={bike} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingBikes;