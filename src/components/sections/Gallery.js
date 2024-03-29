import React from 'react';
import Masonry from '../common/Masonry';
import { StaticQuery, graphql } from 'gatsby';

import {
  Section,
  Container,
  HeaderTextNonGrid,
  HeaderDivider,
  InnerDiv
} from '@components/global';

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "hvalpe" } }) {
          edges {
            node {
              relativePath
              id
              childImageSharp {
                fluid {
                  src
                  originalImg
                  aspectRatio
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="første kuld 2019" accent="secondary">
        <Container>
          <InnerDiv>
            <HeaderTextNonGrid>Galleri med Første Kuld 2019</HeaderTextNonGrid>
            <HeaderDivider />
            <p>
              D. 17 August fik Nana et stjernekuld, 5 hanhunde og 4 tæver.
              Alt gik godt, og alle har det rigtigt godt. Sundhedstjek hos
              dyrlægen, alle har det godt.
            </p>
          </InnerDiv>
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
