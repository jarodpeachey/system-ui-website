import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Hero = ({ children, className, id, customStyles, background }) => (
  <Wrapper customStyles={customStyles} className={className} id={id}>
    <Background background={background}>
      <div />
    </Background>
    <Container>
      <div>{children}</div>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  padding: 120px 0;
  ${(props) => props.customStyles}
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  div {
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    background: ${(props) => props.background};
  }

  z-index: -1;
`;

// const Container = styled.div`
//   overflow: hidden;
//   margin: 0 auto;
//   z-index: 0;
// `;

const Close = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export default Hero;
