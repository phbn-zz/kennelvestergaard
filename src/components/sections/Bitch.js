import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ImageContainer from '../common/ImageContainer';

import {
  Section,
  Container,
  Grid,
  HeaderText,
  Divider,
  StyledInternallink
} from '@components/global';

const Bitch = () => (
  <StaticQuery
    query={graphql`
      query {
        profil: file(
          sourceInstanceName: { eq: "nana" }
          name: { eq: "IMG_2435" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
              originalImg
            }
          }
        }

        stamtavle: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "nana_stamtavle" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
              originalImg
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
              <HeaderText>Nana</HeaderText>
              <Divider />
              <p>
                Nana er en energisk hund. Hun er altid glad og imødekommende,
                både overfor mennesker og dyr. Hun er en klog hund, som er
                lærenem og har et ustoppeligt drive. Hun bliver ved, så det har
                været vores opgave at vurdere, hvornår det var tid til at tage
                en pause. Hun er trænet i jagt, lydighed og nosework hos Dansk
                Retriever Klub. Derudover er hun en pragtfuld familiehund. Nana
                har bestået brugsprøven og har været på flere uofficielle green
                working-tests. En enkelt fasanjagt er det også blevet til. Hun
                er god til at håndtere vildt, både i træning med døde (kolde)
                fugle og på jagt. Vi har arbejdet særligt meget med at lære
                hende at bevare roen. Hun er en ivrig hund, og bliver hun sat af
                i nogen situationer kan hun ryste af spænding, indtil det bliver
                hendes tur. Derfor er hanhunden til første kuld valgt fra en
                linje, hvor man i opdrættet mange led tilbage har lagt særlig
                vægt på, at hunden kan bevare roen i selv de mest spændende
                situationer.
              </p>
            </div>
            <ImageContainer
              fluid={data.profil.childImageSharp.fluid}
              originalImg={data.profil.childImageSharp.originalImg}
            />
          </Grid>
          <Grid>
            <ImageContainer
              fluid={data.stamtavle.childImageSharp.fluid}
              originalImg={data.profil.childImageSharp.originalImg}
            />
            <p>
              Nana’s primære opgave er dog at være familiehund, hvilket hun er
              fantastisk til. Katte, små børn, babyer, store heste og kæmpe
              maskiner – alt tager hun med ro og følger glad med familien hvor
              end vi er. Bliver børnene for meget, afleder hun dem ved at slikke
              dem i ansigtet – så stopper de... Vi har aldrig oplevet, at Nana
              bliver bange for noget, hverken at være alene hjemme (heller ikke
              fremmede steder f.eks. på ferie), eller høje lyde som f.eks. fx
              fyrværkeri – måske grundet jagttræningen med hundeprop. Af samme
              årsag har vi ej heller oplevet, at Nana har været aggressiv. Se et
              galleri med billeder af Nana her.
              <StyledInternallink to="/NanaGalleri">
                Se et større galleri med billeder af Nana her.
              </StyledInternallink>
            </p>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

export default Bitch;
