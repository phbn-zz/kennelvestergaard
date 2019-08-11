import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const getRandomColor = alpha => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = 200;
  let a = alpha;
  return `rgba(${r},${g},${b},${a})`;
};

const HeaderLoader = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 128px 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 96px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  justify-items: center;
  margin: 24px 0;
  padding-bottom: 24px;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export const HeaderText = styled.h2`
  font-size: 40px;
  animation: ${HeaderLoader} 2s 0s;
  font-family: ${props => props.theme.font.headers};
  color: ${props => props.theme.color.black.roundedDark};
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: '#F6F6F6';
`;

export const SubHeader = styled.h3`
  font-size: 30px;
  animation: ${HeaderLoader} 2s 0s;
  font-family: ${props => props.theme.font.headers};
  color: ${props => props.theme.color.black.roundedDark};
`;

export const HeaderListItem = styled.li`
  margin: 10px;
  opacity: 0;
  font-size: 20px;
  animation-name: ${HeaderLoader};
  animation-duration: 4s;
  animation-delay: ${props => props.delay};
  animation-fill-mode: forwards;
  font-family: ${props => props.theme.font.headers};
  color: ${props => props.theme.color.black.roundedDark};
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: '#F6F6F6';
`;

export const Divider = styled.hr`
  display: flex;
  border: none;
  height: 4px;
  background-color: #a25666;
  width: 65%;
  margin-top: 15px;
  margin-bottom: 15px;

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
  }

  ${props => (props.inverse ? 'margin-left: 0;' : 'margin-right: 0;')}
`;

export const HeaderDivider = styled.hr`
  display: flex;
  border: none;
  height: 4px;
  background-color: ${props => props.theme.color.brandBlue};
  opacity: 0.8;
  width: 70%;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const StyledHyperlink = styled.a`
  cursor: pointer;
  color: ${props => props.theme.color.orange};
  display: inline-block;
  position: relative;
  text-decoration: none;

  &:before {
    background-color: ${props => props.theme.color.orange};
    content: '';
    height: 2px;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
    width: 100%;
  }
  &:hover {
    &:before {
      width: 0%;
    }
  }
`;

export const StyledInternallink = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.color.orange};
  display: inline-block;
  position: relative;
  text-decoration: none;

  &:before {
    background-color: ${props => props.theme.color.orange};
    content: '';
    height: 2px;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
    width: 100%;
  }
  &:hover {
    &:before {
      width: 0%;
    }
  }
`;
