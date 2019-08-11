import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import NavbarSecondpage from '../components/common/Navbar/NavBarSecondPages';

import Masonry from '../components/common/Masonry';
import Layout from '@common/Layout';
import { Container, HeaderText } from '@components/global';

const NanaGalleri = () => (
  <Layout>
    <NavbarSecondpage />
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
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <HeaderWrapper>
          <Container>
            <HeaderText>Galleri med Nana</HeaderText>
            <Masonry
              itemsPerRow={[4]} // This will be changed to `[2, 3]` later
              images={data.allFile.edges.map(({ node }) => ({
                ...node.childImageSharp.fluid,
                caption: `${node.relativePath}`,
                id: `${node.id}`
              }))}
            />
            <Link to="/">Go back to the homepage</Link>
          </Container>
        </HeaderWrapper>
      )}
    />
  </Layout>
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.dark};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

export default NanaGalleri;
