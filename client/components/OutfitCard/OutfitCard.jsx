import React from 'react';
import OutfitThumbnail from '../OutfitThumbnail/OutfitThumbnail.jsx'
import OutfitInfo from '../OutfitInfo/OutfitInfo.jsx'
import styled from 'styled-components'

const StyledCard = styled.div`
  margin: 5px;
  padding: 0;
  border: 1px solid black;
  background-color: yellow;

`;

const OutfitCard = ({ outfit }) => {
  return (
    <div>
      <StyledCard >
        {/* <OutfitThumbnail outfit={outfit} />
        <OutfitInfo outfit={outfit} /> */}
      </StyledCard>
    </div>
  );
}

export default OutfitCard;