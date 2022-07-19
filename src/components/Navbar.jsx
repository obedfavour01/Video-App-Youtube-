import React from 'react'
import styled from 'styled-components'
import{ SearchOutlined} from '@mui/icons-material';
const Container = styled.div`
position:sticky;
top:0;
background-color: ${({theme}) => theme.bgLighter}; 
height: 56px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`
const Search = styled.div`
position: absolute;
width: 40%;
left: 0;
right: 0;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius:3px;
`
const Input = styled.input`
border: none;
background-color: transparent;
outline:none;
width: 70%;
height: 100%;
color: ${({theme}) => theme.text};
` 


  

const Navbar = () => {
  return (
   <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
        <SearchOutlined style = {{color: `${({theme}) => theme.text }`}}/>
        
        </Search>

      </Wrapper>
   </Container>
  )
}

export default Navbar