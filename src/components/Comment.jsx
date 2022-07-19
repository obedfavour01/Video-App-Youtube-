import styled from 'styled-components'
import React from 'react'
import channelImage from '../images/ChannelImage.png'


const Container = styled.div`
`

const NewComment = styled.div``

const Avatar = styled.img``

const Input = styled.input``




const Comment = () => {
  return (
<Container>
    <NewComment>
        <Avatar src = {channelImage}/>
        <Input placeholder = "Add a comment ..." />
    </NewComment>
</Container>
  )
}

export default Comment