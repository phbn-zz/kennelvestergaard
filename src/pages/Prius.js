import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import NavbarSecondpage from '../components/common/Navbar/NavBarSecondPages';

import Masonry from '../components/common/Masonry';
import Layout from '@common/Layout';
import {
  Container,
  StyledHyperlink,
  InnerDiv,
  HeaderDivider,
  HeaderText
} from '@components/global';

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
            <InnerDiv>
              <HeaderText>Hanhund til første kuld</HeaderText>
              <HeaderDivider></HeaderDivider>
              <p>
                Prius er importeret fra England og er efter den mest vindende
                tæve på markprøve i England i de senere år. Han har to søskende
                i England som sidste jagtsæson tog SDC “A”. Prius har en
                enestående evne til afkobling og er meget lydhør over for, hvad
                der ønskes af ham.
                <br />
              </p>
              <StyledHyperlink href="http://friia.dk/">
                Læs mere om Prius på Kennel Friias hjemmeside.
              </StyledHyperlink>
            </InnerDiv>
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
