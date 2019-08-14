import React from 'react';
import styled from 'styled-components';
import {
  Section,
  Container,
  HeaderText,
  InnerDiv,
  StyledHyperlink,
  HeaderDivider
} from '@components/global';

const Terms = () => (
  <Section id="købsaftale" accent="secondary">
    >
    <Container>
      <InnerDiv>
        <HeaderText>Købsaftale</HeaderText>

        <p>
          Vi afbenytter Dansk Kennel Klubs’s købsaftale. Udover dette indbetales
          et depositum på 2.500 kr. ved reservation af hvalp. Fortryder man imod
          forventning købet, tilbagebetales 2.000 kr.{' '}
          <StyledHyperlink href="https://www.dkk.dk/uploads/documents/Om-DKK/Blanketter/købsaftale.pdf">
            Dansk Kennel Klub's købsaftale kan læses her.
          </StyledHyperlink>
        </p>
      </InnerDiv>
    </Container>
  </Section>
);

export default Terms;
