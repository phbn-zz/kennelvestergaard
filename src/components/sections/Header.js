import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import paws from '../../images/art/paws.svg';

import BackgroundImage from 'gatsby-background-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "headerbg" }
        ) {
          childImageSharp {
            fluid(
              maxWidth: 4160
              duotone: { highlight: "#005cbf", shadow: "#192550" }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <BackgroundImage
          Tag="section"
          fluid={data.desktop.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
          <Container>
            <Grid>
              <img src={paws} alt="paws" />
              <Text>
                <h2>
                  Vores hunde er avlet efter Dansk Retriever Klub og Dansk
                  Kennel Klubs avlsanbefalinger.
                </h2>
                <br />
                <p>
                  <ExternalLink href="hvalpe">
                    Se vores kuld &nbsp;&#x2794;
                  </ExternalLink>
                </p>
              </Text>
            </Grid>
          </Container>
        </BackgroundImage>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  padding-top: 70px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 70px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

export default Header;
