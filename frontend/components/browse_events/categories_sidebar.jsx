import { categories } from './categories';
import React from 'react';

export const Categories = ({ updateFilter }) => {
  return(
    <div className="list-item-container">
      <li className='browse-category-list-item'>
        <button className="subcategory-link" onClick={() => updateFilter("category", "")}>All Categories</button>
      </li>
     {categories.map((category)=>(
       <li key={category} className='browse-category-list-item'>
         <button className="subcategory-link" onClick={() => updateFilter("category", category)}>{category}</button>
       </li>
   ))}
    </div>
  );
};
