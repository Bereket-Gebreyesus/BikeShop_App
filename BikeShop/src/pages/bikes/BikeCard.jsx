import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { BikeContext, ThemeContext } from '../../context';
import BikeDetailsModal from './BikeDetailsModal'; 
import Rating from './Rating'; 
import { FaRegHeart } from 'react-icons/fa';

const BikeCard = ({ bike }) => { 
    const [showModal, setShowModal] = useState(false);
    const [selectedBike, setSelectedBike] = useState(null);
    const { state, dispatch } = useContext(BikeContext); 
    const { darkMode } = useContext(ThemeContext); 

    function handleAddToCart(event, bike) {
        event.stopPropagation();

        const found = state.cartData.find((item) => item.id === bike.id);

        if (!found) {
            dispatch({
                type: "ADD_TO_CART",
                payload: { ...bike },
            });
            toast.success(`Added ${bike?.name} to Cart!`, {
                position: "top-right"
            });
        } else {
            toast.error(`The bike ${bike?.name} has already been added to the cart`, {
                position: "top-right"
            });
        }
    }

    function handleBikeSelection(bike) {
        setSelectedBike(bike);
        setShowModal(true);
    }

    function handleModalClose() {
        setSelectedBike(null);
        setShowModal(false);
    }

    function handleBookmarkToggle(event, bike) {
        event.stopPropagation();

        dispatch({
            type: "TOGGLE_BOOKMARK",
            payload: bike,
        });
    }

    return (
        <>
            {showModal && (
                <BikeDetailsModal
                    bike={selectedBike}
                    onClose={handleModalClose}
                    onCartAdd={handleAddToCart}
                />
            )}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#">
                    <div className='relative'>
                        <button
                            className={`absolute top-2 right-2 p-1 ${
                                state.bookmarkedBikes.some((b) => b.id === bike.id) ? 'bg-primary' : ''
                            }`}
                            onClick={(e) => handleBookmarkToggle(e, bike)}
                        >
                            <FaRegHeart style={{ color: darkMode ? '#800020' : '#000000', zIndex: 100 }} />
                        </button>
                        <div className="h-64 w-full flex items-center justify-center">
                            <img
                                className="max-h-60 object-contain"
                                src={bike?.image}
                                alt={bike?.name}
                                onClick={() => handleBikeSelection(bike)}
                            />
                        </div>
                    </div>
                    <figcaption className="pt-4" onClick={() => handleBikeSelection(bike)}>
                        <h3 className="text-xl mb-1">{bike?.name}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{bike?.category}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={bike?.rating} />
                        </div>
                        <button
                            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            onClick={(e) => handleAddToCart(e, bike)}
                        >
                            <img src="./assets/tag.svg" alt="" />
                            <span>${bike?.price} | Add to Cart</span>
                        </button>
                    </figcaption>
                </a>
            </figure>
        </>
    );
}

export default BikeCard;