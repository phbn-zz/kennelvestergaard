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
  StyledInternallink,
  SubHeader,
  Grid
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
      <Section id="om din hvalp">
        <Container>
          <Grid>
            <div>
              <HeaderText>En god start</HeaderText>
              <Divider />
              <p>
                Vi gør vores bedste for at hvalpen har fået den bedst tænkelige
                start på livet. I kan her på siden se, hvilken miljøtræning
                hvalpene har været igennem sammen med Nana. Jeg vil løbende
                holde listen og siden ajourført, så det er muligt at se, hvad de
                små oplever her hos os. Når I har fået jeres nye hvalp med hjem
                vil prægningen naturligvis fortsætte. Jeg vil anbefale jer at
                læse
                <StyledInternallink to="/DogDevelopment">
                  Hundens fysiske og psykiske udvikling
                </StyledInternallink>
                , og ønsker I yderligere, så kan bogen "Retriever Hvalpetræning"
                af Norman Zvolsky anbefales.
              </p>
            </div>
            <ImageContainer fluid={data.nana_practice.childImageSharp.fluid} />
          </Grid>
          <Grid inverse>
            <InsideGridDiv>
              <SubHeader>Miljøtræning med hvalpe</SubHeader>
              <List>
                <ListItem>Køre bil</ListItem>
                <ListItem>Skud med hundeprop</ListItem>
                <ListItem>Dødt vildt fasan</ListItem>
                <ListItem>Fløjte signal</ListItem>
                <ListItem>Børn</ListItem>
                <ListItem>Støvsuger</ListItem>
                <ListItem>Heste</ListItem>
                <ListItem>Hunde</ListItem>
                <ListItem>Katte</ListItem>
                <ListItem>Fremmede hunde</ListItem>
              </List>
            </InsideGridDiv>
            <div>
              <HeaderText>Praktisk om din hvalp</HeaderText>
              <Divider inverse />
              <p>
                Hvalpen er chippet og har Dansk Kennel Klub's stambog. Derudover
                har den fået ormekur. Hvalpen har fået ormekur da den var 3,5 og
                7 uger. Husk, at hvalpen skal vaccineres igen når den er 12
                uger. Hvalpen har sundhedsattest og er blevet vaccineret.
                Hvalpene er blevet fodret med Royal Canin Maxi Starter, og jeg
                vil anbefale, at I fortsætter med dette foder, indtil hvalpen er
                faldet godt til i sit nye hjem.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <HeaderText>Videre opdragelse</HeaderText>
              <Divider />
              <p>
                Jeg kan på det varmeste anbefale{' '}
                <StyledHyperlink href="https://www.dansk-retriever-klub.dk/">
                  Dansk Retriever Klub
                </StyledHyperlink>
                , til træning af hunden. Deres træning er særlig tilpasset netop
                vores hunderace, og der er en særlig forståelse for retrieverens
                behov og udvikling. Derudover tilbyder de mange forskellige
                træningsformer, alt efter hvad man synes er sjovt. Lydighed,
                familiehundetræning, nosework, jagttræning/markprøver og meget
                mere. Vær opmærksom på, at man skal være hurtig ude for at få
                plads på holdene. Der medfølger en hvalpepakke med 6 mdr.
                medlemskab hos Dansk Retriever Klub.
              </p>
            </div>

            <ImageContainer
              fluid={data.nana_practice_2.childImageSharp.fluid}
            />
          </Grid>
        </Container>
      </Section>
    )}
  />
);

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
