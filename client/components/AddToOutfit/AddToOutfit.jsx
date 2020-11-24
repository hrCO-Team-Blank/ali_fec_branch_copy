import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const StyledCard = styled.div`
  position: relative;
  height: auto;
  margin: 5px;
  padding: 0;
  border: 1px solid black;
`;

const StyledPlusSign = styled.img`
position: relative;
height: 100%;
width: auto;
margin: 5px;
padding: 0;
border: 1px solid black;
`;


const AddToOutfit = ({ mainProduct, clickAddOutfit }) => {

  return (
    <div>
      <StyledCard onClick={() => clickAddOutfit()}>
        Add to Outfit
        <StyledPlusSign src='./images/plus.jpg' />
      </StyledCard>
    </div >
  );
}

export default AddToOutfit;