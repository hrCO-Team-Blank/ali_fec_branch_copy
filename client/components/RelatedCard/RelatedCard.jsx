import React, { useState } from 'react';
import RelatedThumbnail from '../RelatedThumbnail/RelatedThumbnail.jsx'
import RelatedInfo from '../RelatedInfo/RelatedInfo.jsx'
import Comparison from '../Comparison/Comparison.jsx'
import styled from 'styled-components'
import Modal from 'react-modal'
Modal.setAppElement('#root')

const StyledCard = styled.div`
  position: relative;
  height: auto;
  margin: 5px;
  padding: 0;
  border: 1px solid black;
`;

const StyledStarButton = styled.button`
  position: absolute;
  top: 5%;
  left: 70%;
  // transform: translate(-50%, -50%);
  // -ms-transform: translate(-50%, -50%);
  border: 1px;
  cursor: pointer;
`;

const RelatedCard = ({ product, mainProduct }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <StyledCard >
        <StyledStarButton onClick={() => setModalIsOpen(true)}>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <Comparison mainProduct={mainProduct} product={product} />
          </Modal>
          <img src="../../dist/images/star.png" alt="star" />
        </StyledStarButton>
        <RelatedThumbnail product={product} />
        <RelatedInfo product={product} />
      </StyledCard>
    </div>
  );
}

export default RelatedCard;