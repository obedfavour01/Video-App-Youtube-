import styled from 'styled-components'
import channelImage from '../images/ChannelImage.png'
import React from 'react'



const Container = styled.div`

display: flex;
gap:10px;
margin: 30px 0px;

`
const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
object-fit: cover;`


const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme}) => theme.text};

`

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;

`

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme}) => theme.textSoft};
margin-left: 5px;

`
  
const Text = styled.span`
font-size: 14px;
`
  
  




const Comment = () => {
  return (
<Container>
<Avatar src = {channelImage}/>
  <Details>
    <Name>
      John Doe <Date> 1 day ago</Date>
    </Name>

    <Text>Pastey, your messages are always a Blessing to me.🙇‍♀️ 
      Thank you Sir. May your strength continually be renewed.🙌</Text>
  </Details>
</Container>
  )
}

export default Comment