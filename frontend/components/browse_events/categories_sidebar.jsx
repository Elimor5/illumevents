import { categories } from './categories';
import React from 'react';

export const Categories = ({ updateFilter }) => {
  return(
    <div>
        {categories.map((category) => {
          <button key={category} className="category-button" onClick={() => updateFilter("category", category)}><li className="browse-category-list">{category}</li></button>
        })}
    </div>
  );
};
