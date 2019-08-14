import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'rebass';
import Modal from 'styled-react-modal';
import stamtavle from '../../images/art/nana_stamtavle.jpg';

class ImageContainer extends React.Component {
  state = {
    isOpen: false
  };

  handleOpenModal = () => {
    this.setState({ isOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <ImageBox>
        <Link onClick={this.handleOpenModal}>
          <ImageRender fluid={this.props.fluid} />
        </Link>
        <StyledModal
          isOpen={this.state.isOpen}
          onBackgroundClick={this.handleCloseModal}
          onEscapeKeydown={this.handleCloseModal}
        >
          <ModalContent>
            <Img fluid={this.props.fluid} />
            <button onClick={this.handleCloseModal}>Close me</button>
          </ModalContent>
        </StyledModal>
      </ImageBox>
    );
  }
}

const ModalContent = styled.div`
  margin: 15px;
  max-width: 700px;
  width: 100%;
`;

const StyledModal = Modal.styled`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageBox = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const ImageRender = styled(Img)`
  border-radius: 20px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.16);
`;

export default ImageContainer;
