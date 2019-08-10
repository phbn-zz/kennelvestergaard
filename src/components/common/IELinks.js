import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavItem = styled.a`
  a {
    margin-right: 20px;
    text-decoration: none;
    opacity: 0.7;
    color: ${props => props.theme.color.black.regular};
    font-size: ${props => props.theme.font_size.large}
  }

  &:hover {
    a {
      opacity: 1;
    }
  }
`;

export const InternalLink = ({ href, children, ...other }) => (
  <NavItem>
    <AnchorLink href={`#${href.toLowerCase()}`}>{children}</AnchorLink>
  </NavItem>
);

export const InternalPageLink = ({ href, children, ...other }) => (
  <NavItem>
    <Link to={href}>{children}</Link>
  </NavItem>
);
