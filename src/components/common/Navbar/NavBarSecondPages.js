import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import FacebookIcon from '@static/icons/facebook.svg';
import arrowBack from '@static/icons/arrowBack.svg';

import { Nav, Brand, StyledContainer } from './style';

class NavbarSecondpage extends Component {
  render() {
    return (
      <Nav {...this.props}>
        <StyledContainer>
          <BrandContainer>
            <BrandLink>
              <Brand>Kennel Vestergaard</Brand>
            </BrandLink>
            <SocialIcons>
              <a href={'https://www.facebook.com/NanaFlatcoatedRetriever/'}>
                <img src={FacebookIcon} alt="link" />
              </a>
            </SocialIcons>
          </BrandContainer>

          <Link to="/">
            <LinkContainer>
              <SocialIcons>
                <img src={arrowBack} alt="link" />
              </SocialIcons>
            </LinkContainer>
          </Link>
        </StyledContainer>
      </Nav>
    );
  }
}

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialIcons = styled.div`
  a {
    text-decoration: none;
    opacity: 0.7;
    color: ${props => props.theme.color.white.regular};
  }

  &:hover {
    a {
      opacity: 1;
    }
  }

  img {
    margin: 9px;
    width: 24px;
    height: 24px;
  }
`;

const BrandLink = styled(Link)`
  text-decoration: none;
`;


export default NavbarSecondpage;
