import React from 'react';
import styled from 'styled-components';
import paws from '../../images/art/paws.svg';

import { Container, HeaderText } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Grid>
        <img src={paws} alt="paws" />
        <Text>
          <HeaderText>
            Vores hunde er avlet efter Dansk Retriever Klub og Dansk Kennel
            Klubs avlsanbefalinger.
          </HeaderText>
          <br />
          <p>
            <ExternalLink href="hvalpe">
              Se vores kuld &nbsp;&#x2794;
            </ExternalLink>
          </p>
        </Text>
      </Grid>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

export default Header;
