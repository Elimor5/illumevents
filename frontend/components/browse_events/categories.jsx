import React from 'react';
import Map from '../map/map';

export const categories = [
  "Auto, Boat & Air",
  "Business & Professional",
  "Charity & Causes",
  "Community & Culture",
  "Family & Education",
  "Fashion & Beauty",
  "Film",
  "Media & Entertainment",
  "Food & Drink",
  "Goverment & Politics",
  "Health & Wellness",
  "Hobbies & Special Interest",
  "Home & Lifestyle",
  "Music",
  "Other",
  "Performing & Visual Arts",
  "Religion & Spirituality",
  "Science & Technology",
  "Seasonal & Holiday",
  "Sports & Fitness",
  "Travel & Outdoor" ];
  
const CategoriesTable = ({ updateFilter }) => {

  return(
    <div className="categories-google-maps-browse">
      <Map
        style="browse-events-map-container"
        zoom ={10}
        lat={40.7831}
        lng={-73.9712} />
      <h1 className="categories-header"> Categories </h1>
      <button className="category-button" onClick={() => updateFilter("category", "")}><li className="browse-category-list">All Categories</li></button>
        {categories.map((category)=>(
          <button key={category} className="category-button" onClick={() => updateFilter("category", category)}><li className="browse-category-list">{category}</li></button>
        ))}
    </div>
  );

};

export default CategoriesTable;
