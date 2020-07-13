import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  margin: 0;
  background-color: rgba(255, 255, 255, .3);
  width: 90vw;
  min-width: 625px;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainText = styled.p`
  margin: 0;
  font-size: 35px;
  font-weight: bolder;
`;

const SubText = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: bolder;
`;

const Email = styled.a`
`;

const Contact = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Div>
          <MainText>Mid-South Concrete and Construction</MainText>
          <SubText>2300 8th Avenue South, Apt 506</SubText>
          <SubText>Nashville, TN 37204</SubText>
          <SubText>(615) 414-8206</SubText>
          <Email href='mailto: shanecliddell@gmail.com'>Email Us</Email>
        </Div>
      </header>
    </div>
  );
};

export default Contact;