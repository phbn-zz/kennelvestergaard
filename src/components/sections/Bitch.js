import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Bitch = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "IMG_2435.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="tæve" accent>
        <Container>
          <Grid>
            <div>
              <h2>Tæve - Nanna</h2>
              <p>Tekst om Nanna</p>
            </div>
            <imageContainer>
              <Img fluid={data.file.childImageSharp.fluid} />
            </imageContainer>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }
  }
`;

const imageContainer = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Bitch;
