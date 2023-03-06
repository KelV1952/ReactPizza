import React from "react";
import styles from './Search.module.scss';
// import { SearchContext } from "../../App";

const Search = ({searchValue,setSearchValue}) => {
    // const {searchValue,setSearchValue} = React.useContext(SearchContext);

    return(
        <div className={styles.root}>
           <svg className={styles.icon}     
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <g dataName="Layer 2" id="Layer_2">
            <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z"/></g>
        </svg> 
            <svg className={styles.clearIcon}>
               height="512px" id="Layer_1" style="enableBackground:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px"  xmlns="http://www.w3.org/2000/svg" <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/> 
            </svg>   
        
                  
        <input className= {styles.input} 
            placeholder="Поиск пиццы..." 
            type='text'
            value={searchValue}
            onChange = {(e) =>setSearchValue(e.target.value)} 
            
        />
      
    </div>
    ) 
    
}  
export default Search;