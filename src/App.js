import React from "react";

import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFaund from "./pages/NotFaund";
import Cart from './pages/Cart';
import { Route, Routes } from "react-router-dom";

export const SearchContext = React.createContext();


 function App() {
   
   const [searchValue, setSearchValue]= React.useState('');
  //  const dispatch = useDispatch()
  
  return (
    <div className="wrapper">
      
      <SearchContext.Provider value ={{searchValue, setSearchValue}}>
      <Header />
      <div className="content">
        <div className="container">
         <Routes>
          <Route path='/' element ={<Home  />}      />
          <Route path='/cart' element ={<Cart/>}  />
          <Route path='*' element ={<NotFaund/>}  />
         </Routes>
        </div>
      </div>
      </SearchContext.Provider>
      
    
    </div>
  );
}

export default App;
