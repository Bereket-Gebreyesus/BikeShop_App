import React, { useState, useEffect, useContext } from 'react';
import BikeList from './bikes/BikeList';
import { BikeContext } from '../context/index.js';
import { getBikesByPage, getTotalBikeCount } from '../data/bikes'; 
import SearchBar from '../components/Search'; 
import { ThemeContext } from '../context'; 

const Home = () => {
    const { state } = useContext(BikeContext);
    const { darkMode } = useContext(ThemeContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [bikes, setBikes] = useState([]);
    const [priceFilter, setPriceFilter] = useState([0, 3000]); 
    const [categoryFilter, setCategoryFilter] = useState('');
    const [filterType, setFilterType] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [bikesPerPage] = useState(8); 

    useEffect(() => {
        const fetchData = () => {
            const data = getBikesByPage(currentPage, bikesPerPage);
            setBikes(data);
        };
        fetchData();
    }, [currentPage, bikesPerPage]);

    const totalBikes = getTotalBikeCount();
    const totalPages = Math.ceil(totalBikes / bikesPerPage);

    const filteredBikes = bikes.filter(bike =>
        bike.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        bike.price <= priceFilter[1] && 
        (categoryFilter === '' || bike.category.toLowerCase() === categoryFilter.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePriceFilterChange = (event) => {
        setPriceFilter([priceFilter[0], parseInt(event.target.value)]); 
    };

    const handleCategoryFilterChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    const handleFilterTypeChange = (event) => {
        setFilterType(event.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getSliderBackground = () => {
        const percentage = (priceFilter[1] / 3000) * 100;
        return `linear-gradient(to right, #00D991 ${percentage}%, ${darkMode ? '#333' : '#ccc'} ${percentage}%)`;
    };

    return (
        <div className={`content ${darkMode ? 'bg-black text-white' : ''}`}>
            <div className="flex items-center justify-between mb-5 ">
                <div className="flex items-center ">
                    <SearchBar 
                        searchQuery={searchTerm} 
                        setSearchQuery={setSearchTerm} 
                        darkMode={darkMode} 
                        className={`h-12 px-3 rounded-md border border-gray-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`} 
                    />
                    <div className="ml-3 relative">
                        <select
                            value={filterType}
                            onChange={handleFilterTypeChange}
                            className={`h-10 border border-gray-300 px-2 py-1 rounded-md ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
                            style={{ width: '160px' }} 
                        >
                            <option value="">Filter By</option>
                            <option value="price">Price</option>
                            <option value="category">Category</option>
                        </select>
                        {filterType === 'price' && (
                            <div className={`absolute top-full left-0 mt-1 w-full border border-gray-300 shadow-md rounded-md py-2 ${darkMode ? 'bg-black text-white' : 'bg-white'}`}>
                                <div className="flex items-center justify-between px-4 mb-2">
                                    <label>Max Price:</label>
                                    <span>${priceFilter[1]}</span>
                                </div>
                                <input 
                                    type="range"
                                    min="0"
                                    max="3000"
                                    value={priceFilter[1]}
                                    onChange={handlePriceFilterChange}
                                    className={`w-full h-2 rounded-lg appearance-none ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
                                    style={{ background: getSliderBackground() }}
                                />
                                <style>{`
                                    input[type="range"] {
                                        -webkit-appearance: none;
                                        width: 100%;
                                        height: 8px;
                                        border-radius: 5px;
                                        background: ${getSliderBackground()};
                                        outline: none;
                                        opacity: 0.7;
                                        transition: opacity .15s ease-in-out;
                                        z-index: 1;
                                        position: relative;
                                    }
                                    input[type="range"]::-webkit-slider-thumb {
                                        -webkit-appearance: none;
                                        appearance: none;
                                        width: 25px;
                                        height: 25px;
                                        border-radius: 50%;
                                        background: ${darkMode ? '#333' : '#fff'};
                                        cursor: pointer;
                                        z-index: 2;
                                        position: relative;
                                    }
                                    input[type="range"]::-moz-range-thumb {
                                        width: 15px;
                                        height: 15px;
                                        border-radius: 50%;
                                        background: ${darkMode ? '#333' : '#fff'};
                                        cursor: pointer;
                                        z-index: 2;
                                        position: relative;
                                    }
                                `}</style>
                            </div>
                        )}
                        {filterType === 'category' && (
                            <div className={`absolute top-full left-0 mt-1 w-full border border-gray-300 shadow-md rounded-md py-2 ${darkMode ? 'bg-black text-white' : 'bg-white'}`}>
                                <div className="px-4">
                                    <select
                                        value={categoryFilter}
                                        onChange={handleCategoryFilterChange}
                                        className={`border border-gray-300 px-2 py-1 rounded-md w-full ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
                                    >
                                        <option value="">All Categories</option>
                                        <option value="mountain">Mountain</option>
                                        <option value="road">Road</option>
                                        <option value="hybrid">Hybrid</option>
                                        <option value="electric">Electric</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <BikeList bikes={filteredBikes} />
            <div className="flex justify-center mt-5">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-2 border rounded-md disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="px-4 py-2 mx-2">{currentPage} of {totalPages}</span>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-2 border rounded-md disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Home;