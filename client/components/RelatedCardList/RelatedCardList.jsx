import React, { useState, useEffect } from 'react';
import RelatedCard from '../RelatedCard/RelatedCard.jsx'
import axios from 'axios';
import styled from 'styled-components'
// import Flickity from 'react-flickity-component'
// import "../../dist/flickity.css";

const StyledCardList = styled.div`
display: flex;
flex-wrap: nowrap;
overflow-x: auto;
-webkit-overflow-scrolling: touch;
-ms-overflow-style: -ms-autohiding-scrollbar;
`;

const RelatedCardList = ({ relatedData, mainProduct }) => {


  return (
    <StyledCardList>
      {/* <Flickity> */}
      {
        relatedData.length && relatedData.map((product, index) =>
          // passing on the id of each related item
          <RelatedCard product={product} mainProduct={mainProduct} key={index} />
        )
      }
      {/* </Flickity> */}
    </StyledCardList>
  );
}

export default RelatedCardList;