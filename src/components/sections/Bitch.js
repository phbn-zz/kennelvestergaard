import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ImageContainer from '../common/ImageContainer';

import { Section, Container, Grid } from '@components/global';

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
            }
          }
        }

        stamtavle: file(
          sourceInstanceName: { eq: "nana" }
          name: { eq: "P5033424" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
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
              <h2>Nana</h2>
              <p>
                Nana er en energiske hund, hun er altid glad og imødekommende
                både overfor mennesker og dyr. Hun er en klog hund, som er
                lærernem og har et ustoppeligt drive – hun bliver ved, så det
                har været vores opgave at vurdere hvornår det var tid til at
                tage en pause. Hun er trænet i jagt hos Danske Retriever klub,
                derudover almindelig familiehund lydighed og nosework. Nana har
                bestået brugsprøven, og været på flere uofficielle green
                workingtest, en enkelt fasanjagt er det da også blevet til. Hun
                er god til at håndtere vildt, både i træning med døde (kolde)
                fugle, og på jagt. Hendes største udfordring har været at bevare
                roen, i siturationer hvor hun skal sidde og vente kan hun godt
                sidde og ryste, indtil det bliver hendes tur. Det har været
                noget vi har arbejdet meget med. Derfor er hanhunden valgt udfra
                en linje hvor man har lagt særlig vægt på at hundene kan bevare
                roen i selv de meste spændene situationer.
              </p>
            </div>
            <ImageContainer fluid={data.profil.childImageSharp.fluid} />
          </Grid>
          <Grid>
            <ImageContainer fluid={data.stamtavle.childImageSharp.fluid} />
            <p>
              Nanas største opgave er dog at være familiehund, hvilket hun er
              fantastisk til. Katte, små børn, babyer, store heste og kæmpe
              maskiner – alt tager hun med ro og følger glad familien hvor end
              vi er. Bliver pigerne for meget, afleder hun dem ved at slikke dem
              i ansigtet – så stoppe de.. Hun slikker meget, så det er nok noget
              man skal have fokus på fra starten hvis man synes det er
              irriterende. Vi har aldrig oplevet at Nana er bang for noget,
              hverken at være alene hjemme (heller ikke fremmede steder fx på
              ferie), høje lyde som fx fyrværkeri er heller ikke noget hun
              reagere på – kan evt. skyldes jagt træningen med hundeprop. Det
              var heller ikke svært at få Nana gjort renlig, da hun var hvalp,
              vi havde også sat 4 ugers ferie af til at få hendes på plads i
              hjemmet.
            </p>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

export default Bitch;
