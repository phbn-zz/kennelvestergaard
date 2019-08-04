import React, { useState } from 'react';
import Img from 'gatsby-image';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { chunk, sum } from 'lodash';
import styled from 'styled-components';
import { Box, Link } from 'rebass';

const Masonry = ({ images, itemsPerRow }) => {
  const aspectRatios = images.map(image => image.aspectRatio);

  const rowAspectRatioSumsByBreakpoints = itemsPerRow.map(itemsPerRow =>
    chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
      sum(rowAspectRatios)
    )
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);

  const closeModal = () => setModalIsOpen(false);
  const openModal = imageIndex => {
    setModalCurrentIndex(imageIndex);
    setModalIsOpen(true);
  };

  return (
    <MasonryContainer>
      {images.map((image, i) => (
        <Link
          key={image.id}
          href={image.originalImg}
          onClick={e => {
            e.preventDefault();
            openModal(i);
          }}
        >
          <Box
            key={image.src}
            as={Img}
            fluid={image}
            title={image.caption}
            width={rowAspectRatioSumsByBreakpoints.map(
              // Return a value for each breakpoint
              (rowAspectRatioSums, j) => {
                // Find out which row the image is in and get its aspect ratio sum
                const rowIndex = Math.floor(i / itemsPerRow[j]);
                const rowAspectRatioSum = rowAspectRatioSums[rowIndex];

                return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`;
              }
            )}
            css={`
              display: inline-block;
              vertical-align: middle;
              transition: filter 0.3s;
              :hover {
                filter: brightness(87.5%);
              }
            `}
          />
        </Link>
      ))}

      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal
              onClose={closeModal}
              styles={{
                blanket: base => ({
                  ...base,
                  backgroundColor: 'rgba(255,255,255,0.85)'
                }),
                dialog: base => ({
                  ...base,
                  maxWidth: 640
                })
              }}
            >
              <Carousel
                views={images.map(({ originalImg, caption }) => ({
                  source: originalImg,
                  caption
                }))}
                currentIndex={modalCurrentIndex}
                components={{ FooterCount: () => null }}
                styles={{
                  header: base => ({
                    ...base,
                    background: 'none !important',
                    padding: 0,
                    paddingBottom: 10,
                    position: 'static'
                  }),
                  headerClose: base => ({
                    ...base,
                    color: '#666',

                    ':hover': { color: '#DE350B' }
                  }),
                  view: base => ({
                    ...base,
                    maxHeight: 650,
                    overflow: 'hidden'
                  })
                }}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </MasonryContainer>
  );
};

const MasonryContainer = styled.div`
  background-color: ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
  margin-top: 24px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.16);
`;

export default Masonry;
