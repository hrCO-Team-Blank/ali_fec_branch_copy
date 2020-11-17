import React from 'react';
import ProductCardThumbnail from './ProductCardThumbnail.jsx'
import ProductCardInfo from './ProductCardInfo.jsx'
import styled from 'styled-components'

const StyledCard = styled.div`
  margin: 5px;
  padding: 0;
  border: 1px solid black;

`;

const ProductCard = ({ product }) => {
  return (
    <div>
      <StyledCard >
        <ProductCardThumbnail product={product} />
        <ProductCardInfo product={product} />
      </StyledCard>
    </div>
  );
}

export default ProductCard;