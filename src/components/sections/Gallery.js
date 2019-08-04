import React from 'react';
import Masonry from '../common/Masonry';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "doggrowth" } }) {
          edges {
            node {
              relativePath
              id
              childImageSharp {
                fluid {
                  aspectRatio
                  src
                  originalImg
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
          <h1>Galleri</h1>
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
