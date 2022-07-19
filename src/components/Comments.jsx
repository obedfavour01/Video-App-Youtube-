import styled from 'styled-components'
import React from 'react'
import channelImage from '../images/ChannelImage.png'
import Comment from './Comment'


const Container = styled.div`
`

const NewComment = styled.div`
display: flex;
align-items: center;

`

const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
object-fit: cover;`

const Input = styled.input`
color: ${({theme}) => theme.text};
border: none;
border-bottom: 1px solid ${({theme}) => theme.soft};
background-color: transparent;
outline: none;
padding: 5px;
width: 100% ;
`




const Comments = () => {
  return (
<Container>
    <NewComment>
        <Avatar src = {channelImage}/>
        <Input placeholder = "Add a comment ..." />
    </NewComment>

    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>


</Container>
  )
}

export default Comments