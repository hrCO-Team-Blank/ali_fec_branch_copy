import React, { useState, useEffect } from 'react';
import RelatedCard from '../RelatedCard/RelatedCard.jsx'
import axios from 'axios';
import styled from 'styled-components'


const StyledCardList = styled.div`
  display: flex;
  flexDirection: row;
`;

const RelatedCardList = ({ relatedData }) => {

  return (
    < div >
      <StyledCardList>
        {
          relatedData.length && relatedData.map(product =>
            // passing on the id of each related item
            <RelatedCard product={product} />
          )
        }
      </StyledCardList>
    </div >
  );
}

export default RelatedCardList;