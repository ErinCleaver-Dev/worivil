import React from 'react' 
import profile from '../images/profile.jpg'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import {SiTiktok, SiYoutube, SiInstagram, SiFiverr} from 'react-icons/si'

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0% auto;
    max-width: 1500px;
    height: 90vh;
`
const SocialMedia = styled.div`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`

const Link = styled.a`
    margin: 10px;
    background-color: darkblue;
    color: white;

    font-size: 1.45em;
    padding: 10px;
    text-decoration: none;
    border-radius: 10px;    
    &:hover {
        background-color: #1c1c3e;
    }
`

const Subtitle = styled.h2`

`

const About = styled.div`
    font-size: 1em;
    max-width: 1250px;
    border: 3px solid black;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    
    text-align: center;
    
`



const Home = () => {
  return (
    <>
        <Helmet>
            <title>Worivil isakin - Worivils Art and Design</title>
            <meta name="description" content="A place to hold my art Soical media websites"/>
            <meta name="keywords" content="Art, Drawing, Sketch, Painting, How to, Tiktok, Youtube, Youtuber, artist, Fivver"/>
        </Helmet>
        <Header>
            <Image/>
            <Title>
                Worivils Art and Design
            </Title>
        </Header>
        <Container>
            <About>
                <Subtitle>About</Subtitle>
                My hobbies are drawing art based on games and doing art studies of those game.  This is a website for hosting my links to my  social midea accounts for my youtube, tiktok, instagram, and fiverr account.
            </About>
            <SocialMedia>
               <Link href="https://www.tiktok.com/@worivilisakin">
                    <SiTiktok/>
                    worivilisakin
                </Link> 
                <Link href="https://www.youtube.com/channel/UCHjK_aqP5RzX2BASkOOLK_g">
                    <SiYoutube/>
                    The Study of Gmaing Art and Design
                </Link>
   
                <Link href="https://www.artstation.com/worivilisakin8">
                    Worivil's Art Station
                </Link> 
                <Link hrefs="https://www.instagram.com/worivil/">
                    <SiInstagram/>
                    Worivil's Gaming - Youtuber
                </Link>
                <Link hrefs="https://www.fiverr.com/worivilisakin">
                    <SiFiverr/> Worivil Isakin
                </Link>
            </SocialMedia>

        </Container>

    </>
  )
}

export default Home