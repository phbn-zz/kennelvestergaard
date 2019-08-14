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
                været vores opgave, at vurdere hvornår det var tid til at tage
                en pause. Hun er trænet i jagt hos Danske Retriever Klub.
                Derudover er hun en pragtfuld almindelig familiehund med
                lydighed og nosework. Nana har bestået brugsprøven, og været på
                flere uofficielle green workingtests, og en enkelt fasanjagt er
                det da også blevet til. Hun er god til at håndtere vildt, både i
                træning med døde (kolde) fugle, og på jagt. Hendes største
                udfordring har været at bevare roen. I situationer hvor hun skal
                sidde og vente, kan hun godt ryste, indtil det bliver hendes
                tur. Det har været noget vi har arbejdet meget med. Derfor er
                hanhunden valgt udfra en linje, hvor man har lagt særlig vægt på
                at hundene kan bevare roen i selv de meste spændene situationer.
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
              Nanas primære opgave er dog at være familiehund, hvilket hun er
              fantastisk til. Katte, små børn, babyer, store heste og kæmpe
              maskiner – alt tager hun med ro og følger glad familien hvor end
              vi er. Bliver pigerne for meget, afleder hun dem ved at slikke dem
              i ansigtet – så stopper de... Hun slikker meget, så det er nok
              noget man skal have fokus på fra starten, hvis man synes det er
              irriterende. <br />
              Vi har aldrig oplevet at Nana bliver bange for noget, hverken at
              være alene hjemme (heller ikke fremmede steder f.eks. på ferie),
              eller høje lyde som f.eks. fx fyrværkeri – måske grundet
              jagttræningen med hundeprop. Det var heller ikke svært at få Nana
              gjort renlig, da hun var hvalp. Vi havde dog sat 4 ugers ferie af
              til at få hendes på plads i hjemmet.
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
