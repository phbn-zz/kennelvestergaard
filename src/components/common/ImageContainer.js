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
            <ImageRenderModal fluid={this.props.fluid} />
            <StyledButton onClick={this.handleCloseModal}>
              Close me
            </StyledButton>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const ImageRenderModal = styled(Img)`
  border-radius: 20px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.16);
  min-width: 500px;
  margin: 20px;

  @media (max-width: ${props => props.theme.screen.md}) {
    min-width: 400px;
  }
`;

const ImageRender = styled(Img)`
  border-radius: 20px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.16);
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: palevioletred;
  font-size: 16px;
  border-radius: 3px;
  color: black;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    color: white;
  }
`;

export default ImageContainer;
