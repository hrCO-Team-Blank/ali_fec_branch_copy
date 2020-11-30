import React from 'react';
import OutfitThumbnail from '../OutfitThumbnail/OutfitThumbnail.jsx'
import OutfitInfo from '../OutfitInfo/OutfitInfo.jsx'
import styled from 'styled-components'

const StyledCard = styled.div`
height: 350px;
width: 250px;
margin: 5px;
padding: 5px;
border: 1px solid black;
`;
const StyledExitButton = styled.button`
  position: relative;
  top: 10%;
  left: 80%;
  // transform: translate(-50%, -50%);
  // -ms-transform: translate(-50%, -50%);
  border: 1px;
  cursor: pointer;
`;

const OutfitCard = ({ outfit, clickDeleteOutfit }) => {

  return (
    <div>
      <StyledCard >
        <StyledExitButton onClick={() => { clickDeleteOutfit(outfit) }}>
          X
        </StyledExitButton>
        <OutfitThumbnail outfit={outfit} />
        <OutfitInfo outfit={outfit} />
      </StyledCard>
    </div >
  );
}

export default OutfitCard;