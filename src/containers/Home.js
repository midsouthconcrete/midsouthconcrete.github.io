import React from 'react';
import '../App.css';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  margin: 0;
  background-color: rgba(255, 255, 255, .3);
  width: 70vw;
  min-width: 625px;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainText = styled.p`
  margin: 0;
  font-size: 45px;
  font-weight: bolder;
`;

const SubText = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: bolder;
`;

const List = styled.ul`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const ListItem = styled.li`
`;

const Home = (props) => {

  return (
    <div className="App">
      <header className="App-header">
        <img className='home-background' alt='' src={props.homeImg} />
        <Div>
          <MainText>Mid-South Concrete Design</MainText>
          <SubText>Specializing In:</SubText>
          <List>
            <ListItem>Residential</ListItem>
            <ListItem>Commercial</ListItem>
            <ListItem>New Construction</ListItem>
            <ListItem>Additions</ListItem>
          </List>
        </Div>
      </header>
    </div>
  );
};

export default Home;