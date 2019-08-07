import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import ImageContainer from '../common/ImageContainer';

import {
  Section,
  Container,
  HeaderText,
  Divider,
  StyledHyperlink,
  StyledInternallink
} from '@components/global';

const Puppies = () => (
  <StaticQuery
    query={graphql`
      query {
        puppies: file(
          sourceInstanceName: { eq: "nana" }
          name: { eq: "P5033424" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        nana_practice: file(
          sourceInstanceName: { eq: "nana" }
          name: { eq: "IMG_3760" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760, maxHeight: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        nana_practice_2: file(
          sourceInstanceName: { eq: "nana" }
          name: { eq: "IMG_3432" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760, maxHeight: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="hvalpe">
        <Container>
          <Grid>
            <div>
              <HeaderText>Første kuld 2019</HeaderText>
              <Divider />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Faren er{' '}
                <StyledInternallink to="/Prius">Prius</StyledInternallink>
              </p>
            </div>
            <Art>
              <ImageContainer fluid={data.puppies.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <InsideGridDiv>
              <h3>Vores hvalpe er vandt til:</h3>
              <List>
                <ListItem>At køre bil</ListItem>
                <ListItem>Skud med hundeprop</ListItem>
                <ListItem>Dødt vildt fasan</ListItem>
                <ListItem>Fløjte signal</ListItem>
                <ListItem>Børn</ListItem>
                <ListItem>Støvsuger</ListItem>
                <ListItem>Heste</ListItem>
                <ListItem>Hunde</ListItem>
                <ListItem>Katte</ListItem>
                <ListItem>Andre mennesker</ListItem>
              </List>
            </InsideGridDiv>
            <div>
              <HeaderText>En god start</HeaderText>
              <Divider inverse />
              <p>
                Vi gør vores bedste for at hvalpen har fået den bedst tænkelige
                start på livet. I kan bl.a. se under Socialisering af hvalpe fra
                de er 3 uger til 8 uger, hvilken miljøtræning hvalpene har været
                igennem sammen med Nana. Jeg vil løbende holde listen ajourført,
                så det er muligt at se, hvad de små oplever her hos os. Når I
                har fået jeres nye hvalp med hjem vil prægningen naturligvis
                fortsætte. Jeg vil anbefale jer at læse{' '}
                <StyledInternallink to="/DogDevelopment">
                  Hundens fysiske og psykiske udvikling
                </StyledInternallink>
                , og ønsker I yderligere, så kan bogen Retriever hvalpe- træning
                af Norman Zvolsky anbefales.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <HeaderText>Praktisk om din hvalp</HeaderText>
              <Divider />
              <p>
                Hvalpen er chippet og har DKK stambog. Derudover har den fået
                ormekur. Husk, at den skal have ormekur igen inden 12 ugers
                vaccinen, så det er en god ide at tale med dyrlægen i god tid,
                inden den er 12 uger. Hvalpen har sundhedsattest og er blevet
                vaccineret. Hvalpene er blevet fodret med Royal Canin Maxi
                Starter, og jeg vil anbefale, at I fortsætter med dette foder,
                indtil hvalpen er faldet godt til i sit nye hjem.
              </p>
            </div>
            <Art>
              <ImageContainer
                fluid={data.nana_practice.childImageSharp.fluid}
              />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <ImageContainer
                fluid={data.nana_practice_2.childImageSharp.fluid}
              />
            </Art>
            <div>
              <HeaderText>Videre opdragelse</HeaderText>
              <Divider inverse />
              <p>
                Jeg kan på det varmeste anbefale{' '}
                <StyledHyperlink href="https://www.dansk-retriever-klub.dk/">
                  Dansk Retriever Klub
                </StyledHyperlink>
                , til træning af hunden. Deres træning er særlig tilpasset netop
                vores hunderace, og der er en særlig forståelse for retrieverens
                behov og udvikling. Derudover tilbyder de mange forskellige
                træningsformer, alt efter hvad man synes er sjovt. Lydighed,
                familiehunde træning, nosework, jagttræning/markprøver og meget
                mere. Vær opmærksom på, at man skal være hurtig ude for at få
                plads på holdene. Derfor medfølger der en hvalpepakke med 6 mdr.
                medlemskab til DRK.
              </p>
            </div>
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
  justify-items: center;
  margin: 24px 0;
  padding-bottom: 24px;
  margin-top: 30px;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  HeaderText {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid '#000';
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.16);
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
  border-top: 1px solid #e0dddd;
  :first-child {
    border-top: none;
  }
`;

const InsideGridDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  justify-content: center;
  align-items: center;
`;

export default Puppies;
