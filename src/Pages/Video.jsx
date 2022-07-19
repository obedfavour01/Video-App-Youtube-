import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined"
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined"
import channelImage from '../images/ChannelImage.png'
import Comments from '../components/Comments';

const Container = styled.div`
  display: flex;
  gap: 24px;

`
const Content = styled.div`
flex:5;
`

const VideoWrapper = styled.div``
const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({theme}) => theme.text};

`
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const Info = styled.div`
color: ${({theme}) => theme.textSoft};

`
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({theme}) => theme.text};

`
const Button = styled.button`
display: flex;
align-items: center;
gap: 5px;
cursor:pointer;
background: transparent;  
color: ${({theme}) => theme.text};
border : none;
`

const Hr = styled.hr`
margin: 15px 0;
  border: 0.2px solid ${({theme}) => theme.soft};
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  
`

const Image = styled.img`
height: 36px;
width: 36px;
object-fit: cover;
`
  
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({theme}) => theme.text};

`
const ChannelName = styled.span`
font-weight: 500;

`
const ChannelCounter = styled.span`
font-size: 12px;
margin-top: 5px;
margin-bottom: 20px;
color: ${({theme}) => theme.textSoft};

`
const Description = styled.p`
  font-size: 14px;
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  padding: 10px 20px;
  color: white;
  border: none;
  height: max-content;
`
const Recommendation = styled.div`
flex:2;
`
const Video = () => {
  return (
    <Container>
      <Content>
          <VideoWrapper>
            <ReactPlayer 
                url = 'https://youtu.be/gj2BvexmK5E'
                width={"100%"}
                height = {"720px"}
                controls = {true}
                pip = {true}
                />
          </VideoWrapper>

          <Title>Test video</Title>
          <Details>

              <Info>7,948,154 <> &#183;</> Jun,22,2022</Info>
              <Buttons>
                    <Button><ThumbUpOffAltIcon/> 123</Button>
                    <Button><ThumbDownAltIcon/>Dislike</Button>
                    <Button><ReplyOutlinedIcon/> Share</Button>
                    <Button><AddTaskOutlinedIcon/></Button>


              </Buttons>
          </Details>


          <Hr/>
      

      <Channel>
        <ChannelInfo>
            <Image src= {channelImage}/>
            <ChannelDetail>
              <ChannelName>Pastey</ChannelName>
              <ChannelCounter>200M Subscribers</ChannelCounter>
              <Description>That all men come to the knowledge of the truth.</Description>
            </ChannelDetail>
        </ChannelInfo>
        <Subscribe>Subscribe</Subscribe>
      </Channel>



      <Hr/>

      <Comments/>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  )
}

export default Video