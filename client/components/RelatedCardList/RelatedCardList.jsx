import React, { useState, useEffect } from 'react';
import RelatedCard from '../RelatedCard/RelatedCard.jsx'
import axios from 'axios';
import styled from 'styled-components'

const StyledCardList = styled.div`
  display: flex;
  align-items: center;
  height: 300px;
`;

const RelatedCardList = ({ relatedData }) => {

  return (
    <StyledCardList>
      {
        relatedData.length && relatedData.map(product =>
          // passing on the id of each related item
          <RelatedCard product={product} />
        )
      }
    </StyledCardList>
  );
}

export default RelatedCardList;