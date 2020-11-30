import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import AddToOutfit from '../AddToOutfit/AddToOutfit.jsx'
import OutfitCard from '../OutfitCard/OutfitCard.jsx'
import Carousel from 'styled-components-carousel';


const StyledCardList = styled.div`
  display: flex;
`;

const OutfitCardList = ({ outfitData, mainProduct, clickAddOutfit, clickDeleteOutfit }) => {

  return (
    < div >
      {outfitData && <StyledCardList>
        <AddToOutfit mainProduct={mainProduct} clickAddOutfit={clickAddOutfit} />
        {/* <Carousel
          left
          infinite
          showIndicator
          slidesToShow={3}
        > */}
        {outfitData.length && outfitData.map((outfit, index) =>
          <OutfitCard outfit={outfit} key={index} clickDeleteOutfit={clickDeleteOutfit} />
        )}
        {/* </Carousel> */}
      </StyledCardList>}
    </div >
  );
}

export default OutfitCardList;