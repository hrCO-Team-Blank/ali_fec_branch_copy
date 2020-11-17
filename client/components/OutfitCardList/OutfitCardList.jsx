import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import AddToOutfit from '../AddToOutfit/AddToOutfit.jsx'
import OutfitCard from '../OutfitCard/OutfitCard.jsx'


const StyledCardList = styled.div`
  display: flex;
  flexDirection: row;
`;

const OutfitCardList = ({ outfitData }) => {

  return (
    < div >
      <StyledCardList>
        <AddToOutfit />
        {outfitData.length && outfitData.map(outfit =>
          <OutfitCard outfit={outfit} />
        )}
      </StyledCardList>
    </div >
  );
}

export default OutfitCardList;