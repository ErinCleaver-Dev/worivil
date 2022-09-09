import React from 'react' 
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import {SiTiktok, SiYoutube, SiInstagram, SiFiverr} from 'react-icons/si'
import Navbar from '../components/navbar/navbar'


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
            <title>Worivils Art and Design</title>
            <meta name="description" content="A place to hold my art Soical media websites"/>
            <meta name="keywords" content="Art, Drawing, Sketch, Painting, How to, Tiktok, Youtube, Youtuber, artist, Fivver"/>
        </Helmet>
        <Navbar/>
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
                <Link href="https://www.instagram.com/worivil/">
                    <SiInstagram/>
                    Instagram
                </Link>
                <Link href="https://www.fiverr.com/worivilisakin">
                    <SiFiverr/> Worivil Isakin
                </Link>
            </SocialMedia>

        </Container>

    </>
  )
}

export default Home