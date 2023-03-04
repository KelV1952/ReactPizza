import React, { useEffect } from "react";

import "../scss/app.scss";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Skeleton";

  const Home = ({searchValue})=> {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [valueCat, setValueCat] = React.useState(0);
    const [valueSort,setChangeSort]=React.useState({
      name:'попопулярности',
      sortProperty:'price'
    }
    );
 
    useEffect(()=>{
      const order = valueSort.sortProperty.includes('-') ? 'desc' : 'asc';
      const sortBy = valueSort.sortProperty.replace('-','');
      const category = valueCat > 0 ? `category=${valueCat}` : '';
      const search = searchValue ? `&search=${searchValue}` : '';
    
      setIsLoading(true);
        //        fetch(`https://63dfcf6159bccf35daba1cf3.mockapi.io/items?${valueCat > 0 ? `category=${valueCat}` : ''}&sortBy=${valueSort.sortProperty}&order=asc `) 
       fetch(`https://63dfcf6159bccf35daba1cf3.mockapi.io/items?${category}&sortBy=${sortBy}&$order=${order}`)
        
          .then(response=>{
           return  response.json()
        }
        ).then(json=>{
          setItems(json);
          setIsLoading(false)
      })
        
    },[valueCat,valueSort,searchValue]);

    //  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
    // поиск фильтром при небольшом количестве элементов
  const pizzas = items.filter((obj) => {
    if(obj.title.includes(searchValue)) {
      return true;

    }
    return false
  })
  .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <>
            <div className="content__top">
            <Categories value={valueCat} onClickCat= {(i)=>setValueCat(i)}/>
            <Sort value= {valueSort} onChangeSort = {(i) => setChangeSort(i)} />
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