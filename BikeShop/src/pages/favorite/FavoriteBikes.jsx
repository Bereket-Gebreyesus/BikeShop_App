import React, { useContext } from 'react';
import { BikeContext } from '../../context'; 
import { MdDeleteOutline } from "react-icons/md";

const FavoriteBikes = () => { 
    const { state, dispatch } = useContext(BikeContext); 

    function handleBookmarkToggle(event, bike) {
        event.stopPropagation();

        dispatch({
            type: "TOGGLE_BOOKMARK",
            payload: bike,
        });
    }

    return (
        <div className="shadow-md dark:bg-[#c7c8c9] text-black rounded-2xl overflow-hidden p-5 md:p-9">
            <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
               Your Favorite Bikes
            </h2>
            <div className="space-y-8 lg:space-y-12 max-h-[450px]  mb-10 lg:mb-14">
                {
                    state.bookmarkedBikes.length === 0 ?
                    (
                        <p className="text-xl overflow-hidden">No Bike selected as favorites yet!!!</p>
                    ) :
                    (
                        state.bookmarkedBikes.map((bike) => (
                            <div
                                key={bike.id}
                                className="grid grid-cols-[1fr_auto] gap-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        className="rounded overflow-hidden"
                                        src={bike.image}
                                        alt={bike.name}
                                        width={"80px"}
                                        height={"80px"}
                                    />
                                    <div>
                                        <h3 className="text-base md:text-xl font-bold">
                                            {bike.name}
                                        </h3>
                                        <p className="max-md:text-xs text-[#575A6E]">
                                            {bike.category}
                                        </p>
                                        <span className="max-md:text-xs">
                                            ${bike.price}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-4 items-center">
                                    <button
                                        onClick={(e) => handleBookmarkToggle(e, bike)}
                                        className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white">
                                        <MdDeleteOutline />
                                        <span className="max-md:hidden">
                                            Remove
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default FavoriteBikes;