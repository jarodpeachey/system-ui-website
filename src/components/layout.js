import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBolt,
  faQuestionCircle,
  faFeather,
  faCog,
  faGlobe,
  faTimes,
  faChevronDown,
  faUser,
  faDollarSign,
  faBell,
  faCheck,
  faHeart,
  faExclamationCircle,
  faChevronRight,
  faChevronLeft,
  faBoxes,
  faPalette,
  faMousePointer,
} from '@fortawesome/free-solid-svg-icons';
import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Header from '../system-components/Header';
import H1 from '../system-components/H1';
import { theme } from './theme';
import './style.css';

library.add(
  faQuestionCircle,
  faFeather,
  faCog,
  faGlobe,
  faTimes,
  faCheck,
  faChevronDown,
  faUser,
  faBell,
  faDollarSign,
  faHeart,
  faExclamationCircle,
  faChevronRight,
  faChevronLeft,
  faBoxes,
  faPalette,
  faMousePointer,
  fab,
  faTwitter,
);

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header color="white" height={100}>
        <H1
          customStyles={
            'font-size: 24px; @media(min-width: 769px){font-size: 30px;} position: relative; top: -1px;'
          }
          className="m-none"
        >
          SystemUI
        </H1>
      </Header>
      <>{children}</>
    </Wrapper>
  </ThemeProvider>
);

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.heading};
`;

export default Layout;
