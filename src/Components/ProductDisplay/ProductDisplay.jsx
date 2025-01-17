import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopeContext } from '../../context/ShopeContext'

const ProductDisplay = (props) => {
    const {product} =props;
    const {addToCart} = useContext(ShopeContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
        </div>
        < div className = 'productdisplay-img' >
            <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>

      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-stars'>
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_dull_icon} alt='' />
            <p>(122)</p>
        </div>
        <div className='productdisplay-right-price'>
            <div className='productdisplay-right-price-old' >
                ${product.old_price}
            </div>
            <div className='productdisplay-right-price-new' >
                ${product.new_price}
            </div>
        </div>
        <div className='productdisplay-right-descrption'>
            A lightweight, usually knitted, pullover shirt, close-fitting and a round neckline and sleeves, worn as an undershirt or outer garment.
        </div>
        < div className = 'productdisplay-right-size' >
          <h1>Select Size </h1>
          < div className = 'productdisplay-right-sizes' >
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>Xl</div>
            <div>XXl</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category:</span>Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags:</span>Mordern, Latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay
