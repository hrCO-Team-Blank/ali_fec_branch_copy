import React from 'react';
import ProductCardThumbnail from './ProductCardThumbnail.jsx'
import ProductCardInfo from './ProductCardInfo.jsx'


const ProductCard = ({ product }) => {
  return (
    <div>
      <ProductCardThumbnail product={product} />
      <ProductCardInfo product={product} />
    </div>
  );
}

export default ProductCard;