import React from 'react';
import styled from 'styled-components';

import {
  Section,
  Container,
  Grid,
  HeaderText,
  StyledHyperlink,
  Divider,
  SubHeader
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
            Vi bor i udkanten af Herfølge, på et mindre husmandssted hvor Nana
            for det meste bevæger sig frit rundt. Udover Nana har vi katte og
            heste. Hvalpe besøgstid lørdag mellem kl. 10 – 12. Evt. efter aftale
            hvis det er helt umuligt.
          </p>
          <br />
          <p>
            Kontakt: <br />
            Tessebøllevej 49, 4681 Herfølge <br />
            Mai-Britt 30461724 <br />
            maibritt.vestergaard83@gmail.com{' '}
          </p>
        </div>
        <InsideGridDiv>
          <SubHeader>Diverse links</SubHeader>
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
        </InsideGridDiv>
      </Grid>
    </Container>
  </Section>
);

const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid '#000';
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.16);
  width: 120%;
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

const p1 = styled.p`
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.light};
  text-align: justify;
`;

const InsideGridDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  justify-content: center;
  align-items: center;
`;

export default About;
