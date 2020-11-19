import React, { useState } from 'react';
import RelatedThumbnail from '../RelatedThumbnail/RelatedThumbnail.jsx'
import RelatedInfo from '../RelatedInfo/RelatedInfo.jsx'
import Comparison from '../Comparison/Comparison.jsx'
import styled from 'styled-components'
import Modal from 'react-modal'
import { FaStar } from 'react-icons/fa'

Modal.setAppElement('#RelatedAndOutfit')

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
  left: 80%;
  // transform: translate(-50%, -50%);
  // -ms-transform: translate(-50%, -50%);
  border: 1px;
  cursor: pointer;
`;

const RelatedCard = ({ product, mainProduct }) => {


  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [count, setCount] = useState(0)

  function testing() {
    setModalIsOpen(false);
  }
  //../../dist/images/star.png
  //onRequestClose={() => setModalIsOpen(false)}
  //onClick={() => setModalIsOpen(false)}
  return (
    <div>
      <StyledCard >
        <StyledStarButton onClick={() => setModalIsOpen(true)}>
          <Modal isOpen={modalIsOpen} onRequestClose={(e) => { e.stopPropagation(); setModalIsOpen(false); }} shouldCloseOnOverlayClick={true}>
            <Comparison mainProduct={mainProduct} product={product} setModalIsOpen={testing} setCount={setCount} count={count} />
          </Modal>
          <FaStar />
        </StyledStarButton>
        <RelatedThumbnail product={product} />
        <RelatedInfo product={product} />
      </StyledCard>
    </div>
  );
}

export default RelatedCard;