import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopeContext } from '../ShopeContext';
import dropdown_icon from '../../Components/Assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopeContext);

  // Check if all_product is available and is an array
  if (!all_product || !Array.isArray(all_product)) {
    return <p>Loading products...</p>;  // Render a loading message if data isn't available yet
  }

  // Filter the products by category and map them into Item components
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className='shop-category'>
      <img className='shopecategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of {filteredProducts.length} products
        </p>
        <div className='shopcategory-sort'>
          sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-product'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products available in this category.</p>  // Message when no products match the category
        )}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;

