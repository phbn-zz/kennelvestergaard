import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

const NavItem = styled.a`
  a {
    text-decoration: none;
    opacity: 0.7;
    color: ${props => props.theme.color.black.regular};
  }

  &:hover {
    a {
      opacity: 1;
    }
  }
`;

const ExternalLink = ({ href, children, ...other }) => (
  <NavItem>
    <AnchorLink href={`#${href.toLowerCase()}`}>{children}</AnchorLink>
  </NavItem>
);

export default ExternalLink;
