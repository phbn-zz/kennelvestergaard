import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ImageContainer = props => {
  return (
    <ImageBox>
      <ImageRender fluid={props.fluid} />
    </ImageBox>
  );
};

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
