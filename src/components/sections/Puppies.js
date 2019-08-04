import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import dog from '../../images/art/randomdog.jpeg';

import { Section, Container } from '@components/global';

const Puppies = () => (
  <StaticQuery
    query={graphql`
      query {
        puppies: file(
          sourceInstanceName: { eq: "doggrowth" }
          name: { eq: "IMG_2435" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
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
              <h2>Første kuld 2019</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Faren er <Link to="/Prius">Prius</Link>
              </p>
            </div>
            <Art>
              <Img fluid={data.puppies.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <InsideGridDiv>
              <h2>En god start</h2>
              <p>
                Vi gør vores bedste for at hvalpen har fået den bedst tænkelige
                start på livet. I kan bl.a. se under Socialisering af hvalpe fra
                de er 3 uger til 8 uger, hvilken miljøtræning hvalpene har været
                igennem sammen med Nana. Jeg vil løbende holde listen ajourført,
                så det er muligt at se, hvad de små oplever her hos os. Når I
                har fået jeres nye hvalp med hjem vil prægningen naturligvis
                fortsætte, og jeg vil anbefale jer at læse{' '}
                <Link to="/DogDevelopment">
                  Hundens fysiske og psykiske udvikling
                </Link>
                , ønsker I yderligere så kan bogen Retriver hvalpe- træning af
                Norman Zvolsky anbefales.
              </p>
            </InsideGridDiv>
            <InsideGridDiv>
              <h2>Socialisering - Vores hvalpe er tilvænnet</h2>
              <List>
                <ListItem>Køre bil</ListItem>
                <ListItem>Skud hundeprop</ListItem>
                <ListItem>Dødt vildt fasan</ListItem>
                <ListItem>Fløjte signal</ListItem>
                <ListItem>Børn</ListItem>
                <ListItem>Støvsuger</ListItem>
                <ListItem>Heste</ListItem>
                <ListItem>Andre</ListItem>
                <ListItem>hunde</ListItem>
                <ListItem>Katte</ListItem>
              </List>
            </InsideGridDiv>
          </Grid>
          <Grid>
            <div>
              <h2>Praktisk om din hvalp</h2>
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
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Videre opdragelse</h2>
              <p>
                Jeg kan på det varmeste anbefale Dansk Retriever Klub
                {`(Se link under "Om os")`}, til træning af hunden. Deres
                træning er særlig tilpasset netop vores hunderace, og der er en
                særlig forståelse for retrieverens behov og udvikling. Derudover
                tilbyder de mange forskellige træningsformer, alt efter hvad man
                synes er sjovt. Lydighed, familiehunde træning, nosework,
                jagttræning/markprøver og meget mere. Vær opmærksom på, at man
                skal være hurtig ude for at få plads på holdene. Derfor
                medfølger der en hvalpepakke med 6 mdr. medlemskab til DRK.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const gray5 = '#e0dddd';

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
  border-top: 3px solid '#9b8dab';
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
  border-top: 1px solid ${gray5};
  :first-child {
    border-top: none;
  }
`;

const InsideGridDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  justify-content: 'space-evenly';
`;

export default Puppies;
