import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import NavbarSecondpage from '../components/common/Navbar/NavBarSecondPages';

import Layout from '@common/Layout';
import {
  Container,
  HeaderTextNonGrid,
  HeaderDivider,
  InnerDiv
} from '@components/global';

const Development = () => (
  <Layout>
    <NavbarSecondpage />
    <HeaderWrapper>
      <Container accent="secondary">
        <InnerDiv>
          <HeaderTextNonGrid>
            Hundens fysiske og psykiske udvikling.
          </HeaderTextNonGrid>
          <HeaderDivider />
          <p>
            Udviklingen kan være interessant i forhold til din hunds opførsel,
            som både er arveligt betinget, men også i væsentlig grad
            miljøbetinget.
            <br />
            Hvalpen er meget modtagelig for indlæring til den er 12 uger gammel,
            denne periode vil præge resten af dens liv. Dermed ikke sagt at
            hunden stopper med at lære noget nyt. Læringen er er proces, som
            fortsætter hele livet. <br />
            <br />
            0-2 uger <br />
            Fødsel/omstilling <br />
            <br />
            Primært spise og holde sig varm. Nærkontakt med mor og søskende.
            Reagerer på kulde, varme og duft. Stærk prægning på duft. 2-3 uger
            Sanseudvikling Syn, hørelse og balancesans (at kunne gå) udvikles og
            trænes i denne periode. <br />
            <br />
            3-5 uger <br />
            Flokprægning <br />
            <br />
            Prægningen på mennesker og hunde er meget vigtigt i denne periode.
            Bliver nysgerrig og kontaktsøgende. Hvalpen søger ud på egen hånd.
            Agtpågivende og lettere nervøs. Der opstår blivende
            erindringsbilleder. Egentlig indlæring er mulig. <br />
            <br />
            5-7 uger <br />
            Social tilpasning
            <br />
            <br /> Hvalpen finder sin plads i kuldet. Moderen udøver sin
            førerrolle. Interesse for lugte og ting, der bevæger sig
            (byttedrift) udvikles. Prægning og socialisering fortsat meget
            vigtigt. <br />
            <br />
            7-12 uger
            <br /> ”Leder”-prægning Sociale regler indarbejdes. <br />
            <br />
            Positiv lederprægning er vigtigt. Afvænning fra moderen begynder
            langsomt. Renlighedstræning er nu godt i gang. Prægning og
            socialisering fortsat meget vigtig. <br />
            <br />
            3-4 mdr. <br />
            Halv kønsmodning <br />
            <br />
            Mulig problemperiode. Forøget dominans og aggressivitet (pga. øget
            produktion af maskulint kønshormon). Vil finde sin plads i
            rangordenen. Hvalpen skal hjælpes til at finde sin plads i familien
            (venligt). Prægning og socialisering fortsat vigtig. 4-7 mdr. Rolig
            periode Rammerne skal ligge fast nu. Sværhedsgraden af træningen kan
            øges. Socialisering og miljøtræning vigtigt. 7-10 mdr. Fysisk
            kønsmodning (Hav tålmodighed i denne periode) Mulig problemperiode.
            Løbetid/lette ben. Ukoncentreret og glemsom. Tæver er følsomme og
            skal ikke trænes for meget i denne periode. Hunde, der ikke har fået
            sat grænser, kan i denne periode give problemer. Socialisering og
            miljøtræning fortsat vigtig. <br />
            <br />
            10-17 mdr. <br />
            Rolig periode <br />
            <br />
            God indlæringsperiode. Socialisering og miljøtræning fortsat vigtig.
            <br /> <br />
            17-22 mdr. <br />
            Psykisk modning <br />
            <br />
            Dominans kan bliver mere udpræget. Dominante hunde, der ikke har
            fået sat grænser, kan udvikle sig til problemhunde. Godt tilpassede
            hunde giver ingen problemer. <br />
            <br />
            22 mdr. – 5-8 år.
            <br /> Den voksne hund <br />
            <br />
            Har man gjort forarbejdet godt, er disse år gode, stabile år.
            Samarbejde og træning kan nå store højder. Hvis konflikterne er
            løst, vil hverdagen fungere godt. Hunden skal fortsat simuleres med
            træning og oplevelser. <br />
            <br />9 år - ? <br />
            Alderdom <br />
            <br />
            Denne periode er kendetegnet ved nedsatte fysiske funktioner hos
            hunden. Vær særlig opmærksom på overvægt, muskelsvind, nedsat syn,
            tandpleje og gigt. Motion skal tilpasses hunden, men den skal holdes
            i gang. Husk også at stimulere hunden mentalt med små opgaver og nye
            indtryk på gåturen. Inspireret af Dansk Retriever Klub
            <br />
            <br />
          </p>
          <Link to="/">Go back to the homepage</Link>
        </InnerDiv>
      </Container>
    </HeaderWrapper>
  </Layout>
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.dark};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

export default Development;
