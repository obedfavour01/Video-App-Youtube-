import React from 'react'
import styled from 'styled-components'
import card from '../images/cardImage.PNG'
import channelImage from '../images/ChannelImage.png'
import { Link } from 'react-router-dom'


const Container = styled.div`
width: ${(props) => props.Type !== "sm" && "360px"};
margin-bottom: ${(props) => props.Type === "sm" ? "10px" : "45px"};
cursor: pointer;
display: ${(props) => props.Type === "sm" && "flex"};
gap: 10px;
`

const Image = styled.img`
width: 100%;
 height : ${(props) => props.Type === "sm" ? "120px" : "202px"};
background-color: #999;
cursor: pointer;
flex: 1;
`

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.Type !== "sm" && "16px"};
  gap: 12px;
  flex:1;

`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #999;
  object-fit: cover;
  object-position: top left;
  display : ${(props) => props.Type === 'sm' && "none"};
`

const Texts = styled.div``
  const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
  `
  const ChannelName = styled.h1`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
  margin: 9px 0;

  `
  const Info = styled.div`
  color: ${({theme}) => theme.text};
  font-size: 12px;
  `


const Cards = ({type}) => {
  return (
    <Link to = '/video/test' style={{textDecoration: "none",color: 
    "inherit"}}>
    <Container Type = {type}>
      <Image src= {card} Type = {type}/>
      <Details Type = {type}>
        <ChannelImage src = {channelImage} Type = {type}/>

        <Texts>
        <Title>Test Video</Title>
        <ChannelName>Pastey</ChannelName>
        <Info>1.6M views <> &#183;</> 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Cards