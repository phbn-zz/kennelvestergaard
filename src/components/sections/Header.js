import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import {
  Container,
  HeaderText,
  HeaderListItem,
  HeaderDivider
} from '@components/global';
import { InternalLink, InternalPageLink } from '@common/IELinks';

const SellingPoints = [
  'Vores hvalpe er født og opdrættet med sundhed og trivsel i fokus',
  'Hvalpene har start på livet i rolige landlige omgivelser, med børn og andre dyr omkring sig',
  'Er avlet fra gode jagtlinjer, både tæve og hanhund'
];

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          sourceInstanceName: { eq: "nana" }
          name: { eq: "P5033424" }
        ) {
          childImageSharp {
            fluid(
              maxWidth: 2000
              maxHeight: 1100
              cropFocus: CENTER
              quality: 90
              duotone: { highlight: "#F6F6F6", shadow: "#a1a1a1" }
            ) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <HeaderWrapper fluid={imageData}>
          <Container>
            <Grid>
              <Text>
                <HeaderText colormind>
                  Vores hunde er avlet efter Dansk Retriever Klubs og Dansk
                  Kennel Klubs avlsanbefalinger
                </HeaderText>
                <br />
                <Links>
                  <p>
                    <InternalLink href="tæve">
                      Om tæven &nbsp;&#x2794;
                    </InternalLink>
                  </p>
                  <p>
                    <InternalPageLink href="/Prius">
                      Om hanhunden &nbsp;&#x2794;
                    </InternalPageLink>
                  </p>
                  <p>
                    <InternalLink href="første kuld 2019">
                      Første kuld &nbsp;&#x2794;
                    </InternalLink>
                  </p>
                </Links>
              </Text>
              <InsideGridDiv>
                <HeaderDivider />
                <List>
                  {SellingPoints.map((point, index) => {
                    const delayCalc = 2 + index;
                    const delay = delayCalc.toString();
                    return (
                      <HeaderListItem delay={`${delay}s`}>
                        {point}
                      </HeaderListItem>
                    );
                  })}
                </List>
                <HeaderDivider />
              </InsideGridDiv>
            </Grid>
          </Container>
        </HeaderWrapper>
      );
    }}
  />
);

const HeaderWrapper = styled(BackgroundImage)`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }

  width: 100%;
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
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

const List = styled.ul`
  text-decoration-style: none;
  list-style-type: none;
  text-align: justify;
  font-family: ${props => props.theme.font.headers};
  color: ${props => props.theme.color.black.roundedDark};
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: '#F6F6F6';
`;

const InsideGridDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 75px;
  margin-top: 75px;

  @media (max-width: ${props => props.theme.screen.md}) {
    margin-top: 0px;
  }
`;

const Text = styled.div`
  justify-content: center;
  margin-top: 75px;
  margin-bottom: 75px;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
    margin-bottom: 0px;
  }
`;

const Links = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;

  @media (max-width: ${props => props.theme.screen.md}) {
    flex-direction: column;
  }
`;

export default Header;
