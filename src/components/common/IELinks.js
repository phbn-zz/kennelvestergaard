import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const HeaderLoader = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const NavItem = styled.a`
  a {
    text-decoration: none;
    opacity: 0.7;
    color: ${props => props.theme.color.black.regular};
    margin-right: 20px;
    animation: ${HeaderLoader} 2s 0s;
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
