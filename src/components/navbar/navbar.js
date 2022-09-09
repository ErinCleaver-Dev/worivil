import React from 'react'
import styled from 'styled-components'
import profile from '../../images/profile.jpg'
const Header = styled.div`
    background-color: #2a1d4c;
    display: flex;
    justify-content: center;
    padding: 10px 0; 
    align-items: center;
    flex-wrap: wrap;
`

const Image =styled.div`
    background: url(${profile});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #cccccc;
    border-radius: 50%;
    color: white;
    height: 150px;
    width: 150px;
`

const Title = styled.h1`
    color: white;
    padding-left: 5%;
    text-align: center;
    font-size: 3.5em;

`

const Navbar = () => {
  return (
    <Header>
        <Image/>
        <Title>
            Worivils Art and Design
        </Title>
    </Header>
  )
}

export default Navbar