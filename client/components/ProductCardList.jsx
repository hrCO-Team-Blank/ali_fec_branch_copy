import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx'
import axios from 'axios';
import styled from 'styled-components'

const StyledCard = styled.h2`
  border: black;
  background-color: yellow;
`
const ProductCardList = ({ relatedData }) => {

  return (
    < div >
      {
        relatedData.length && relatedData.map(product => {
          <StyledCard>
            <ProductCard product={product} />
          </StyledCard>
        })
      }
    </div >
  );
}

export default ProductCardList;