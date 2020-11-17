import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx'
import axios from 'axios';
import styled from 'styled-components'


const StyledCardList = styled.div`
  display: flex;
  flexDirection: row;
  background-color: yellow;
`;

const ProductCardList = ({ relatedData }) => {

  return (
    < div >
      <StyledCardList>
        {
          relatedData.length && relatedData.map(product =>
            // passing on the id of each related item
            <ProductCard product={product} />
          )
        }
      </StyledCardList>
    </div >
  );
}

export default ProductCardList;