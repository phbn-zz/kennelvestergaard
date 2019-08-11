import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import {
  Container,
  HeaderText,
  Divider,
  StyledInternallink,
  HeaderListItem
} from '@components/global';
import { InternalLink, InternalPageLink } from '@common/IELinks';
const SellingPoints = [
  'Vores hvalpe er født og opdrættet med sundhed og trivsel i fokus',
  'Hvalpe der har start på livet i rolige landlige omgivelser, med børn og andre dyr omkring sig',
  'Hvalpe der er fra gode jagtlinjer, både tæve og hanhund'
];

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "header" }
        ) {
          childImageSharp {
            fluid(
              quality: 90
              maxWidth: 4160
              duotone: { highlight: "#F6F6F6", shadow: "#a1a1a1" }
            ) {
              ...GatsbyImageSharpFluid_withWebp
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
                  Vores hunde er avlet efter Dansk Retriever Klub og Dansk
                  Kennel Klubs avlsanbefalinger.
                </HeaderText>
                <br />
                <Links>
                  <InternalLink href="tæve">
                    Om tæven &nbsp;&#x2794;
                  </InternalLink>
                  <InternalPageLink href="/Prius">
                    Om hanhunden &nbsp;&#x2794;
                  </InternalPageLink>
                  <InternalLink href="første kuld 2019">
                    Første kuld &nbsp;&#x2794;
                  </InternalLink>
                </Links>
              </Text>
              <InsideGridDiv>
                <HeaderText colormind>Første kuld 2019</HeaderText>
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
  background-position: bottom center;
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

const Links = styled.p`
  display: flex;

  @media (max-width: ${props => props.theme.screen.md}) {
    flex-direction: column;
  }
`;

export default Header;

// <UpDown>
//           <SVG
//             icon="triangle"
//             hiddenMobile
//             width={48}
//             stroke
//             color="icon_orange"
//             left="10%"
//             top="20%"
//           />
//           <SVG
//             icon="hexa"
//             width={48}
//             stroke
//             color="icon_red"
//             left="60%"
//             top="70%"
//           />
//           <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
//         </UpDown>
//         <UpDownWide>
//           <SVG
//             icon="arrowUp"
//             hiddenMobile
//             width={16}
//             color="icon_blue"
//             left="80%"
//             top="10%"
//           />
//           <SVG
//             icon="triangle"
//             width={12}
//             stroke
//             color="icon_brightest"
//             left="90%"
//             top="50%"
//           />
//           <SVG icon="paw" width={16} color="icon_darker" left="70%" top="90%" />
//           <SVG
//             icon="triangle"
//             width={16}
//             stroke
//             color="icon_darkest"
//             left="30%"
//             top="65%"
//           />
//           <SVG
//             icon="cross"
//             width={16}
//             stroke
//             color="icon_pink"
//             left="28%"
//             top="15%"
//           />
//           <SVG icon="paw" width={6} color="icon_darkest" left="75%" top="10%" />
//           <SVG
//             icon="upDown"
//             hiddenMobile
//             width={8}
//             color="icon_darkest"
//             left="45%"
//             top="10%"
//           />
//         </UpDownWide>
//         <SVG icon="paw" width={6} color="icon_darkest" left="4%" top="20%" />
//         <SVG icon="paw" width={12} color="icon_darkest" left="50%" top="60%" />
//         <SVG
//           icon="upDown"
//           width={8}
//           color="icon_darkest"
//           left="95%"
//           top="90%"
//         />
//         <SVG
//           icon="upDown"
//           hiddenMobile
//           width={24}
//           color="icon_darker"
//           left="40%"
//           top="80%"
//         />
//         <SVG
//           icon="triangle"
//           width={8}
//           stroke
//           color="icon_darker"
//           left="25%"
//           top="5%"
//         />
//         <SVG icon="paw" width={64} color="icon_green" left="95%" top="5%" />
//         <SVG
//           icon="box"
//           hiddenMobile
//           width={64}
//           color="icon_purple"
//           left="5%"
//           top="90%"
//         />
//         <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
//         <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
//         <SVG
//           icon="hexa"
//           width={16}
//           stroke
//           color="icon_darker"
//           left="10%"
//           top="50%"
//         />
//         <SVG
//           icon="hexa"
//           width={8}
//           stroke
//           color="icon_darker"
//           left="80%"
//           top="70%"
//         />
