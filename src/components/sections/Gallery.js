import React from 'react';
import Masonry from '../common/Masonry';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container, HeaderText } from '@components/global';

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "nana" } }) {
          edges {
            node {
              relativePath
              id
              childImageSharp {
                fluid {
                  src
                  originalImg
                  aspectRatio
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="galleri" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <HeaderText>Galleri</HeaderText>
          <Masonry
            itemsPerRow={[4]} // This will be changed to `[2, 3]` later
            images={data.allFile.edges.map(({ node }) => ({
              ...node.childImageSharp.fluid,
              caption: `${node.relativePath}`,
              id: `${node.id}`
            }))}
          />
        </Container>
      </Section>
    )}
  />
);

export default Gallery;
