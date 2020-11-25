import React from 'react';
import RelatedThumbnail from '../RelatedThumbnail/RelatedThumbnail.jsx'
import RelatedInfo from '../RelatedInfo/RelatedInfo.jsx'
import styled from 'styled-components'

const StyledCard = styled.div`
  margin: 5px;
  padding: 0;
  border: 1px solid black;
  background-color: yellow;
  height: 290px;

`;

const RelatedCard = ({ product }) => {
  return (
    <StyledCard >
      <RelatedThumbnail product={product} />
      <RelatedInfo product={product} />
    </StyledCard>
  );
}

export default RelatedCard;