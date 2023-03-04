import React from "react";

function Categories(props) {
  
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li key={i} 
            onClick={() => props.onClickCat(i)} 
            className={props.value === i ? "active" : ""  }>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
