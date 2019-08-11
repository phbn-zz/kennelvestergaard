import React from 'react';
import styled from 'styled-components';
import {
  Section,
  Container,
  HeaderText,
  Divider,
  StyledHyperlink
} from '@components/global';

const Terms = () => (
  <Section id="købsaftale" accent="secondary">
    >
    <Container>
      <div>
        <HeaderText>Købsaftale</HeaderText>

        <p>
          Vi benytter DKK’s købsaftale, dog betales der et depositum på kr.
          2.500 ved reservation af hvalp. Fortryder man mod forventning købet,
          tilbagebetales 2.000 kr.{' '}
          <StyledHyperlink href="https://www.dkk.dk/uploads/documents/Om-DKK/Blanketter/købsaftale.pdf">
            Dansk Kennel Klubs Købsaftale kan læses her.
          </StyledHyperlink>
        </p>
      </div>
    </Container>
  </Section>
);

export default Terms;
