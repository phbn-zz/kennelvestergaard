import React from 'react';
import Img from 'gatsby-image';
import { chunk, sum } from 'lodash';
import { Box } from 'rebass';

const Masonry = ({ images, itemsPerRow }) => {
  const aspectRatios = images.map(image => image.aspectRatio);

  const rowAspectRatioSumsByBreakpoints = itemsPerRow.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  );

  return (
    <div>
      {images.map((image, i) => (
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
          css={{ display: 'inline-block' }}
        />
      ))}
    </div>
  );
};

export default Masonry;
