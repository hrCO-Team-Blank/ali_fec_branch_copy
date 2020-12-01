import React, { useState, useEffect } from 'react';
import RelatedCard from '../RelatedCard/RelatedCard.jsx'
import axios from 'axios';
import styled from 'styled-components'
import Carousel from 'styled-components-carousel';

const StyledCardList = styled.div`
display: flex
`;

const RelatedCardList = ({ relatedData, mainProduct }) => {

  return (

    <StyledCardList>
      <Carousel
        left
        infinite
        showArrows
        showIndicator
        slidesToShow={4}
      >
        {
          relatedData.length && relatedData.map((product, index) =>
            // passing on the id of each related item
            <RelatedCard product={product} mainProduct={mainProduct} key={index} />
          )
        }
      </Carousel>
    </StyledCardList>

  );
}

export default RelatedCardList;