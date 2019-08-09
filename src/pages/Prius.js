import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import NavbarSecondpage from '../components/common/Navbar/NavBarSecondPages';

import Masonry from '../components/common/Masonry';
import Layout from '@common/Layout';
import { Container, Section, StyledHyperlink } from '@components/global';

const Prius = () => (
  <Layout>
    <NavbarSecondpage />
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { sourceInstanceName: { eq: "prius" } }) {
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
        <HeaderWrapper>
          <Container accent="secondary">
            <h1>Hanhund</h1>
            <p>
              Prius er importeret fra England og er efter den mest vindende tæve
              på markprøve i England i de senere år. Han har to søskende i
              England som sidst jagtsæson tog SDC “A”, hvor Helen havde dem
              begge med på samme prøve. Prius har en enestående evne til
              afkobling og er megt lydhør over for, hvad der ønskes af ham.{' '}
              <br />
              <StyledHyperlink href="http://friia.dk/">
                Læs mere om Prius på deres hjemmeside.
              </StyledHyperlink>
            </p>
            <Masonry
              itemsPerRow={[2]} // This will be changed to `[2, 3]` later
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

export default Prius;
