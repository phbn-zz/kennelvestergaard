import React, { Component } from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';

import FacebookIcon from '@static/icons/facebook.svg';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = [
  'Første Kuld 2019',
  'Om din hvalp',
  'Tæve',
  'Købsaftale',
  'Om os'
];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <BrandContainer>
            <BrandLink to="/">
              <Brand>Kennel Vestergaard</Brand>
            </BrandLink>
            <SocialIcons>
              <a href={'https://www.facebook.com/NanaFlatcoatedRetriever/'}>
                <img src={FacebookIcon} alt="link" />
              </a>
            </SocialIcons>
          </BrandContainer>

          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

const BrandContainer = styled.div`
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

export default Navbar;
