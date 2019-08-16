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
          Vi benytter Dansk Kennel Klub’s købsaftale. I forbindelse med
          reservation af hvalp indbetales et depositum på 2.500 kr. Fortryder
          man imod forventning reservationen, tilbagebetales 2.000 kr.
          <br />
          Indbetaling til konto i Sparekassen Sjælland -Fyn reg nr 9886 - konto
          nr. 0000345267 med angivelse af navn på hvalp. <br />
          <StyledHyperlink href="https://www.dkk.dk/uploads/documents/Om-DKK/Blanketter/købsaftale.pdf">
            Dansk Kennel Klub's købsaftale kan læses her.
          </StyledHyperlink>
        </p>
      </InnerDiv>
    </Container>
  </Section>
);

export default Terms;
