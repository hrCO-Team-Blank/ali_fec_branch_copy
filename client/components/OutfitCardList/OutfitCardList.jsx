import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import AddToOutfit from '../AddToOutfit/AddToOutfit.jsx'
import OutfitCard from '../OutfitCard/OutfitCard.jsx'


const StyledCardList = styled.div`
  display: flex;
  flexDirection: row;
`;

const OutfitCardList = ({ outfitData, mainProduct, clickAddOutfit, clickDeleteOutfit }) => {

  return (
    < div >
      <StyledCardList>
        <AddToOutfit mainProduct={mainProduct} clickAddOutfit={clickAddOutfit} />
        {outfitData.length && outfitData.map((outfit, index) =>
          <OutfitCard outfit={outfit} key={index} clickDeleteOutfit={clickDeleteOutfit} />
        )}
      </StyledCardList>
    </div >
  );
}

export default OutfitCardList;