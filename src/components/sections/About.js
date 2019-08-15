import React from 'react';
import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  HeaderText,
  StyledHyperlink
} from '@components/global';

const Links = [
  {
    link: 'http://www.flatcoat.dk/planlagte-kuld',
    name: 'Vores Planlagte kuld'
  },
  { link: 'http://www.flatcoat.dk', name: 'FlatCoat.dk' },
  {
    link:
      'http://www.flatcoat.dk/upl/website/download/AvlsanbefalingerforFlatcoatedRetriever.pdf',
    name: 'Avlsanbefalinger for Flatcoated Retriever'
  },

  {
    link: 'https://www.dansk-retriever-klub.dk/',
    name: 'Dansk Retriever Klub'
  },
  {
    link: 'https://www.hundeweb.dk/dkk/public/openIndex?ARTICLE_ID=1',
    name: 'HundeWeb'
  },
  { link: 'https://www.dkk.dk/', name: 'Dansk Kennel Klub' }
];

const About = () => (
  <Section id="om os">
    <Container>
      <Grid inverse>
        <div>
          <HeaderText>Om os</HeaderText>
          <p>
            Vi bor i udkanten af Herfølge på et mindre husmandssted, hvor Nana
            for det meste bevæger sig frit rundt, inde og ude. Udover Nana har
            vi katte og heste. Besøgstid for hvalpene er lørdage mellem kl. 10 –
            12. Herudover efter aftale.
          </p>
          <br />
          <p>
            Kontakt: <br />
            Tessebøllevej 49, 4681 Herfølge <br />
            Mai-Britt 30 46 17 24 <br />
            maibritt.vestergaard83@gmail.com{' '}
          </p>
        </div>
        <div>
          <HeaderText>Diverse links</HeaderText>
          <List>
            {Links.map(link => {
              return (
                <ListItem>
                  <StyledHyperlink href={link.link}>
                    {link.name}
                  </StyledHyperlink>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Grid>
    </Container>
  </Section>
);

const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
  :first-child {
    border-top: none;
  }
`;

export default About;
