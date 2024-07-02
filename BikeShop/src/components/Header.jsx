import React, { useState, useContext } from "react";
import { FaRegBell, FaRegMoon } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md";
import { IoBicycle } from "react-icons/io5";

import { BikeContext, ThemeContext } from "../context";
import CartDetails from "../pages/bikes/CartDetails";
import SearchBar from "./Search"; 

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const { state, dispatch } = useContext(BikeContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleCartShow() {
    if (state.cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }


  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex flex-wrap items-center justify-between space-x-4 py-6">
        <a href="/" className="flex gap-2 items-center">
          <IoBicycle className="w-8 h-8" />
          <span className="font-bold uppercase">Bike Shop</span>
        </a>

        <ul className="flex items-center space-x-5 mt-4 sm:mt-0">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <FaRegBell />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              {darkMode ? <MdOutlineWbSunny /> : <FaRegMoon />}
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
              href="#"
              onClick={handleCartShow}
            >
              <MdOutlineShoppingCart />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}