import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const StyledCard = styled.div`
  margin: 5px;
  padding: 0;
  border: 1px solid black;
`;

const AddToOutfit = ({ mainProduct, addOutfit }) => {

  return (
    <div>
      <StyledCard onClick={() => addOutfit()}>
        Add to Outfit
      </StyledCard>
    </div >
  );
}

export default AddToOutfit;