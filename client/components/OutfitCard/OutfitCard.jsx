import React from 'react';
import OutfitThumbnail from '../OutfitThumbnail/OutfitThumbnail.jsx'
import OutfitInfo from '../OutfitInfo/OutfitInfo.jsx'
import styled from 'styled-components'

const StyledCard = styled.div`
  position: relative;
  height: auto;
  margin: 5px;
  padding: 0;
  border: 1px solid black;
`;

const StyledExitButton = styled.button`
  position: absolute;
  top: 5%;
  left: 70%;
  // transform: translate(-50%, -50%);
  // -ms-transform: translate(-50%, -50%);
  border: 1px;
  cursor: pointer;
`;

const OutfitCard = ({ outfit }) => {
  return (
    <div>
      <StyledCard >
        <StyledExitButton onClick={() => { }}>
          X
        </StyledExitButton>
        <OutfitThumbnail outfit={outfit} />
        <OutfitInfo outfit={outfit} />
      </StyledCard>
    </div>
  );
}

export default OutfitCard;