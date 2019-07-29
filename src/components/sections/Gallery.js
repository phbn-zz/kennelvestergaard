import React from 'react';
import Masonry from '../common/Masonry';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "doggrowth" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid (grayscale: true){
                  aspectRatio
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="gallery" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Galleri</h1>
          <Masonry
            itemsPerRow={[4]} // This will be changed to `[2, 3]` later
            images={data.allFile.edges.map(({ node }) => ({
              ...node.childImageSharp.fluid,
              caption: `${node.relativePath}`
            }))}
          />
        </Container>
      </Section>
    )}
  />
);

export default Gallery;
