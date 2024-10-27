import React, { useContext } from 'react'
import { ShopeContext } from '../ShopeContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import Description from '../../Components/Description/Description';

const Product = () => {
    const {all_product} = useContext(ShopeContext);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Description />
    </div>
  )
}

export default Product