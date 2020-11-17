import React from 'react';

import styled from 'styled-components'

const StyledCard = styled.div`
  margin: 5px;
  padding: 0;
  border: 1px solid black;

`;

const AddToOutfit = () => {
  return (
    <div>
      <StyledCard >
        Add to Outfit
      </StyledCard>
    </div>
  );
}

export default AddToOutfit;