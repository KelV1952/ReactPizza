import React, { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import "../scss/app.scss";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Skeleton";
import { SearchContext } from "../App";
import {setValueCat} from '../redux/slices/filterSlice';
import {setSort} from '../redux/slices/filterSlice';

  const Home = ()=> {
    const valueCat = useSelector(state => state.filter.valueCat);  
    const valueSort = useSelector(state=>state.filter.sort);
    // const sortProperty = valueSort.sortProperty
    const dispatch = useDispatch(setSort)
    const {searchValue} = React.useContext(SearchContext);
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
   
    
    const onClickCat = (id) =>{
       dispatch (setValueCat(id))
    }
 
    useEffect(()=>{
      const sortBy = valueSort.sortProperty.replace('-','');
      const order = valueSort.sortProperty.includes('-') ? 'desc' : 'asc';
      const category = valueCat > 0 ? `category=${valueCat}` : '';
      const search = searchValue ? `${searchValue}` : '';
    
      setIsLoading(true);
        //        fetch(`https://63dfcf6159bccf35daba1cf3.mockapi.io/items?${valueCat > 0 ? `category=${valueCat}` : ''}&sortBy=${valueSort.sortProperty}&order=asc `) 
       fetch(`https://63dfcf6159bccf35daba1cf3.mockapi.io/items?${category}&sortBy=${sortBy}&$order=${order}&search=${search}`)
        
          .then(response=>{
           return  response.json()
        }
        ).then(json=>{
          setItems(json);
          setIsLoading(false)
      })
        
    },[valueSort,valueCat,searchValue]);

    //  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
    // поиск фильтром при небольшом количестве элементов
  const pizzas = items.filter((obj) => {
    if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;

    }
    return false
  })
  .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <>
            <div className="content__top">
              {/*  */}
            <Categories value={valueCat} onClickCat= {onClickCat}/>
            <Sort/>
           
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

         
            {
              isLoading ? [...new Array(6)].map((_,i)=><Skeleton key={i}/>)
              : pizzas 
            }

        </div>
   </>
  );
}

export default Home;