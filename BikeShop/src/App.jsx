import { useReducer } from "react";
import { useState } from "react";
import { BikeContext, ThemeContext } from "./context";  
import { cartReducer, initialState } from "./reducers/CartReducer";  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);  
  const [state, dispatch] = useReducer(cartReducer, initialState);  

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BikeContext.Provider value={{ state, dispatch }}>  
          <Main />  
          <ToastContainer />  
        </BikeContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;